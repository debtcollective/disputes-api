import knex from "../knex";
import config from "./config.js";
import { ApolloServer } from "apollo-server";
import { Model } from "./models";
import { resolvers, typeDefs } from "./schema/index.js";

// setup Objection.js
Model.knex(knex);

// init ApolloServer
const server = new ApolloServer({
  cors: {
    origin: "*",
    credentials: true,
  },
  introspection: config.INTROSPECTION,
  playground: true,
  resolvers,
  typeDefs,
});

const port = config.PORT;

server.listen({ port }, () => {
  console.log(
    `🚀  Server ready at http://localhost:${port}${server.graphqlPath}`
  );
});
