import { Injectable } from '@nestjs/common'; 
import { MatchService } from "../../../data/services/match.service"; 
@Injectable() 
export class GetAllMatchUsecase { 
 constructor(private matchService: MatchService) {} 
 public execute(): any { 
 return this.matchService.getAllMatchs(); 
 } 
}