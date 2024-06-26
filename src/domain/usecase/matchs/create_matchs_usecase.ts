import { Injectable } from '@nestjs/common';
import { MatchService } from 'src/data/services/match.service';
import { MatchEntity } from 'src/data/entities/match.entity';

@Injectable()
export class CreateMatchUsecase {
  constructor(private matchService: MatchService) {}

  public async execute(match: MatchEntity): Promise<MatchEntity> {
    return await this.matchService.createMatch(match);
  }
}
