import { Role } from './role';
import { Match } from './match';
import { Actualite } from './actualite';

export class Adherent {
  id: number;
  nom: string;
  prenom: string;
  date_inscription: Date;
  role: Role;
  matches: Match[];
  actualites: Actualite[];

  constructor(
    id: number,
    nom: string,
    prenom: string,
    date_inscription: Date,
    role: Role,
  ) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.date_inscription = date_inscription;
    this.role = role;
    this.matches = [];
    this.actualites = [];
  }
}
