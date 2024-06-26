import { Injectable } from '@nestjs/common';
import { ActualiteService } from 'src/data/services/actualite/actualite.service';
import { Actualite } from 'src/domain/models/actualite';

@Injectable()
export class UpdateActualiteUseCase {
  constructor(private readonly actualiteService: ActualiteService) {}

  async execute(id: number, actualiteData: Actualite): Promise<Actualite> {
    return this.actualiteService.updateActualite(id, actualiteData);
  }
}
