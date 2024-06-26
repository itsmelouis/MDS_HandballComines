import { Injectable } from '@nestjs/common';
import { AdherentService } from 'src/data/services/adherent/adherent.service';
import { MatchService } from 'src/data/services/match/match.service';

@Injectable()
export class UnregisterFromMatchUseCase {
  constructor(
    private readonly adherentService: AdherentService,
    private readonly matchService: MatchService,
  ) {}

  async execute(adherentEmail: string, matchId: number): Promise<void> {
    const adherent = await this.adherentService.findOne(adherentEmail);
    const match = await this.matchService.getMatchById(matchId);
    await this.adherentService.unregisterFromMatch(adherent.email, match.id);
  }
}
