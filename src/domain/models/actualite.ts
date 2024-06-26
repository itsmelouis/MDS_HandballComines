import { AdherentEntity } from 'src/data/entities/adherent.entity';

export class Actualite {
  titre: string;
  date_publication: Date;
  contenu: string;
  adherent: AdherentEntity;

  constructor(
    titre: string,
    date_publication: Date,
    contenu: string,
    adherent: AdherentEntity,
  ) {
    this.titre = titre;
    this.date_publication = date_publication;
    this.contenu = contenu;
    this.adherent = adherent;
  }
}
