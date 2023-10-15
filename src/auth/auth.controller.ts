import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthdTO } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')

  // to directly call Request:
  // signup(@Req() req: Request) {

  //     else use body decorator
  signup(@Body() dto: AuthdTO) {
    console.log({ dto: dto });
    return this.authService.signup();
  }
  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
