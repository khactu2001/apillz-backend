import { DataSource } from 'typeorm';
import { Notice } from './notice/entities/notice.entity';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  // host: 'localhost',
  // port: 5432,
  // username: 'test',
  // password: 'test',
  database: 'test.db',
  synchronize: true,
  logging: true,
  // entities: ['src/notice/entities/*.entity{.ts,.js}'],
  entities: [Notice],
  subscribers: [],
  migrations: [],
});

export const noticeRepository = AppDataSource.getRepository(Notice);
