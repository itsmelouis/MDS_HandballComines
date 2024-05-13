import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { CreateMatchUsecase } from './usecase/matchs/create_matchs_usecase';
import { GetAllMatchUsecase } from './usecase/matchs/get_all_matchs_usecase';



@Module({
    imports: [DataModule],
    providers: [
        CreateMatchUsecase,
        GetAllMatchUsecase
        

    ],
    exports: [
        CreateMatchUsecase,
        GetAllMatchUsecase
    ]

})
export class DomainModule { }
