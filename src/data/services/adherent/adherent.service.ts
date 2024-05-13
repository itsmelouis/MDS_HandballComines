import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdherentEntity } from '../../entities/adherent.entity';
import { Repository } from 'typeorm';
import { Adherent } from '../../../domain/models/adherent';

@Injectable()
export class AdherentService {
  constructor(
    @InjectRepository(AdherentEntity)
    private adherentRepository: Repository<AdherentEntity>,
  ) {}
  async findAll(): Promise<AdherentEntity[]> {
    return this.adherentRepository.find();
  }
  async findOne(email: string): Promise<AdherentEntity> {
    return this.adherentRepository.findOne({
      where: { email: email },
    });
  }
  async create(adherent: Adherent): Promise<AdherentEntity> {
    const adherentEntity = this.adherentRepository.create({
      nom: adherent.nom,
      prenom: adherent.prenom,
      date_inscription: adherent.date_inscription,
      role: adherent.role,
    });
    return this.adherentRepository.save(adherentEntity);
  }
  async update(id: number, adherent: Adherent): Promise<AdherentEntity> {
    const adherentEntity = await this.adherentRepository.findOne({
      where: { id: id },
    });
    return this.adherentRepository.save({ ...adherentEntity, ...adherent });
  }

  async delete(id: number): Promise<void> {
    await this.adherentRepository.delete(id);
  }
}
