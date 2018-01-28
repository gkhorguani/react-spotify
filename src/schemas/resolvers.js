const fetch = require('node-fetch');

const resolvers = {
  Query: {
    profile: (root, args, ctx) => {
      return fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + ctx.sprat
        },
        json: true
      }).then(res => res.json());
    }
  }
};

module.exports = resolvers;
