import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Adherent } from './adherent.entity';

@Entity('actualite')
export class Actualite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column()
  date_publication: Date;

  @Column('text')
  contenu: string;

  @ManyToOne(() => Adherent, (adherent) => adherent.actualites)
  adherent: Adherent;
}
