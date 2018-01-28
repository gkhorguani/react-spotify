const { makeExecutableSchema } = require('graphql-tools');
const fetch = require('node-fetch');

const typeDefs = `
    type Followers {
        total: String!
    }

    type Profile {
        id: String!
        email: String!
        country: String!
        display_name: String!
        followers: Followers
    }

    type Query {
        profile: Profile
    }
`;

const resolvers = {
  Query: {
    profile: (root, args, ctx) => {
      console.log(ctx.sprat);
      return fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + ctx.sprat
        },
        json: true
      }).then(res => res.json());
    }
  }
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
