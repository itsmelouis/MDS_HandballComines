import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [DataModule, DomainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
