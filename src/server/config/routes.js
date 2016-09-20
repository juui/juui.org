'use strict';

const staticFiles = require('./../lib/routes/web/routes');
// const threejs = require('./../lib/routes/web/threejs/routes');

const juuiWeb = require('./../lib/routes/web/juui/routes');
const juuiAPI = require('./../lib/routes/api/juui/routes');

const routes = [
  ...staticFiles,
  // ...threejs,

  ...juuiWeb,
  ...juuiAPI
];

module.exports = routes;
