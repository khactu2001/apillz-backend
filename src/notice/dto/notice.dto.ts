import { IsOptional } from 'class-validator';

export class NoticeDto {
  @IsOptional()
  searchText?: string;

  @IsOptional()
  id?: number;
}
