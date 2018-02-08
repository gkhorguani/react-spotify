import profile from './resolvers/profile.resolver';
import playlists from './resolvers/playlists.resolver';
import savedTracks from './resolvers/savedTracks.resolver';

const resolvers = {
  Query: {
    profile,
    playlists,
    savedTracks,
  },
};

export default resolvers;
