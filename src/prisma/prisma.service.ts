import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(private configService: ConfigService) {
    const urldb = configService.get<string>('DATABASE_URL') || 'ERROR';

    super({
      datasources: {
        db: {
          url: urldb,
        },
      },
    });
  }
  cleanDb() {
    return this.$transaction([
      this.user.deleteMany(),
      this.bookmark.deleteMany(),
    ]);
  }
}
