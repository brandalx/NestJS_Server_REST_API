import { Module } from '@nestjs/common';
import { AtuhModule } from './auth/auth.module';

@Module({
  imports: [AtuhModule],
})
export class AppModule {}
