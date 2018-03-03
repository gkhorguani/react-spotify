import { createResolver } from 'apollo-resolvers';

const isAuthenticatedResolver = createResolver((root, args, { sprat }) => {
  if (!sprat) throw new Error('Not authorized..');
});

export default isAuthenticatedResolver;
