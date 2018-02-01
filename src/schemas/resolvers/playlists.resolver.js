import { spotifyRESTEndpoints } from '../../config';

const fetch = require('node-fetch');

export default (root, args, ctx) =>
  fetch(`${spotifyRESTEndpoints.playlists}`, {
    headers: {
      Authorization: `Bearer ${ctx.sprat}`,
    },
    json: true,
  })
    .then(res => res.json())
    .then(r => r.items);