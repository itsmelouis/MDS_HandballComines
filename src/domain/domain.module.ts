import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { JwtService } from '@nestjs/jwt';
import { CreateActualiteUsecase } from './usecase/actualite/create_actualite_usecase';
import { GetActualitesUsecase } from './usecase/actualite/get_actualite_usecase';

@Module({
  imports:[DataModule],
  providers: [
CreateActualiteUsecase,
GetActualitesUsecase,
    JwtService
  ],
  exports:[
    CreateActualiteUsecase, 
    GetActualitesUsecase, 
  ],
})
export class DomainModule {}
