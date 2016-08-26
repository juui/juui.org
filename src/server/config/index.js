'use strict';

const runTimeConfiguration = require('./run-time-configuration');

const settings = {
  debug: {
    request: ['*']
  },
  app: runTimeConfiguration.getConfiguration()
};

module.exports = settings;