import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AdherentEntity } from './adherent.entity';

@Entity('role')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom', length: 20, nullable: false })
  nom: string;

  @OneToMany(() => AdherentEntity, (adherent) => adherent.role)
  adherents: AdherentEntity[];
}
