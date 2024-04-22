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

  @Column({ name: 'nom', length: 20, nullable: false })
  nom: string;

  @Column({ name: 'prenom', length: 20, nullable: false })
  prenom: string;

  @Column({ name: 'email', length: 50, nullable: false })
  date_inscription: Date;

  @ManyToOne(() => Role, (role) => role.adherents)
  role: Role;

  @OneToMany(() => Match, (match) => match.adherent)
  matches: Match[];

  @OneToMany(() => Actualite, (actualite) => actualite.adherent)
  actualites: Actualite[];
}
