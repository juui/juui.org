'use strict';

const plugins = [
  {
    register: require('./../../../lib/plugins/auth/index'),
    options: {}
  }
];

module.exports = plugins;
