import { Injectable } from '@nestjs/common';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
  getBookmarks(userId: number) {}

  getBookmarksById(userId: number, bookmarkId: number) {}

  createBookmarks(userId: number, dto: CreateBookmarkDto) {}

  editBookmarksById(userId: number, dto: EditBookmarkDto, bookmarkId: number) {}

  deleteBookmarksById(userId: number, bookmarkId: number) {}
}
