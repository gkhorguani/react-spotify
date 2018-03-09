import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';

const FeaturedPlaylistCard = props => (
  <Card>
    <Image src={props.image} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        10 Friends
      </a>
    </Card.Content>
  </Card>
);

FeaturedPlaylistCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};

FeaturedPlaylistCard.defaultProps = {
  image: '',
};

export default FeaturedPlaylistCard;
