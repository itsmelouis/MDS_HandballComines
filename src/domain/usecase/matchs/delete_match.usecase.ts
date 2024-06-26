import { Injectable } from '@nestjs/common';
import { MatchService } from '../../../data/services/match/match.service';
@Injectable()
export class DeleteMatchUsecase {
  constructor(private matchService: MatchService) {}
  public execute(id: number): any {
    return this.matchService.deleteMatch(id);
  }
}
