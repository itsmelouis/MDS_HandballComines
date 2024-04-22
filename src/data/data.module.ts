import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adherent } from './entities/adherent.entity';
import { Actualite } from './entities/actualite.entity';
import { Match } from './entities/match.entity';
import { Role } from './entities/role.entity';

@Module({
  providers: [],
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'src/data/databases/hcc.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Adherent, Actualite, Match, Role]),
  ],
  exports: [],
})
export class DataModule {}
