import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { MatchController } from './matchs/match.controller';
import { AuthController } from './auth/auth.controller';
import { ActualiteController } from './actualites/actualites.controller';
import { AdherentController } from './adherent/adherent.controller';
// import { MatchService } from 'src/data/services/match.service';
// import { MatchEntity } from 'src/data/entities/match.entity';

@Module({
  imports: [DomainModule],
  controllers: [
    MatchController,
    AuthController,
    ActualiteController,
    AdherentController,
  ],
  providers: [],
})
export class PresentationModule {}
