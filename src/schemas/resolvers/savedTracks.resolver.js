import isAuthenticatedResolver from './middlewares/isAuthenticatedResolver';
import { spotifyRESTEndpoints } from '../../config';

const fetch = require('node-fetch');

const savedTracksResolver = isAuthenticatedResolver.createResolver((root, args, { sprat }) =>
  fetch(`${spotifyRESTEndpoints.savedTracks}`, {
    headers: {
      Authorization: `Bearer ${sprat}`,
    },
    json: true,
  })
    .then(res => res.json())
    .then(r => r.items));

export default savedTracksResolver;
