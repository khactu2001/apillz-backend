import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

//mark as controllers to be imported by cats.module
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getListCats(): string[] {
    return this.catsService.getListCats();
  }
}
