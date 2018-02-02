const rootQuery = `
  type Query {
      profile: Profile
      playlists: [Playlist]
      savedTracks: [SavedTrack],
      
  }
`;

export default rootQuery;
