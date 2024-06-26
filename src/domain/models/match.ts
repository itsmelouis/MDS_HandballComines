export class Match {
  nom_domicile: string;
  nom_exterieur: string;
  score: string;
  localisation: string;
  date_match: Date;
  constructor(
    nom_domicile: string,
    nom_exterieur: string,
    score: string,
    localisation: string,
    date_match: Date,
  ) {
    this.nom_domicile = nom_domicile;
    this.nom_exterieur = nom_exterieur;
    this.score = score;
    this.localisation = localisation;
    this.date_match = date_match;
  }
}
