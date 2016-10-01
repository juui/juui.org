'use strict';

const config = require('./config');
const MAX_EXPIRE_CLIENT_SESSION = config.redis.expiration.authClient;

function sessionManagement(request, reply) {

  if (request.query.denied){
    return reply.redirect('/');
  }

  if (!request.auth.isAuthenticated) {
    return reply.redirect('/');
  }

  const credentials = request.auth.credentials;

  const redisClient = request.server.plugins['hapi-redis-client'].client;

  const key = credentials.profile.id;

  let authHash = config.redis.hashContainers.authClient + ':' + key;

  const userSession = JSON.stringify(getUserSession(credentials));

  const settings = [
    authHash, credentials.token, userSession
  ];

  redisClient.hset(settings)
    .then(()=> {

      console.log('------- SUCCESS', 'save session ok');

      redisClient.expire([authHash, MAX_EXPIRE_CLIENT_SESSION])
        .then(()=> {

          console.log('------- SUCCESS', 'expire session ok');

          request.cookieAuth.set(credentials);

          reply.redirect('/');

        })
        .catch((error)=> {
          console.log('ERROR', error);
          reply.redirect('/');
        });

    })
    .catch((error)=> {
      console.log('ERROR', error);

      reply.redirect('/');

    });

}

function getUserSession(credentials) {
  const session = credentials;
  console.log('getUserSession', session);
  return session;
}

const handlers = {
  sessionManagement: sessionManagement
};

module.exports = handlers;
