import axios from 'axios';
import config from 'config';

// Authorization process starts with your application sending a request to the Spotify Accounts service
export const authorize = (
  client_id,
  redirect_uri,
  state = '',
  scope,
  show_dialog = false
) => {
  console.log(config);
};
