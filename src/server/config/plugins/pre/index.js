'use strict';

const documentationOptions = require('./../../swagger-options.json');
const ip = require('ip');

if (process.env.PORT) {
  documentationOptions.host = 'www.juui.org';
}

const plugins = [
  {
    register: require('inert'),
    options: {}
  },
  {
    register: require('vision'),
    options: {}
  },
  {
    register: require('blipp'),
    options: {
      showAuth: true
    }
  },
  {
    register: require('good'),
    options: {
      ops: false,
      reporters: {
        consoleReporters: [
          {
            module: 'good-console'
          },
          'stdout'
        ],
        httpPReporters: [
          // {
          //   module: 'good-http',
          //   args: ['http://prod.logs:3000',
          //     {
          //       wreck: {
          //         headers: {'x-api-key': 12345}
          //       }
          //     }
          //   ]
          // }
        ]
      }
    }
  },
  {
    register: require('hapi-swagger'),
    options: documentationOptions
  },
  {
    register: require('./../../../lib/plugins/hapi-mongoose/index'),
    options: {
      bluebird: true,
      uri: process.env.MONGODB_URI || 'mongodb://localhost:27017'
    }
  },
  {
    register: require('./../../../lib/plugins/hapi-socket-manager/index'),
    options: {}
  },
  {
    register: require('hapi-auth-cookie'),
    options: {}
  },
  {
    register: require('bell'),
    options: {}
  },
  {
    register: require('./../../../lib/plugins/hapi-redis-client/index'),
    options: {
      host: 'ec2-54-163-233-146.compute-1.amazonaws.com',
      port: '18419',
      options: {
        password: 'pbci9e4r4ep5hj9p3m107jitl01'
      }
    }
  }
];

module.exports = plugins;
