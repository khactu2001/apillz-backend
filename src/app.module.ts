import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Notice } from './notice/entities/notice.entity';
import { NoticeModule } from './notice/notice.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: 'test.db',
    //   entities: [Notice],
    //   // entities: ['src/notice/entities/*.entity{.ts,.js}'],

    //   synchronize: true,
    // }),
    // TypeOrmModule.forRoot(),
    NoticeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
}
