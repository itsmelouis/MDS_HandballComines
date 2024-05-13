import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Unique,
} from 'typeorm';
import { RoleEntity } from './role.entity';
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

  @Column({ name: 'date_naissance', type: 'date', nullable: false })
  date_inscription: Date;

  @ManyToOne(() => RoleEntity, (role) => role.adherents)
  role: RoleEntity;

  @OneToMany(() => MatchEntity, (match) => match.adherent)
  matches: MatchEntity[];

  @OneToMany(() => ActualiteEntity, (actualite) => actualite.adherent)
  actualites: ActualiteEntity[];
}
