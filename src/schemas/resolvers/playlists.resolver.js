const fetch = require('node-fetch');

export default (root, args, ctx) =>
  fetch('https://api.spotify.com/v1/me/playlists', {
    headers: {
      Authorization: `Bearer ${ctx.sprat}`,
    },
    json: true,
  })
    .then(res => res.json())
    .then(r => r.items);
