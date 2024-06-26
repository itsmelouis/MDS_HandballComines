import { Injectable } from '@nestjs/common'; 
import {MatchService} from "src/data/services/match.service"; 
import { MatchEntity } from 'src/data/entities/match.entity';

@Injectable()
export class GetMatchByIdUsecase {
  constructor(private matchService: MatchService) {}

  public execute(id: number): Promise<any> {
    return this.matchService.getMatchById(id);
  }
}
