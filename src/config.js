import nconf from "nconf";
import path from "path";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const env = process.env.NODE_ENV;
const isProd = env === "production";
const isTest = env === "test";

// load dotenv config
require("dotenv").config({ path: path.join(__dirname, "../.env") });

nconf
  .env({
    separator: "__",
    whitelist: [
      "DB_CONNECTION_STRING",
      "DB_HOST",
      "DB_NAME",
      "DB_POOL_MAX",
      "DB_POOL_MIN",
      "DB_PORT",
      "DB_PWD",
      "DB_SCHEMA",
      "DB_USER",
      "DEBUG",
      "INTROSPECTION",
      "PORT",
    ],
  })
  .defaults({
    DB_HOST: "localhost",
    DB_NAME: `disputes_${env}`,
    DB_POOL_MAX: 10,
    DB_POOL_MIN: 1,
    DB_PORT: "5432",
    DB_PWD: "",
    DB_SCHEMA: "tdc_disputes",
    DB_USER: "postgres",
    DEBUG: false,
    INTROSPECTION: false,
    IS_PROD: isProd,
    IS_TEST: isTest,
    PORT: "4000",
  });

const conf = nconf.get();

export default conf;
