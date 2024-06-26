import { Module } from '@nestjs/common';
import { PresentationModule } from './presentation/presentation.module';
import { JwtStrategy } from './jwt/jwt.strategy';
import { DomainModule } from './domain/domain.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [PresentationModule, DomainModule, DataModule],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
