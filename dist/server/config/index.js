'use strict';

var runTimeConfiguration = require('./run-time-configuration');

var settings = {
  debug: {
    request: ['*']
  },
  app: runTimeConfiguration.getConfiguration()
};

module.exports = settings;