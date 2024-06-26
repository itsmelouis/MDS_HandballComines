import { Injectable } from '@nestjs/common';
import { ActualiteService } from 'src/data/services/actualite/actualite.service';
import { ActualiteEntity } from 'src/data/entities/actualite.entity';

@Injectable()
export class GetAllActualitesUseCase {
  constructor(private readonly actualiteService: ActualiteService) {}

  async execute(): Promise<ActualiteEntity[]> {
    return this.actualiteService.findAll();
  }
}
