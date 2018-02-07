import { createResolver } from 'apollo-resolvers';
import { spotifyRESTEndpoints } from '../../config';

const fetch = require('node-fetch');

const isAuthenticatedResolver = createResolver((root, args, { sprat }) => {
  if (!sprat) throw new Error('Not authorized..');
});

const profileResolver = isAuthenticatedResolver.createResolver((root, args, { sprat }) =>
  fetch(`${spotifyRESTEndpoints.profile}`, {
    headers: {
      Authorization: `Bearer ${sprat}`,
    },
    json: true,
  }).then(res => res.json()));

export default profileResolver;
