import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';
import * as pactum from 'pactum';
import { AuthDTO } from 'src/auth/dto';
describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(3333);
    prisma = app.get(PrismaService);
    await prisma.cleanDb();
  });
  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    describe('Signup', () => {
      it('Should Signup', () => {
        const dto: AuthDTO = {
          email: 'brandon@gmail.com',
          password: '1234',
        };
        return pactum
          .spec()
          .post('http://localhost:3333/auth/signup')
          .withBody(dto)
          .expectStatus(201)
          .inspect();
      });
    });
    describe('Signin', () => {
      it.todo('Should Signin');
    });
  });

  describe('User', () => {
    describe('Get me', () => {});

    describe('Edit user', () => {});
  });

  describe('Bokkmarks', () => {
    describe('Get bookmarks', () => {});

    describe('Create bookmarks', () => {});

    describe('Get bookmark by id', () => {});

    describe('Edit bookmark', () => {});

    describe('Delete bookmark', () => {});
  });

  // it.todo('should pass');
  // it.todo('should pass 3');
});
