import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Adherent as AdherentEntity } from '../../entities/adherent.entity';
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
  async createAdherent(adherent: Adherent): Promise<AdherentEntity> {
    const adherentEntity = this.adherentRepository.create({
      nom: adherent.nom,
      prenom: adherent.prenom,
      date_inscription: adherent.date_inscription,
      role: adherent.role,
    });
    return this.adherentRepository.save(adherentEntity);
  }
}
