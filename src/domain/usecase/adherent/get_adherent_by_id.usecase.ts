import { Injectable } from '@nestjs/common';
import { AdherentService } from 'src/data/services/adherent/adherent.service';
import { AdherentEntity } from 'src/data/entities/adherent.entity';

@Injectable()
export class GetAdherentByIdUseCase {
  constructor(private readonly adherentService: AdherentService) {}

  async execute(email: string): Promise<AdherentEntity> {
    return this.adherentService.findOne(email);
  }
}
