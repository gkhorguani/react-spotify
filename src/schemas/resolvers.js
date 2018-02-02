import profileResolver from './resolvers/profile.resolver';
import playlistsResolver from './resolvers/playlists.resolver';
import savedTracksResolver from './resolvers/savedTracks.resolver';

const resolvers = {
  Query: {
    profile: (root, args, ctx) => profileResolver(root, args, ctx),
    playlists: (root, args, ctx) => playlistsResolver(root, args, ctx),
    savedTracks: (_, args, ctx) => savedTracksResolver(_, args, ctx),
  },
};

module.exports = resolvers;
