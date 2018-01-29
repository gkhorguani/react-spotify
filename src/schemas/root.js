import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './typeDefs';
import Profile from './types/profile.type';
import resolvers from './resolvers';

module.exports = makeExecutableSchema({
  typeDefs: [
    typeDefs,
  ].concat(Profile),
  resolvers,
});
