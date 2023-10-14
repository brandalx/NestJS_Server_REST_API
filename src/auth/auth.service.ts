import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup() {
    return { msg: 'This is signup route' };
  }
  signin() {
    return { msg: 'This is signin route' };
  }
}

// const service  = new AuthService()
