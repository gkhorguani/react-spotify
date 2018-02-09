import profile from './resolvers/profile.resolver';
import playlists from './resolvers/playlists.resolver';
import savedTracks from './resolvers/savedTracks.resolver';

const resolvers = {
  Query: {
    profile,
    playlists,
    savedTracks,
  },

  // Followers: {
  //   total: root => '222',
  // },
};

export default resolvers;
