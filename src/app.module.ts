import { Module } from '@nestjs/common';
import { AtuhModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AtuhModule, UserModule],
})
export class AppModule {}
