import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDTO } from './dto';
import * as argon2 from 'argon2';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDTO) {
    //gen password hash
    const hash = await argon2.hash(dto.password);
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash: hash,
      },
      //   select: {
      //     id: true,
      //     email: true,
      //     createdAt: true,
      //   },
    });

    // todo: write transformer

    delete user.hash;
    //save the new user into db
    return user;

    // return the saved user
    return { msg: 'This is signup route' };
  }
  signin() {
    return { msg: 'This is signin route' };
  }
}

// const service  = new AuthService()
