import { Module } from '@nestjs/common';
import { AttractionsService } from './attractions.service';
import { AttractionsController } from './attractions.controller';

@Module({
  controllers: [AttractionsController],
  providers: [AttractionsService],
})
export class AttractionsModule {}
