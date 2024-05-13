import {
  Controller,
  // Get,
  // Post,
  // Put,
  // Delete,
  // Body,
  // Param,
} from '@nestjs/common';
// import { MatchService } from 'src/data/services/match.service';
// import { MatchEntity } from 'src/data/entities/match.entity';
import { GetAllMatchUsecase } from 'src/domain/usecase/matchs/get_all_matchs_usecase';

@Controller('matchs')
export class MatchController {
  constructor(private readonly getAllMatchUseCase: GetAllMatchUsecase) {}

  // @Get()
  // async getAllMatchs() {
  //   return this.getAllMatchUseCase.getAllMachs();
  // }

  // @Get(':id')
  // getMatchById(@Param('id') id: number) {
  //   return this.get.getMatchById(id);
  // }

  // @Post()
  // async createMatch(@Body() match: MatchEntity): Promise<any> {
  //   return this.matchService.createMatch(match);
  // }

  // @Put(':id')
  // async updateMatch(
  //   @Param('id') id: number,
  //   @Body() match: MatchEntity,
  // ): Promise<any> {
  //   return this.matchService.updateMatch(id, match);
  // }

  // @Delete(':id')
  // async deleteMatch(@Param('id') id: number): Promise<void> {
  //   return this.matchService.deleteMatch(id);
  // }
}
