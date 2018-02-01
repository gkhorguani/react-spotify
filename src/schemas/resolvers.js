import profileResolver from './resolvers/profile.resolver';
import playlistsResolver from './resolvers/playlists.resolver';

const resolvers = {
  Query: {
    profile: (root, args, ctx) => profileResolver(root, args, ctx),
    playlists: (root, args, ctx) => playlistsResolver(root, args, ctx),
  },
  // Override specific resolvers
  //   Followers: {
  //     total(_) {
  //       return '1233';
  //     }
  //   }
};

module.exports = resolvers;
