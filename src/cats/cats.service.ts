import { Injectable } from '@nestjs/common';

// @Injectable()
export class CatsService {
  getListCats(): string[] {
    return ['cat 1', 'cat 2', 'cat 3', 'cat 4', 'cat 5'];
  }
}
