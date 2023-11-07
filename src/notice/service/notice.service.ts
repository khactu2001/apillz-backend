import { AppDataSource, noticeRepository } from 'src/data-source';
import { Notice } from '../entities/notice.entity';
import { NoticeDto } from '../dto/notice.dto';

export class NoticeService {
  async createNotice() {
    try {
      console.log('Creating notice');

      const notice = new Notice();
      notice.content = 'this is notice 1';
      notice.title = 'Notice 1';

      await noticeRepository.save(notice);
      return 'Create Success';
    } catch (error) {
      console.log('Creating notice error', error);
    }
  }
  async getNotices(filters: NoticeDto) {
    const { id, searchText } = filters;
    try {
      return await noticeRepository.find({
        // where: {
        //   title:
        // }
      });
    } catch (error) {
      console.log('get notice error', error);
    }
  }
}
