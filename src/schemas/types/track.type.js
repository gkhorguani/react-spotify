const Track = `
    type Track {
        id: String!
        name: String!
        popularity: Int
        duration_ms: Int
        preview_url: String
        uri: String
        artists: [Artist]
    }
`;

export default Track;
