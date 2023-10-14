import { Injectable } from '@nestjs/common';

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
