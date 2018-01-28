const typeDefs = `
    type Followers {
        total: String!
    }

    type Profile {
        id: String!
        email: String!
        country: String!
        display_name: String!
        followers: Followers
    }

    type Query {
        profile: Profile
    }
`;

module.exports = typeDefs;
