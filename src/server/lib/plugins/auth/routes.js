'use strict';

const handlers = require('./handlers');

const routes = [
  {
    path: '/auth/twitter',
    method: 'GET',
    config: {
      auth: 'twitter',
      pre: [
        function (request, reply) {
          if (request.query.denied) {
            return reply.redirect('/');
          }
        }
      ],
      handler: handlers.sessionManagement
    }
  },
  {
    path: '/auth/facebook',
    method: 'GET',
    config: {
      auth: 'facebook',
      handler: handlers.sessionManagement
    }

  },
  {
    path: '/auth/google',
    method: 'GET',
    config: {
      auth: 'google',
      handler: handlers.sessionManagement
    }
  },
  {
    path: '/logout',
    method: 'GET',
    config: {
      handler: function (request, reply) {

        let auth = request.auth;

        if (auth.isAuthenticated) {
          request.cookieAuth.clear();
        }
        return reply.redirect('/');
      },
      auth: {
        strategy: 'session',
        mode: 'try'
      },
      plugins: {'hapi-auth-cookie': {redirectTo: false}}
    }
  },
  {
    method: 'POST',
    path: '/auth',
    config: {
      handler(request, reply){

        let auth = request.auth;

        if (auth.isAuthenticated) {

          auth.credentials.token = undefined;

          reply(
            {
              auth: auth.credentials,
              isLoggedIn: true
            });

        } else {
          reply(
            {
              isLoggedIn: false
            });
        }

      },
      tags: ['web'],
      validate: {},
      auth: {
        strategy: 'session',
        mode: 'try'
      },
      plugins: {'hapi-auth-cookie': {redirectTo: false}}
    }
  }
];

module.exports = routes;
