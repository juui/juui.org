'use strict';

var Handler = require('./handlers');

const routes = [
  {
    path: '/auth/twitter',
    method: 'GET',
    config: {
      auth: 'twitter',
      handler: Handler.sessionManagement
    }
  },
  {
    path: '/auth/facebook',
    method: 'GET',
    config: {
      auth: 'facebook',
      handler: Handler.sessionManagement
    }

  },
  {
    path: '/auth/google',
    method: 'GET',
    config: {
      auth: 'google',
      handler: Handler.sessionManagement
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
  }
];

module.exports = routes;
