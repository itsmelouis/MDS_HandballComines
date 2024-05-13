import { Module, Get } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { MatchController } from './matchs/match.controller';
import { MatchService } from 'src/data/services/match.service';
import { MatchEntity } from 'src/data/entities/match.entity';

@Module({
  imports:[DomainModule],
  controllers:[MatchController]

})
export class PresentationModule {}