import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActualiteEntity } from 'src/data/entities/actualite.entity';
import { Actualite } from 'src/domain/models/actualite';

@Injectable()
export class ActualiteService {
  constructor(
    @InjectRepository(ActualiteEntity)
    private actualiteRepository: Repository<ActualiteEntity>,
  ) {}

  async findAll(): Promise<ActualiteEntity[]> {
    return this.actualiteRepository.find();
  }

  async findById(id: number): Promise<ActualiteEntity[]> {
    return this.actualiteRepository.find({
      where: {
        id: id,
      },
    });
  }

  async createActualite(actualite: Actualite): Promise<any> {
    const newsEntity = this.actualiteRepository.create({
      contenu: actualite.contenu,
      adherent: actualite.adherent,
      date_publication: actualite.date_publication,
      titre: actualite.titre,
    });
    return this.actualiteRepository.save(newsEntity);
  }

  async deleteActualite(id: number): Promise<void> {
    await this.actualiteRepository.delete(id);
  }

  async updateActualite(id: number, newsData: Actualite): Promise<Actualite> {
    const news = await this.actualiteRepository.findOne({ where: { id } });
    if (!news) {
      throw new NotFoundException(`News with ID ${id} not found`);
    }
    Object.assign(news, newsData);
    await this.actualiteRepository.save(news);
    return news;
  }
}
