import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

const FeaturedPlaylistCard = ({ image, name, description }) => (
  <Card>
    <Image src={image} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  </Card>
);

FeaturedPlaylistCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
};

FeaturedPlaylistCard.defaultProps = {
  image: '',
  description: '',
};

export default FeaturedPlaylistCard;
