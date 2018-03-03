import isAuthenticatedResolver from './middlewares/isAuthenticatedResolver';
import { spotifyRESTEndpoints } from '../../config';

const fetch = require('node-fetch');

const profileResolver = isAuthenticatedResolver.createResolver((root, args, { sprat }) =>
  fetch(`${spotifyRESTEndpoints.profile}`, {
    headers: {
      Authorization: `Bearer ${sprat}`,
    },
    json: true,
  }).then(res => res.json()));

export default profileResolver;
