import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeStampEntity } from '../../common/entities/timestamp.entity';

@Entity()
export class Notice extends BaseTimeStampEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  title: string;

  @Column('varchar')
  content: string;
}
