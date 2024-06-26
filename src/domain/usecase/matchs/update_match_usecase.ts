import { Injectable } from '@nestjs/common';
import { MatchService } from 'src/data/services/match.service';
import { MatchEntity } from 'src/data/entities/match.entity';

@Injectable()
export class UpdateMatchUsecase {
  constructor(private matchService: MatchService) {}

  public async execute(id: number, match: MatchEntity): Promise<MatchEntity> {
    return await this.matchService.updateMatch(id, match);
  }
}
