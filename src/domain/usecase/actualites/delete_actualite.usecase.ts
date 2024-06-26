import { Injectable } from '@nestjs/common';
import { ActualiteService } from 'src/data/services/actualite/actualite.service';

@Injectable()
export class DeleteActualiteUseCase {
  constructor(private readonly actualiteService: ActualiteService) {}

  async execute(id: number): Promise<void> {
    return this.actualiteService.deleteActualite(id);
  }
}
