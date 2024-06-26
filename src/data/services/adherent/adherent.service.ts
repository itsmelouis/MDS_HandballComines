import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdherentEntity } from '../../entities/adherent.entity';
import { Repository } from 'typeorm';
import { Adherent } from '../../../domain/models/adherent';
import { randomBytes, pbkdf2Sync } from 'crypto';
import { MatchService } from '../match/match.service';

@Injectable()
export class AdherentService {
  constructor(
    @InjectRepository(AdherentEntity)
    private adherentRepository: Repository<AdherentEntity>,
    private readonly matchService: MatchService,
  ) {}

  async findAll(): Promise<AdherentEntity[]> {
    return this.adherentRepository.find();
  }

  async findOne(email: string): Promise<AdherentEntity> {
    return this.adherentRepository.findOne({
      where: { email: email },
    });
  }

  async findByEmail(email: string): Promise<AdherentEntity[]> {
    return this.adherentRepository.find({
      where: { email },
    });
  }

  async findByEmailAndPassword(
    email: string,
    password: string,
  ): Promise<AdherentEntity> {
    const member = await this.adherentRepository.findOne({
      where: { email },
    });
    if (!member) {
      throw new NotFoundException(`Member with email ${email} not found`);
    }
    const isPasswordValid = this.comparePassword(password, member.password);
    if (isPasswordValid) {
      return member;
    } else {
      throw new NotFoundException('Invalid credentials');
    }
  }

  async createAdherent(members: Adherent): Promise<any> {
    const hashedPassword = this.hashPassword(members.password);
    const memberEntity = this.adherentRepository.create({
      email: members.email,
      prenom: members.prenom,
      nom: members.nom,
      password: hashedPassword,
      date_inscription: members.date_inscription,
      role: members.role,
    });
    return this.adherentRepository.save(memberEntity);
  }

  async deleteMember(email: string): Promise<void> {
    await this.adherentRepository.delete({ email });
  }

  async registerForMatch(
    adherentEmail: string,
    matchId: number,
  ): Promise<void> {
    const adherent = await this.findOne(adherentEmail);
    const match = await this.matchService.getMatchById(matchId);

    if (adherent && match) {
      adherent.matches.push(match);
      await this.adherentRepository.save(adherent);
    }
  }

  async unregisterFromMatch(
    adherentEmail: string,
    matchId: number,
  ): Promise<void> {
    const adherent = await this.findOne(adherentEmail);
    const match = await this.matchService.getMatchById(matchId);

    if (adherent && match) {
      adherent.matches = adherent.matches.filter((m) => m.id !== match.id);
      await this.adherentRepository.save(adherent);
    }
  }

  async updateMembers(email: string, members: Partial<Adherent>): Promise<any> {
    const member = await this.adherentRepository.findOne({ where: { email } });
    if (!member) {
      throw new NotFoundException(`Member with email ${email} not found`);
    }
    if (members.password) {
      members.password = this.hashPassword(members.password);
    }
    Object.assign(member, members);
    await this.adherentRepository.save(member);
    return member;
  }

  // Fonctions de hashage et de comparaison des mots de passe
  private hashPassword(password: string): string {
    const salt = randomBytes(16).toString('hex');
    const hash = pbkdf2Sync(password, salt, 10000, 64, 'sha256').toString(
      'hex',
    );
    return `${salt}:${hash}`;
  }

  private comparePassword(password: string, storedHash: string): boolean {
    const [salt, originalHash] = storedHash.split(':');
    const hash = pbkdf2Sync(password, salt, 10000, 64, 'sha256').toString(
      'hex',
    );
    return hash === originalHash;
  }
}
