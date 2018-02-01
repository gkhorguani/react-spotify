const Playlist = `
type PlaylistTrack {
    href: String
    total: Int
}

type PlaylistImage {
    url: String
    width: Int
    height: Int
}

type Playlist {
    id: String!
    name: String
    href: String!
    images: [PlaylistImage]
    tracks: PlaylistTrack
}
`;

export default Playlist;
