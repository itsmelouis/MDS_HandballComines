import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MatchEntity } from "../entities/match.entity";
import { Repository } from "typeorm";
import { Match } from "../../domain/models/match";
@Injectable()
export class MatchService {
    constructor(
        @InjectRepository(MatchEntity)
        private matchRepository: Repository<MatchEntity>,
    ) { }
    async findAll(): Promise<Match[]> {
        return this.matchRepository.find();
    }
    async createMatch(match: Match): Promise<any> {
        const matchEntity = this.matchRepository.create({
            nom_domicile: match.nom_domicile,
            nom_exterieur: match.nom_exterieur,
            score: match.score,
            localisation: match.localisation,
            date_match: match.date_match,

        });
        return this.matchRepository.save(matchEntity);
    }
}