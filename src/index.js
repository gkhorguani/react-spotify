import axios from 'axios';

let hashParams = {};
let e,
  r = /([^&;=]+)=?([^&;]*)/g,
  q = window.location.hash.substring(1);
while ((e = r.exec(q))) {
  hashParams[e[1]] = decodeURIComponent(e[2]);
}

if (hashParams.access_token) {
  axios
    .get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + hashParams.access_token
      },
      json: true
    })
    .then(r => {
      console.log(r);
    });
}
