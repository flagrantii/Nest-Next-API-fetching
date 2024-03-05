import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttractionsModule } from './attractions/attractions.module';

@Module({
  imports: [AttractionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
