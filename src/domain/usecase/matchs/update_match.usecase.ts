import { Injectable } from '@nestjs/common';
import { MatchService } from '../../../data/services/match/match.service';
import { Match } from '../../models/match';
@Injectable()
export class UpdateMatchUsecase {
  constructor(private matchService: MatchService) {}
  public execute(id: number, matchData: Match): Promise<Match> {
    return this.matchService.updateMatch(id, matchData);
  }
}
