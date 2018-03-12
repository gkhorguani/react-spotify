import React, { Component } from 'react';
import FeaturedPlaylists from '../components/Playlist/FeaturedPlaylists';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <FeaturedPlaylists itemsPerRow={4} />
      </div>
    );
  }
}

export default HomePage;
