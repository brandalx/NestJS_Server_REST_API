import { Module } from '@nestjs/common';
import { AtuhModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    AtuhModule,
    UserModule,
    BookmarkModule,
    PrismaModule,
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
