import { gql } from "apollo-server";
import _ from "lodash";

export const typeDef = gql`
  scalar JSON

  type Dispute {
    id: Int
    toolId: String
    toolVersion: String
    userId: Int
    data: JSON
    draft: Boolean
  }

  extend type Query {
    dispute(id: Int!): Dispute
    disputes: [Dispute]
  }
`;

const disputes = [
  {
    id: 1,
    userId: 1,
    toolId: "1",
    toolVersion: "1",
    data: {},
    draft: true,
  },
  {
    id: 2,
    userId: 1,
    toolId: "1",
    toolVersion: "1",
    data: {},
    draft: true,
  },
];

export const resolvers = {
  Query: {
    dispute: (parent, { id }, context, info) => _.find(disputes, { id }),
    disputes: () => disputes,
  },
};
