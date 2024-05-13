import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ActualiteEntity } from "../entities/actualite.entity";
import { AdherentEntity } from "../entities/adherent.entity";
import { Actualite } from "../../domain/models/actualite";

@Injectable()
export class ActualiteService {
    constructor(
        @InjectRepository(ActualiteEntity)
        private actualiteRepository: Repository<ActualiteEntity>,
        @InjectRepository(AdherentEntity)
        private adherentRepository: Repository<AdherentEntity> 
    ) {}

    async findAll(): Promise<Actualite[]> {
        return await this.actualiteRepository.find({
            relations: ["adherent", "adherent.role"] 
        });
    }

    async findOne(id: number): Promise<Actualite | undefined> {
        return await this.actualiteRepository.findOne({
            where: { id }, 
            relations: ["adherent", "adherent.role"] 
        });
    }

    async createActualite(actualiteData: Actualite): Promise<Actualite> {
        // Log immediately after fetching the adherent to check if the adherent is loaded
        const adherent = await this.adherentRepository.findOne({
            where: { id: actualiteData.adherent.id },
            relations: ["role"]
        });
    
        console.log("Adherent loaded:", adherent);  // Check what adherent data is loaded
        if (adherent) {
            console.log("Role loaded:", adherent.role); // Check if the role is loaded and what it is
        } else {
            console.log("No adherent found with ID:", actualiteData.adherent.id); // Confirm no adherent was found
        }
    
        if (!adherent) {
            throw new Error("Adherent not found.");
        }
    
        if (!adherent.role) {
            throw new Error("Role information is missing for this adherent.");
        }
    
        if (adherent.role.nom !== "Contributeur") {
            throw new Error("Only adherents with the 'Contributeur' role can publish actualités.");
        }
    
        // Log the data that will be used to create the new actualité
        console.log("Creating actualité with:", {
            titre: actualiteData.titre,
            date_publication: actualiteData.date_publication,
            contenu: actualiteData.contenu,
            adherent: adherent.nom // Log adherent's name to ensure it's correct
        });
    
        const actualiteEntity = this.actualiteRepository.create({
            titre: actualiteData.titre,
            date_publication: actualiteData.date_publication,
            contenu: actualiteData.contenu,
            adherent: adherent
        });
    
        return await this.actualiteRepository.save(actualiteEntity);
    }
    
}    