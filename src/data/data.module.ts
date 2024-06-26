import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdherentEntity } from './entities/adherent.entity';
import { ActualiteEntity } from './entities/actualite.entity';
import { MatchEntity } from './entities/match.entity';
import { RoleEntity } from './entities/role.entity';
import { MatchService } from './services/match/match.service';
import { AdherentService } from './services/adherent/adherent.service';
import { ActualiteService } from './services/actualite/actualite.service';

@Module({
  providers: [MatchService, AdherentService, ActualiteService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'src/data/databases/hcc.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      AdherentEntity,
      ActualiteEntity,
      MatchEntity,
      RoleEntity,
    ]),
  ],
  exports: [MatchService, AdherentService, ActualiteService],
})
export class DataModule {}
