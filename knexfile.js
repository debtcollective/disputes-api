import { knexSnakeCaseMappers } from "objection";
import path from "path";
import config from "./src/config";

const knexConfig = {
  client: "pg",
  connection: config.DB_CONNECTION_STRING || {
    database: config.DB_NAME,
    host: config.DB_HOST,
    password: config.DB_PWD,
    port: config.DB_PORT,
    user: config.DB_USER,
  },
  migrations: {
    directory: path.join(__dirname + "/knex/migrations"),
  },
  pool: {
    max: config.DB_POOL_MAX,
    min: config.DB_POOL_MIN,
  },
  seeds: {
    directory: path.join(__dirname + "/knex/seeds"),
  },
  ...knexSnakeCaseMappers(),
};

module.exports = knexConfig;
