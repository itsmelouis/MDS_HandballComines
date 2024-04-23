import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Unique,
} from 'typeorm';
import { Role } from './role.entity';
import { Match } from './match.entity';
import { Actualite } from './actualite.entity';

@Entity('adherent')
@Unique(['email'])
export class Adherent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom', length: 50, nullable: false })
  nom: string;

  @Column({ name: 'prenom', length: 50, nullable: false })
  prenom: string;

  @Column({ name: 'email', length: 100, nullable: false })
  email: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'date_naissance', type: 'date', nullable: false })
  date_inscription: Date;

  @ManyToOne(() => Role, (role) => role.adherents)
  role: Role;

  @OneToMany(() => Match, (match) => match.adherent)
  matches: Match[];

  @OneToMany(() => Actualite, (actualite) => actualite.adherent)
  actualites: Actualite[];
}
