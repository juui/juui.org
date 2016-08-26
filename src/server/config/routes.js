'use strict';

const staticFiles = require('./../lib/web/routes');
const threejs = require('./../lib/web/threejs/routes');
const juui = require('./../lib/web/juui/routes');

const routes = [
  ...staticFiles,
  ...threejs,
  ...juui
];

module.exports = routes;
