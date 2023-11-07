import { IsOptional } from 'class-validator';

export class ListFaqDto {
  @IsOptional()
  id: number;

  //   @IsOptional()
  title: string;
}
