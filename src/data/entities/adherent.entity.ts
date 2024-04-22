import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Role } from './role.entity';
import { Match } from './match.entity';
import { Actualite } from './actualite.entity';

@Entity('adherent')
export class Adherent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  date_inscription: Date;

  @ManyToOne(() => Role, (role) => role.adherents)
  role: Role;

  @OneToMany(() => Match, (match) => match.adherent)
  matches: Match[];

  @OneToMany(() => Actualite, (actualite) => actualite.adherent)
  actualites: Actualite[];
}
