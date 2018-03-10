import isAuthenticatedResolver from './middlewares/isAuthenticatedResolver';
import { spotifyRESTEndpoints } from '../../config';

const fetch = require('node-fetch');

const featuredPlaylistsResolver = isAuthenticatedResolver.createResolver((root, args, { sprat }) => {
  const { country, limit } = args;
  const endpoint = `${
    spotifyRESTEndpoints.featuredPlaylists
  }?country=${country}&limit=${limit}`;
  return fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${sprat}`,
    },
    json: true,
  }).then(res => res.json());
});

export default featuredPlaylistsResolver;
