import { Injectable } from '@nestjs/common';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}
  getBookmarks(userId: number) {
    return this.prisma.bookmark.findMany({
      where: {
        userId,
      },
    });
  }

  getBookmarksById(userId: number, bookmarkId: number) {}

  createBookmarks(userId: number, dto: CreateBookmarkDto) {}

  editBookmarksById(userId: number, dto: EditBookmarkDto, bookmarkId: number) {}

  deleteBookmarksById(userId: number, bookmarkId: number) {}
}
