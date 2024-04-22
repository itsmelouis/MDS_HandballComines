import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Adherent } from './adherent.entity';

@Entity('match')
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom_domicile: string;

  @Column()
  nom_exterieur: string;

  @Column()
  score: string;

  @Column()
  localisation: string;

  @Column()
  date_match: Date;

  @ManyToOne(() => Adherent, (adherent) => adherent.matches)
  adherent: Adherent;
}
