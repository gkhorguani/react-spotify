const express = require('express'); // Express web server framework
const request = require('request'); // "Request" library
const querystring = require('querystring');
const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const rootSchema = require('./src/schemas/root.js');

const client_id = '39452579e7c242bc9d4ddfefd815c887'; // Your client id
const client_secret = '433f040f6dc54b4abb0a62081e6b0634'; // Your secret
const redirect_uri = 'http://localhost:8888/home'; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = function (length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const stateKey = 'spotify_auth_state';

const app = express();

app
  .use(express.static(`${__dirname}/public`, {
    index: 'index.html',
  }))
  .use(cookieParser());

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/login.html`);
});

app.get('/login', (req, res) => {
  const state = generateRandomString(16);
  res.cookie(stateKey, state, { maxAge: 900000, httpOnly: false });

  // your application requests authorization
  const scope =
    'user-read-private user-read-email user-library-read playlist-read-private playlist-read-collaborative user-follow-read user-read-recently-played	';
  res.redirect(`https://accounts.spotify.com/authorize?${querystring.stringify({
    response_type: 'code',
    client_id,
    scope,
    redirect_uri,
    state,
  })}`);
});

app.get('/home', (req, res) => {
  // your application requests refresh and access tokens
  // after checking the state parameter

  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/login');
  } else {
    res.clearCookie(stateKey);
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code,
        redirect_uri,
        grant_type: 'authorization_code',
      },
      headers: {
        Authorization: `Basic ${new Buffer(`${client_id}:${client_secret}`).toString('base64')}`,
      },
      json: true,
    };

    request.post(authOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        let access_token = body.access_token,
          refresh_token = body.refresh_token;

        const options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { Authorization: `Bearer ${access_token}` },
          json: true,
        };

        // Redirect to main with auth token
        res.redirect(`/main?${querystring.stringify({
          access_token,
        })}`);

        // res.sendFile(__dirname + '/index.html');
      } else {
        res.redirect(`/#${querystring.stringify({
          error: 'invalid_token',
        })}`);
      }
    });
  }
});

app.get('/refresh_token', (req, res) => {
  // requesting access token from refresh token
  const refresh_token = req.query.refresh_token;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      Authorization: `Basic ${new Buffer(`${client_id}:${client_secret}`).toString('base64')}`,
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token,
    },
    json: true,
  };

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;
      res.send({
        access_token,
      });
    }
  });
});

app.get('/mock', (req, res) => {
  res.sendFile(`${__dirname}/mock.html`);
});

app.get('/main', (req, res) => {
  // Save auth token
  res.cookie('sprat', req.query.access_token);

  res.sendFile(`${__dirname}/index.html`);
});

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress((req, res) => ({
    schema: rootSchema,
    context: req.cookies,
  })),
);

app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

console.log('Listening on 8888');
app.listen(8888);
