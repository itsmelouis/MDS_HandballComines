export class Adherent {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  date_inscription: number;
  role: string;

  constructor(
    nom: string,
    prenom: string,
    email: string,
    password: string,
    date_inscription: number,
    role: string,
  ) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
    this.date_inscription = date_inscription;
    this.role = role;
  }
}
