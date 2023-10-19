import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
// import { AuthGuard } from '@nestjs/passport';
// import { Request } from 'express';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
//moved up to the controller level to all routes of the controller required jwt token guard
@Controller('users')
export class UserController {
  @Get('me')
  //   getMe(@Req() req: Request) {
  getMe(@GetUser() user: User) {
    console.log({
      user: user,
    });
    return user;
  }
}
