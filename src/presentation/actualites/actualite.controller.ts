import { Controller, Get, Post, Body, Param, HttpStatus, HttpCode } from '@nestjs/common';
import { GetActualitesUsecase } from '../../domain/usecase/actualite/get_actualite_usecase';
import { CreateActualiteUsecase } from '../../domain/usecase/actualite/create_actualite_usecase';
import { Actualite } from '../../domain/models/actualite';

@Controller('actualites')
export class ActualitesController {
    constructor(
        private readonly getActualitesUsecase: GetActualitesUsecase,
        private readonly createActualiteUsecase: CreateActualiteUsecase
    ) {}

    @Get()
    async getAllActualites(): Promise<Actualite[]> {
        return this.getActualitesUsecase.getAllActualites();
    }

    @Get('/:id')
    async getActualiteById(@Param('id') id: number): Promise<Actualite | undefined> {
        return this.getActualitesUsecase.getActualiteById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createActualite(@Body() actualiteData: Actualite): Promise<Actualite> {
        return this.createActualiteUsecase.execute(actualiteData);
    }
}
