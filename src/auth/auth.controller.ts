import { Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Res() res: Response) {
    return res.json({ msg: 'This is signup route test' });
  }

  @Post('signin')
  signin() {
    return 'This is signin route test';
  }
}
