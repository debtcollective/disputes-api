import Knex from "knex";

const knexConfig = require("../knexfile.js");
const knex = Knex(knexConfig);

export default knex;
