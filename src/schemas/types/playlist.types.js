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
        description: String
        href: String!
        images: [PlaylistImage]
        tracks: PlaylistTrack
    }
`;

const FeaturedPlaylists = `
    type FeaturedPlaylistsCollection {
        href: String,
        items: [Playlist]
    }

    type FeaturedPlaylists {
        message: String,
        playlists: FeaturedPlaylistsCollection
    }
`;

export { Playlist, FeaturedPlaylists };
