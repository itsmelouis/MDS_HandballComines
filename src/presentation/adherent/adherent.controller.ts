import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { RegisterMatchDto } from 'src/presentation/dtos/adherent/register-match.dto';
import { UnregisterMatchDto } from 'src/presentation/dtos/adherent/unregister-match.dto';
import { GetAllAdherentsUseCase } from 'src/domain/usecase/adherent/get_all_adherents.usecase';
import { GetAdherentByIdUseCase } from 'src/domain/usecase/adherent/get_adherent_by_id.usecase';
import { RegisterForMatchUseCase } from 'src/domain/usecase/adherent/register_for_match.usecase';
import { UnregisterFromMatchUseCase } from 'src/domain/usecase/adherent/unregister_from_match.usecase';
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard';
import { Roles, RolesGuard } from 'src/jwt/role.guard';
import { ApiTags } from '@nestjs/swagger';
import { AdherentEntity } from 'src/data/entities/adherent.entity';

@ApiTags('Adhérents')
@Controller('adherents')
export class AdherentController {
  constructor(
    private readonly getAllAdherentsUsecase: GetAllAdherentsUseCase,
    private readonly getAdherentByIdUsecase: GetAdherentByIdUseCase,
    private readonly registerForMatchUsecase: RegisterForMatchUseCase,
    private readonly unregisterFromMatchUsecase: UnregisterFromMatchUseCase,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllAdherents(): Promise<AdherentEntity[]> {
    return this.getAllAdherentsUsecase.execute();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getAdherentByEmail(@Param('email') email: string): Promise<any> {
    return this.getAdherentByIdUsecase.execute(email);
  }

  @Post('register-match')
  @Roles('joueur', 'admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  async registerForMatch(
    @Request() req,
    @Body() dto: RegisterMatchDto,
  ): Promise<void> {
    return this.registerForMatchUsecase.execute(req.user.id, dto.matchId);
  }

  @Post('unregister-match')
  @Roles('joueur', 'admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  async unregisterFromMatch(
    @Request() req,
    @Body() dto: UnregisterMatchDto,
  ): Promise<void> {
    return this.unregisterFromMatchUsecase.execute(req.user.id, dto.matchId);
  }
}
