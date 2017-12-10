let userCount = 2;
const users = [
  { id: 0, name: 'ushumpei' },
  { id: 1, name: 'apollo' },
];

const resolvers = {
  Query: {
    users: () => users,
  },
  Mutation: {
    addUser: (root, args) => {
      const user = { id: String(userCount++), name: args.name };
      users.push(user);
      return user;
    },
  }
};

export default resolvers;
