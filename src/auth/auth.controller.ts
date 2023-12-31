import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')

  // to directly call Request:
  // signup(@Req() req: Request) {

  //     else use body decorator
  signup(@Body() dto: AuthDTO) {
    // console.log(dto);
    return this.authService.signup(dto);
  }
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: AuthDTO) {
    return this.authService.signin(dto);
  }
}
