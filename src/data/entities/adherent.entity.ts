import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Unique,
} from 'typeorm';
import { MatchEntity } from './match.entity';
import { ActualiteEntity } from './actualite.entity';

@Entity('adherent')
@Unique(['email'])
export class AdherentEntity {
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

  @Column({ name: 'date_inscription', type: 'date', nullable: true })
  date_inscription: Date;

  @Column({ name: 'role', nullable: false })
  role: string;

  @OneToMany(() => MatchEntity, (match) => match.adherent)
  matches: MatchEntity[];

  @OneToMany(() => ActualiteEntity, (actualite) => actualite.adherent)
  actualites: ActualiteEntity[];
}
