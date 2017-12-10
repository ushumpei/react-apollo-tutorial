import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

export const typeDefs = `
type User {
  id: ID!
  name: String
}

type Query {
  users: [User]
}

type Mutation {
  addUser(name: String!): User
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
