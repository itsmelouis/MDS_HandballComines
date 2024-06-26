import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { GetAllMatchUsecase } from 'src/domain/usecase/matchs/get_all_matchs_usecase';
import { GetMatchByIdUsecase } from 'src/domain/usecase/matchs/get_match_by_id_usecase';
import { CreateMatchUsecase } from 'src/domain/usecase/matchs/create_matchs_usecase';
import { UpdateMatchUsecase } from 'src/domain/usecase/matchs/update_match.usecase';
import { DeleteMatchUsecase } from 'src/domain/usecase/matchs/delete_match.usecase';
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard';
import { RolesGuard, Roles } from 'src/jwt/role.guard';
import { CreateMatchDto } from '../dtos/match/create-match.dto';
import { Match } from 'src/domain/models/match';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Match')
@Controller('matchs')
export class MatchController {
  constructor(
    private readonly getAllMatchUseCase: GetAllMatchUsecase,
    private readonly createMatchUsecase: CreateMatchUsecase,
    private readonly updateMatchUsecase: UpdateMatchUsecase,
    private readonly getMatchByIdUsecase: GetMatchByIdUsecase,
    private readonly deleteMatchUsecase: DeleteMatchUsecase,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllMatchs() {
    return this.getAllMatchUseCase.execute();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getMatchById(@Param('id') id: number) {
    return this.getMatchByIdUsecase.execute(id);
  }

  @Post()
  @Roles('coach', 'admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  async createMatch(@Body() dto: CreateMatchDto): Promise<any> {
    const match = new Match(
      dto.nom_domicile,
      dto.nom_exterieur,
      dto.score,
      dto.localisation,
      dto.date_match,
    );
    return this.createMatchUsecase.execute(match);
  }

  @Put(':id')
  @Roles('coach', 'admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  async updateMatch(
    @Param('id') id: number,
    @Body() match: CreateMatchDto,
  ): Promise<any> {
    return this.updateMatchUsecase.execute(id, match);
  }

  @Delete(':id')
  async deleteMatch(@Param('id') id: number): Promise<void> {
    return this.deleteMatchUsecase.execute(id);
  }
}
