import { Adherent } from './adherent';

export class Actualite {
  id: number;
  titre: string;
  date_publication: Date;
  contenu: string;
  adherent: Adherent;

  constructor(
    id: number,
    titre: string,
    date_publication: Date,
    contenu: string,
    adherent: Adherent,
  ) {
    this.id = id;
    this.titre = titre;
    this.date_publication = date_publication;
    this.contenu = contenu;
    this.adherent = adherent;
  }
}
