'use strict';

var constants = require('./constants.js');
var handlers = require('./handlers');
var validators = require('./validators');

var routes = [
  {
    method: 'GET',
    path: `/api/topics/${constants.version}/list`,
    config: {
      auth: false,
      // auth: {
      //   strategies: []
      // },
      handler: handlers.getSubTopics,
      description: 'Get topic with subtopic list',
      notes: 'Topic with subtopic list.',
      tags: ['api', 'topics', 'menu'],
      validate: {
        query: validators.getSubTopics
      }
    }
  },
  {
    method: 'GET',
    path: `/api/topics/${constants.version}/details`,
    config: {
      auth: false,
      // auth: {
      //   strategies: []
      // },
      handler: handlers.getSubTopicDetails,
      description: 'Get subtopic details',
      notes: 'Subtopic details.',
      tags: ['api', 'topics', 'menu'],
      validate: {
        query: validators.getSubTopicDetails
      }
    }
  }
];

module.exports = routes;
