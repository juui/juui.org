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
  }
];

module.exports = routes;
