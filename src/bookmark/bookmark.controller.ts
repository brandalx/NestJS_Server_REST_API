import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/index';
import { BookmarkService } from './bookmark.service';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Get()
  getBookmarks() {}
  @Get()
  getBookmarksById() {}
  @Post()
  createBookmarks() {}
  @Patch()
  editBookmarksById() {}
  @Delete()
  deleteBookmarksById() {}
}
