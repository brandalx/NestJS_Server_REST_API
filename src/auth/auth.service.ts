import { ForbiddenException, Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

import { AuthDTO } from './dto';
import * as argon2 from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable({})
export class AuthService {
  constructor(
    private config: ConfigService,
    private prisma: PrismaService,
    private JWT: JwtService,
  ) {}

  async signup(dto: AuthDTO) {
    try {
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

      //   delete user.hash;
      //save the new user into db
      //   return user;
      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials error');
        }
        throw error;
      }
    }

    // return the saved user
    // return { msg: 'This is signup route' };
  }
  async signin(dto: AuthDTO) {
    try {
      //find user
      const user = await this.prisma.user.findUnique({
        where: {
          email: dto.email,
        },
      });
      //if user does not exist case

      if (!user) {
        throw new ForbiddenException('Credentials incorrect');
      }

      //comparing password
      const pwMatches = await argon2.verify(user.hash, dto.password);

      if (!pwMatches) {
        throw new ForbiddenException('Credentials incorrect');
      }

      //   delete user.hash;
      return this.signToken(user.id, user.email);
      //send back user
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials error');
        }
      }
      throw error;
    }
    // return { msg: 'This is signin route' };
  }
  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');

    const token = await this.JWT.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });
    return {
      access_token: token,
    };
  }
}

// const service  = new AuthService()
