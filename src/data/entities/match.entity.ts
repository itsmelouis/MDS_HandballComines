import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Adherent } from './adherent.entity';

@Entity('match')
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom_domicile', length: 50, nullable: false })
  nom_domicile: string;

  @Column({ name: 'nom_exterieur', length: 50, nullable: false })
  nom_exterieur: string;

  @Column({ name: 'score', length: 5, nullable: false })
  score: string;

  @Column({ name: 'localisation', length: 50, nullable: false })
  localisation: string;

  @Column({ name: 'date_match', type: 'date', nullable: false })
  date_match: Date;

  @ManyToOne(() => Adherent, (adherent) => adherent.matches)
  adherent: Adherent;
}
