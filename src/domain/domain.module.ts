import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { JwtService } from '@nestjs/jwt';

import { CreateMatchUsecase } from './usecase/matchs/create_matchs_usecase';
import { GetAllMatchUsecase } from './usecase/matchs/get_all_matchs_usecase';
import { GetMatchByIdUsecase } from './usecase/matchs/get_match_by_id_usecase';
import { UpdateMatchUsecase } from './usecase/matchs/update_match.usecase';
import { DeleteMatchUsecase } from './usecase/matchs/delete_match.usecase';

import { LoginUsecase } from './usecase/auth/login.usecase';
import { RegisterUsecase } from './usecase/auth/register.usecase';

import { CreateActualiteUseCase } from './usecase/actualites/create_actualite.usecase';
import { GetAllActualitesUseCase } from './usecase/actualites/get_all_actualites.usecase';
import { GetActualiteByIdUseCase } from './usecase/actualites/get_actualite_by_id.usecase';
import { UpdateActualiteUseCase } from './usecase/actualites/update_actualite.usecase';
import { DeleteActualiteUseCase } from './usecase/actualites/delete_actualite.usecase';

import { GetAllAdherentsUseCase } from './usecase/adherent/get_all_adherents.usecase';
import { GetAdherentByIdUseCase } from './usecase/adherent/get_adherent_by_id.usecase';
import { RegisterForMatchUseCase } from './usecase/adherent/register_for_match.usecase';
import { UnregisterFromMatchUseCase } from './usecase/adherent/unregister_from_match.usecase';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DataModule, ConfigModule.forRoot()],
  providers: [
    JwtService,
    CreateMatchUsecase,
    GetAllMatchUsecase,
    GetMatchByIdUsecase,
    UpdateMatchUsecase,
    DeleteMatchUsecase,
    LoginUsecase,
    RegisterUsecase,
    CreateActualiteUseCase,
    GetAllActualitesUseCase,
    GetActualiteByIdUseCase,
    UpdateActualiteUseCase,
    DeleteActualiteUseCase,
    GetAllAdherentsUseCase,
    GetAdherentByIdUseCase,
    RegisterForMatchUseCase,
    UnregisterFromMatchUseCase,
  ],
  exports: [
    CreateMatchUsecase,
    GetAllMatchUsecase,
    GetMatchByIdUsecase,
    UpdateMatchUsecase,
    DeleteMatchUsecase,
    LoginUsecase,
    RegisterUsecase,
    CreateActualiteUseCase,
    GetAllActualitesUseCase,
    GetActualiteByIdUseCase,
    UpdateActualiteUseCase,
    DeleteActualiteUseCase,
    GetAllAdherentsUseCase,
    GetAdherentByIdUseCase,
    RegisterForMatchUseCase,
    UnregisterFromMatchUseCase,
  ],
})
export class DomainModule {}
