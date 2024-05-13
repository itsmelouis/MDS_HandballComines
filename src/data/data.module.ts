import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdherentEntity } from './entities/adherent.entity';
import { ActualiteEntity } from './entities/actualite.entity';
import { MatchEntity } from './entities/match.entity';
import { RoleEntity } from './entities/role.entity';
import { MatchService } from './services/match/match.service';
import { ActualiteService } from './services/actualite.service';

@Module({
  providers: [ActualiteService, MatchService],
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
  exports: [ActualiteService, MatchService],
})
export class DataModule {}
