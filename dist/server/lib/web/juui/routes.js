'use strict';

var routes = [{
  method: 'GET',
  path: '/juui/',
  config: {
    cache: false,
    handler: function handler(request, reply) {

      reply.view('./juui/app/templates/index.pug', {});
    },

    tags: ['web'],
    validate: {}
  }
}];

module.exports = routes;