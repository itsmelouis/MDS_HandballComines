import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { AdherentEntity } from './adherent.entity';

@Entity('actualite')
export class ActualiteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'titre', length: 255, nullable: false })
  titre: string;

  @Column({ name: 'date_publication', type: 'date', nullable: false })
  date_publication: Date;

  @Column({ name: 'contenu', type: 'text', nullable: false })
  contenu: string;

  @ManyToOne(() => AdherentEntity, (adherent) => adherent.actualites)
  adherent: AdherentEntity;
}
