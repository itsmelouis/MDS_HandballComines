import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Adherent } from './adherent.entity';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @OneToMany(() => Adherent, (adherent) => adherent.role)
  adherents: Adherent[];
}
