import { Injectable } from '@nestjs/common';
import { AdherentService } from 'src/data/services/adherent/adherent.service';
import { AdherentEntity } from 'src/data/entities/adherent.entity';

@Injectable()
export class GetAllAdherentsUseCase {
  constructor(private readonly adherentService: AdherentService) {}

  async execute(): Promise<AdherentEntity[]> {
    return this.adherentService.findAll();
  }
}
