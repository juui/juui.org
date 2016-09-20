'use strict';

const staticFiles = require('./../lib/web/routes');
const threejs = require('./../lib/web/threejs/routes');
const juuiWeb = require('./../lib/web/juui/routes');

const juuiAPI = require('./../lib/api/juui/routes');

const routes = [
  ...staticFiles,
  ...threejs,

  ...juuiWeb,
  ...juuiAPI
];

module.exports = routes;
