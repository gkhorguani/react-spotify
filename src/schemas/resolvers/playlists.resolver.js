import isAuthenticatedResolver from './middlewares/isAuthenticatedResolver';
import { spotifyRESTEndpoints } from '../../config';

const fetch = require('node-fetch');

const playlistsResolver = isAuthenticatedResolver.createResolver((root, args, { sprat }) =>
  fetch(`${spotifyRESTEndpoints.playlists}`, {
    headers: {
      Authorization: `Bearer ${sprat}`,
    },
    json: true,
  })
    .then(res => res.json())
    .then(r => r.items));

export default playlistsResolver;
