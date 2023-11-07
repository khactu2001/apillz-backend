import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controler';

@Module({
  providers: [CatsService],
  controllers: [CatsController],
})
export class CatsModule {}
