import { Role } from './role';
import { Match } from './match';
import { Actualite } from './actualite';

export class Adherent {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  date_inscription: Date;
  role: Role;
  matches: Match[];
  actualites: Actualite[];

  constructor(
    id: number,
    nom: string,
    prenom: string,
    email: string,
    password: string,
    date_inscription: Date,
    role: Role,
  ) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
    this.date_inscription = date_inscription;
    this.role = role;
    this.matches = [];
    this.actualites = [];
  }
}
