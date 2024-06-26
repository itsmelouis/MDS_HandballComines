import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CreateActualiteUseCase } from 'src/domain/usecase/actualites/create_actualite.usecase';
import { GetAllActualitesUseCase } from 'src/domain/usecase/actualites/get_all_actualites.usecase';
import { GetActualiteByIdUseCase } from 'src/domain/usecase/actualites/get_actualite_by_id.usecase';
import { CreateActualiteDto } from 'src/presentation/dtos/actualite/create-actualite.dto';
import { ActualiteEntity } from 'src/data/entities/actualite.entity';
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard';
import { Roles, RolesGuard } from 'src/jwt/role.guard';
import { Actualite } from 'src/domain/models/actualite';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Actualités')
@Controller('actualites')
export class ActualiteController {
  constructor(
    private readonly createActualiteUsecase: CreateActualiteUseCase,
    private readonly getAllActualitesUsecase: GetAllActualitesUseCase,
    private readonly getActualiteByIdUsecase: GetActualiteByIdUseCase,
  ) {}

  @Post()
  @Roles('contributeur', 'admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  async createActualite(
    @Request() req,
    @Body() dto: CreateActualiteDto,
  ): Promise<ActualiteEntity> {
    const actu = new Actualite(dto.titre, new Date(), dto.contenu, req.user.id);
    return this.createActualiteUsecase.execute(actu);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllActualites(): Promise<any[]> {
    return this.getAllActualitesUsecase.execute();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getActualiteById(@Param('id') id: number): Promise<any> {
    return this.getActualiteByIdUsecase.execute(id);
  }
}
