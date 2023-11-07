import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { FaqService } from './faq.service';
import { ListFaqDto } from './dto/list-faq.dto';

@Controller('faq')
export class FaqController {
  constructor(public faqService: FaqService) {}

  @Get()
  getFaqs(@Query() query: ListFaqDto): string[] {
    try {
      console.log('get Faq Query', query);
      return this.faqService.getFaqs({
        id: query.id,
      });
    } catch (error) {
      console.log('get Faq Query', error);
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST, {
        description: 'Could not get query faq',
      });
    }
  }

  @Get('detail/:id')
  getFaqById(@Param('id') faqId: number): string {
    try {
      console.log('faqId', faqId);
      return this.faqService.getFaqById(faqId);
    } catch (error) {
      console.log('get Faq Query', error);
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST, {
        description: 'Could not get query faq',
      });
    }
  }
}
