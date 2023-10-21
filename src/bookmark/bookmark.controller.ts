import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/index';
import { BookmarkService } from './bookmark.service';
import { GetUser } from 'src/auth/decorator';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Get()
  getBookmarks(@GetUser('id') userId: number) {}
  @Get(':id')
  getBookmarksById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {}
  @Post()
  createBookmarks(@GetUser('id') userId: number) {}
  @Patch()
  editBookmarksById(@GetUser('id') userId: number) {}
  @Delete()
  deleteBookmarksById(@GetUser('id') userId: number) {}
}
