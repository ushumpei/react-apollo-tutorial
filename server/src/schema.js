import { makeExecutableSchema, addMockFunctionsToSchema, } from 'graphql-tools';

export const typeDefs = `
type User {
  id: ID!
  name: String
}

type Query {
  users: [User]
}
`;

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });

export default schema;
