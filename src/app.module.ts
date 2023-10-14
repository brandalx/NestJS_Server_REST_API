import { Module } from '@nestjs/common';
import { AtuhModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [AtuhModule, UserModule, BookmarkModule],
})
export class AppModule {}
