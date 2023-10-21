import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
// import { AuthGuard } from '@nestjs/passport';
// import { Request } from 'express';
import { GetUser } from '../auth/decorator/index';
import { JwtGuard } from '../auth/guard/index';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
//moved up to the controller level to all routes of the controller required jwt token guard
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  //   getMe(@Req() req: Request) {
  //   getMe(@GetUser() user: User) {
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
