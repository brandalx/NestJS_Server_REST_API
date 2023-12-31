import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';
import * as pactum from 'pactum';
import { AuthDTO } from 'src/auth/dto';
import { EditUserDto } from 'src/user/dto';
import { CreateBookmarkDto, EditBookmarkDto } from 'src/bookmark/dto';
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
    pactum.request.setBaseUrl('http://localhost:3333');
  });
  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    const dto: AuthDTO = {
      email: 'brandon@gmail.com',
      password: '1234',
    };
    describe('Signup', () => {
      it('should throw if email empty on signup', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({
            email: '',
            password: '123',
          })
          .expectStatus(400)
          .inspect();
      });

      it('should throw if password empty on signup', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({
            email: dto.email,
          })
          .expectStatus(400)
          .inspect();
      });

      it('should throw if email or password empty on signup', () => {
        return pactum.spec().post('/auth/signup').expectStatus(400).inspect();
      });

      it('Should Signup', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(dto)
          .expectStatus(201)
          .inspect();
      });
    });
    describe('Signin', () => {
      it('should throw if email empty on signin', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({
            email: '',
            password: '123',
          })
          .expectStatus(400)
          .inspect();
      });

      it('should throw if password empty on signin', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({
            email: dto.email,
          })
          .expectStatus(400)
          .inspect();
      });

      it('should throw if email or password empty on signin', () => {
        return pactum.spec().post('/auth/signin').expectStatus(400).inspect();
      });
      it('Should Signin', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody(dto)
          .expectStatus(200)
          .inspect()
          .stores('userAt', 'access_token');
      });
    });
  });

  describe('User', () => {
    describe('Get me', () => {
      it('Should get current user', () => {
        return pactum
          .spec()
          .get('/users/me')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })

          .expectStatus(200);
      });
    });

    describe('Edit user', () => {
      it('Should edit user', () => {
        const dto: EditUserDto = {
          firstName: 'brandon',
          email: 'brandon2@gmail.com',
        };
        return pactum
          .spec()
          .patch('/users')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .withBody(dto)
          .inspect()

          .expectStatus(200)
          .expectBodyContains(dto.firstName)
          .expectBodyContains(dto.email);
      });
    });

    describe('Edit user', () => {});
  });

  describe('Bokmarks', () => {
    describe('Get empty bookmarks', () => {
      it('Should  get bookmarks', () => {
        return pactum
          .spec()
          .get('/bookmarks')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })

          .expectStatus(200)
          .expectBody([])
          .inspect();
      });
    });

    describe('Create bookmarks', () => {
      const dto: CreateBookmarkDto = {
        title: 'First bookmark',
        link: 'https://brandnolandev.com',
      };
      it('Should create bookmark', () => {
        return pactum
          .spec()
          .post('/bookmarks')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .withBody(dto)

          .expectStatus(201)
          .stores('bookmarkId', 'id')

          .inspect();
      });
    });

    describe('Get bookmarks', () => {
      it('Should  get bookmarks', () => {
        return pactum
          .spec()
          .get('/bookmarks')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })

          .expectStatus(200)
          .expectJsonLength(1)

          .inspect();
      });
    });

    describe('Get bookmark by ID', () => {
      it('Should  get bookmark by ID', () => {
        return pactum
          .spec()
          .get('/bookmarks/{id}')
          .withPathParams('id', '$S{bookmarkId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })

          .expectStatus(200)
          .expectBodyContains('$S{bookmarkId}')

          .inspect();
      });
    });

    describe('Edit bookmark', () => {
      it('Should  edit bookmark', () => {
        const dto: EditBookmarkDto = {
          title: 'My portfolio web site',
          description:
            'I have a passion for creating user-friendly and efficient web applications',
        };

        return pactum
          .spec()
          .patch('/bookmarks/{id}')
          .withPathParams('id', '$S{bookmarkId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains('$S{bookmarkId}')

          .inspect()
          .expectBodyContains(dto.title)
          .expectBodyContains(dto.description);
      });
    });

    describe('Delete bookmark', () => {
      it('Should  delete bookmark', () => {
        return pactum
          .spec()
          .delete('/bookmarks/{id}')
          .withPathParams('id', '$S{bookmarkId}')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })

          .expectStatus(204)

          .inspect();
      });

      it('Should  get empty bookmarks', () => {
        return pactum
          .spec()
          .get('/bookmarks')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })

          .expectStatus(200)
          .expectJsonLength(0)
          .inspect();
      });
    });
  });

  // it.todo('should pass');
  // it.todo('should pass 3');
});
