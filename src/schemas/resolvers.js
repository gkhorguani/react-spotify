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
  // Override specific resolvers
  //   Followers: {
  //     total(_) {
  //       return '1233';
  //     }
  //   }
};

module.exports = resolvers;
