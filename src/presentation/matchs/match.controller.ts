import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { MatchEntity } from 'src/data/entities/match.entity';
import { CreateMatchUsecase } from 'src/domain/usecase/matchs/create_matchs_usecase';
import { GetAllMatchUsecase } from 'src/domain/usecase/matchs/get_all_matchs_usecase';
import { GetMatchByIdUsecase } from 'src/domain/usecase/matchs/get_match_by_id_usecase';
import { MatchService } from 'src/data/services/match.service';

@Controller('matchs')
export class MatchController {
  constructor(
    private readonly getAllMatchUseCase: GetAllMatchUsecase,
    private readonly createMatchUsecase: CreateMatchUsecase,
    private getMatchByIdUsecase: GetMatchByIdUsecase,
  ) {}

  @Get()
  async getAllMatchs(): Promise<MatchEntity[]> {
    return this.getAllMatchUseCase.execute();
  }

  @Post()
  async createMatch(@Body() match: MatchEntity): Promise<MatchEntity> {
    return this.createMatchUsecase.execute(match);
  }

  @Get(':id')
  public async getMatchById(@Param('id') id: number): Promise<any> {
    return this.getMatchByIdUsecase.execute(id);
  }

  @Put(':id')
  async updateMatch(
    @Param('id') id: number,
    @Body() match: MatchEntity,
  ): Promise<any> {
    return this.updateMatchUsecase.updateMatch(id, match);
  }

  @Delete(':id')
  async deleteMatch(@Param('id') id: number): Promise<void> {
    return this.MatchService.deleteMatch(id);
  }
}
