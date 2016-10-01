'use strict';

const config = require('./config');

function validateClientCookies(request, session, callback) {

  console.log('Validate client cookies');

  console.log(session);

  const redisClient = request.server.plugins['hapi-redis-client'].client;

  const key = session.profile.id;

  const authHash = config.redis.hashContainers.authClient + ':' + key;

  const settings = [
    authHash, session.token
  ];

  console.log('GET session REDIS: settings', settings);

  redisClient.hget(settings)
    .then((result)=> {

      console.log('RESULT', result);

      if (result) {

        let session;
        session = JSON.parse(result);

        if (isValidSession(session)) {

          const publicDataSession = session;
          return callback(null, true, publicDataSession);

        } else {

          const error = {
            message: 'The session has expired',
            code: '-1'
          };

          return callback(error, false);

        }

      } else {

        const error = {
          message: 'There is no active session',
          code: '1'
        };

        return callback(error, false);
      }

    })
    .catch((error)=> {
      return callback(error, false);
    });

}

function isValidSession(session) {
  console.log('SESSION');
  console.log(session);
  return true;
}

const util = {
  validateClientCookies: validateClientCookies
};

module.exports = util;
