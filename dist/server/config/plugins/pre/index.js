'use strict';

var plugins = [{
  register: require('inert'),
  options: {}
}, {
  register: require('vision'),
  options: {}
}, {
  register: require('blipp'),
  options: {
    showAuth: true
  }
}, {
  register: require('good'),
  options: {
    ops: false,
    reporters: {
      consoleReporters: [{
        module: 'good-console'
      }, 'stdout'],
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
}];

module.exports = plugins;