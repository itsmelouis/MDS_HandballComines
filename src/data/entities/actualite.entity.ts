import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Adherent } from './adherent.entity';

@Entity('actualite')
export class Actualite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'titre', length: 70, nullable: false })
  titre: string;

  @Column({ name: 'date_publication', type: 'date', nullable: false })
  date_publication: Date;

  @Column({ name: 'contenu', type: 'text', nullable: false })
  contenu: string;

  @ManyToOne(() => Adherent, (adherent) => adherent.actualites)
  adherent: Adherent;
}
