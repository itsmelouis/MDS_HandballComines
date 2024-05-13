import { Injectable } from '@nestjs/common';
import { ActualiteService } from "../../../data/services/actualite.service";
import { Actualite } from "../../models/actualite";

@Injectable()
export class CreateActualiteUsecase {
    constructor(private actualiteService: ActualiteService) {}

    public execute(actualite: Actualite): Promise<Actualite> {
        return this.actualiteService.createActualite(actualite);
    }
}
