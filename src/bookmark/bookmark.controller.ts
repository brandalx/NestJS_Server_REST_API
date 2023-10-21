import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/index';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
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
