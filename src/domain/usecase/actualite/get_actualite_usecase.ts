import { Injectable } from '@nestjs/common';
import { ActualiteService } from "../../../data/services/actualite.service";
import { Actualite } from "../../models/actualite";

@Injectable()
export class GetActualitesUsecase {
    constructor(private actualiteService: ActualiteService) {}

    public getAllActualites(): Promise<Actualite[]> {
        return this.actualiteService.findAll();
    }

    public getActualiteById(id: number): Promise<Actualite | undefined> {
        return this.actualiteService.findOne(id);
    }
}
