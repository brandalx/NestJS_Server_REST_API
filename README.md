<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# NestJS REST API Demonstration

**Author**: [@brandalx](https://github.com/brandalx)

This repository showcases a NestJS REST API with integrations to demonstrate the capabilities of NestJS, Prisma, End-to-End (E2E) tests, Docker containers, and Docker Compose.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Prisma**: An open-source database toolkit.
- **Pactum**: An API testing tool that offers simplicity and versatility.
- **TypeScript (TS)**: A typed superset of JavaScript that adds optional static types.
- **Jest**: A delightful JavaScript Testing Framework with a focus on simplicity.
- **Argon2**: A password hashing library.
- **Docker & Docker Compose**: Used for containerization and defining and running multi-container Docker applications, respectively.

## Features

- **RESTful Endpoints**: Supports basic CRUD operations (GET, POST, DELETE, PATCH).
- **Authentication**: Integrated authentication using JWTs and Argon2 for password hashing.
- **Database Integration**: Uses Prisma for database interactions.
- **E2E Tests**: End-to-End tests written using Jest, Pactum.
- **Containerization**: The application and its services are containerized using Docker.

## Setup & Run

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/brandalx/NestJS_Server_REST_API
   cd nestjs-rest-api-demo
   ```

# Scripts

## Here are the available scripts you can run:

- **Prisma Deployment (Development)**:

  ```bash
  yarn primsa:dev:deploy
  ```

  - **Remove Development Database**:

  ```bash
  yarn db:dev:rm
  ```

- **Start Development Database**:

  ```bash
  yarn db:dev:up
  ```

- **Restart Development Database:**:

  ```bash
  yarn db:dev:restart
  ```

  - **Restart Test Database:**:

  ```bash
  yarn db:test:restart
  ```

  - **Prisma Deployment (Testing):**:

  ```bash
  yarn primsa:test:deploy
  ```

  - **Remove Test Database:**

  ```bash
  yarn db:test:rm
  ```

  - **Start Test Database:**

  ```bash
  yarn db:test:up
  ```

  - **Build Application:**

  ```bash
  yarn build
  ```

  - **Format Code:**

  ```bash
  yarn format
  ```

  - **Start Application in Development Mode:**:

  ```bash
  yarn primsa:dev:deploy
  ```

  - **Start Application:**:

  ```bash
  yarn start
  ```

  - **Start Application in Development Mode:**:

  ```bash
  yarn start:dev
  ```

  - **Start Application in Debug Mode:**:

  ```bash
  yarn start:debug
  ```

  - **Start Application in Production Mode:**:

  ```bash
  yarn start:prod
  ```

  - **Lint Code:**:

  ```bash
  yarn lint
  ```

  - **Run Tests:**:

  ```bash
  yarn test
  ```

  - **Run Tests in Watch Mode:**:

  ```bash
  yarn test:watch
  ```

  - **Run Tests with Coverag:**:

  ```bash
  yarn test:cov
  ```

  - **Debug Tests:**:

  ```bash
  yarn test:debug
  ```

  - **Run End-to-End Tests:**:

  ```bash
  yarn test:e2e
  ```

  - **Lint Code:**:

  ```bash
  yarn primsa:dev:deploy
  ```

```bash
npx dotenv -e .env.test -- prisma studio
```

```bash
npx dotenv -e .env -- prisma studio
```

## Setup

To run this app, you need to create some configuration files and set up environment variables.

### 1. Create `.env` and `.env.test` Files

In the root of the project, create a `.env` and `.env.test` files and add the following variables, assigning appropriate values:

```env
POSTGRES_USER=your_postgres_user
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_DB=your_postgres_db_name
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
