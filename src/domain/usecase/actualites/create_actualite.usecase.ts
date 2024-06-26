import { Injectable } from '@nestjs/common';
import { ActualiteService } from 'src/data/services/actualite/actualite.service';
import { Actualite } from 'src/domain/models/actualite';

@Injectable()
export class CreateActualiteUseCase {
  constructor(private readonly actualiteService: ActualiteService) {}

  async execute(actualite: Actualite): Promise<any> {
    return this.actualiteService.createActualite(actualite);
  }
}
