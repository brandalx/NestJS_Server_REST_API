import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'This is signup route' };
  }
  signin() {
    return { msg: 'This is signin route' };
  }
}

// const service  = new AuthService()
