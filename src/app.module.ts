import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { FaqModule } from './faq/faq.module';

@Module({
  imports: [CatsModule, FaqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
