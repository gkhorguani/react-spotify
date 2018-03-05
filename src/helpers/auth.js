import axios from 'axios';
import { getCookie, setCookie } from './cookie';

export function refreshToken() {
  const refresh_token = getCookie('sprrt');
  axios.get(`/refresh_token?refresh_token=${refresh_token}`).then(({ data }) => {
    setCookie('sprat', data.access_token, 1);
    window.location.reload();
  });
}
