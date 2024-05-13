import { Injectable } from '@nestjs/common';
import { MatchService } from 'src/data/services/match.service';
import { Match } from '../../models/match';
@Injectable()
export class CreateMatchUsecase {
  constructor(private matchService: MatchService) {}
  public execute(match: Match): any {
    return this.matchService.createMatch(match);
  }
}
