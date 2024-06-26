import { Injectable, NotFoundException } from '@nestjs/common';
import { ActualiteService } from 'src/data/services/actualite/actualite.service';
import { ActualiteEntity } from 'src/data/entities/actualite.entity';

@Injectable()
export class GetActualiteByIdUseCase {
  constructor(private readonly actualiteService: ActualiteService) {}

  async execute(id: number): Promise<ActualiteEntity[]> {
    const actualite = await this.actualiteService.findById(id);
    if (!actualite.length) {
      throw new NotFoundException(`Actualité with ID ${id} not found`);
    }
    return actualite;
  }
}
