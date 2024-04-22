import { Adherent } from './adherent';

export class Match {
  id: number;
  nom_domicile: string;
  nom_exterieur: string;
  score: string;
  localisation: string;
  date_match: Date;
  adherent: Adherent;

  constructor(
    id: number,
    nom_domicile: string,
    nom_exterieur: string,
    score: string,
    localisation: string,
    date_match: Date,
    adherent: Adherent,
  ) {
    this.id = id;
    this.nom_domicile = nom_domicile;
    this.nom_exterieur = nom_exterieur;
    this.score = score;
    this.localisation = localisation;
    this.date_match = date_match;
    this.adherent = adherent;
  }
}
