import { Controller, Get, Post } from '@nestjs/common';
import { NoticeService } from './service/notice.service';

@Controller('notice')
export class NoticeController {
  constructor(public readonly noticeService: NoticeService) {}

  @Post('create')
  async createNotice() {
    return await this.noticeService.createNotice();
  }

  @Get()
  async getNotices() {
    return await this.noticeService.getNotices();
  }
}
