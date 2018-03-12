import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Card } from 'semantic-ui-react';
import FeaturedPlaylistCard from '../cards/FeaturedPlaylistCard';

const FeaturedPlaylistsQuery = gql`
  query FeaturedPlaylists($country: String!, $limit: Int) {
    featuredPlaylists(country: $country, limit: $limit) {
      playlists {
        items {
          id
          name
          images {
            url
          }
          tracks {
            total
          }
        }
      }
    }
  }
`;

const FeaturedPlaylists = ({ data: { loading, featuredPlaylists }, itemsPerRow }) => (
  <div>
    {loading && <div>Loading..</div>}
    {!loading && (
      <Card.Group stackable itemsPerRow={itemsPerRow}>
        {featuredPlaylists.playlists.items.map(({ id, name, images, tracks }) => (
          <FeaturedPlaylistCard
            key={id}
            name={name}
            description={`Explore all tracks from ${name}`}
            image={images[0].url || ''}
            totalTracks={tracks.total}
          />
        ))}
      </Card.Group>
    )}
  </div>
);

FeaturedPlaylists.propTypes = {
  itemsPerRow: PropTypes.number,
  data: PropTypes.object,
};

FeaturedPlaylists.defaultProps = {
  itemsPerRow: 4,
  data: {},
};

export default graphql(FeaturedPlaylistsQuery, {
  options: props => ({
    variables: {
      country: 'US',
      limit: props.itemsPerRow,
    },
  }),
})(FeaturedPlaylists);
