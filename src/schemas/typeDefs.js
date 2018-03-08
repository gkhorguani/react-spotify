const rootQuery = `
  type Query {
      profile: Profile
      playlists: [Playlist]
      featuredPlaylists(country: String, limit: Int): FeaturedPlaylists
      savedTracks: [SavedTrack]
  }
`;

export default rootQuery;
