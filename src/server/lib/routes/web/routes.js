'use strict';

const routes = [
  {
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: './',
        redirectToSlash: true
      }
    },
    config: {
      tags: ['web'],
      auth: false,
      validate: {
        query: {}
      }
    }
  }
];

module.exports = routes;
