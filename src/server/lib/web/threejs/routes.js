'use strict';

const routes = [
  {
    method: 'GET',
    path: '/threejs/',
    config: {
      cache: false,
      handler(request, reply){

        reply.view('./threejs/app/templates/index.pug',
          {});

      },
      tags: ['web'],
      validate: {}
    }
  },
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
