import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { MatchController } from './matchs/match.controller';
// import { MatchService } from 'src/data/services/match.service';
// import { MatchEntity } from 'src/data/entities/match.entity';
import { ActualitesController } from './actualites/actualite.controller';

@Module({
  imports:[DomainModule],
  controllers: [ActualitesController]
})
export class PresentationModule {}
