const Profile = `
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
`;

export default Profile;
