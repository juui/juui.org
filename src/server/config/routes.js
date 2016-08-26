'use strict';

const staticFiles = require('./../lib/web/routes');
const threejs = require('./../lib/web/threejs/routes');

const routes = [
  ...staticFiles,
  ...threejs
];

module.exports = routes;
