import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './typeDefs';
import Profile from './types/profile.type';
import Playlist from './types/playlist.types';
import SavedTrack from './types/savedTrack.type';
import Track from './types/track.type';
import Artist from './types/artist.type';
import resolvers from './resolvers';

module.exports = makeExecutableSchema({
  typeDefs: [typeDefs, Profile, Playlist, SavedTrack, Track, Artist],
  resolvers,
});
