# Dispute Tools API

This is the API for our Disputes Tools app.

## Stack and Libraries

- [Node.js](https://nodejs.org/)
- [Apollo Server](https://github.com/apollographql/apollo-server)
- [Objection.js](https://github.com/Vincit/objection.js)

# Setup

## Database

You need to create databases for development and test environment, you can do that by running these commands.

```bash
createdb disputes_development
createdb disputes_test
```

Now you run migrations with

```bash
yarn db:migrate
```

## Dotenv

Run `cp .env.sample .env` and replace the values with your specific configuration.

# Usage

`yarn start` will run the project in development mode.

# Tests

`yarn test` will run tests. We are using Jest for tests

# Notes

## esm

We are using [esm](https://github.com/standard-things/esm) instead of babel to run the node server. At the moment [jest doesn't support esm](https://github.com/standard-things/esm/issues/706#issuecomment-458698925) and we have to use babel.
