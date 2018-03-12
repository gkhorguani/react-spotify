import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

const FeaturedPlaylistCard = ({ image, name, description, totalTracks }) => (
  <Card style={{ maxWidth: '300px' }}>
    <Image src={image} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      {description && <Card.Description>{description}</Card.Description>}
    </Card.Content>
    <Card.Content extra>{totalTracks} Songs</Card.Content>
  </Card>
);

FeaturedPlaylistCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  totalTracks: PropTypes.number.isRequired,
};

FeaturedPlaylistCard.defaultProps = {
  image: '',
  description: '',
};

export default FeaturedPlaylistCard;
