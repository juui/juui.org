'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [activateServer].map(_regenerator2.default.mark);

var Hapi = require('hapi');
var ip = require('ip');
var bluebird = require('bluebird');
var coroutine = bluebird.coroutine;

//////////////////////////////////////////////////

var validations = require('./config/auth/index');
var settings = require('./config/index');
var prePlugins = require('./config/plugins/pre/index');
var postPlugins = require('./config/plugins/post/index');
var routes = require('./config/routes');

var server = {};

//////////////////////////////////////////////////

coroutine(activateServer)().catch(function (error) {
  console.error(error);
});

//////////////////////////////////////////////////

function activateServer() {
  return _regenerator2.default.wrap(function activateServer$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:

          createServer();
          setupConnections();
          _context.next = 4;
          return setupPlugins();

        case 4:
          setupRoutes();
          startServer();

        case 6:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

//////////////////////////////////////////////////

function createServer() {
  server = new Hapi.Server(settings);
}

function setupConnections() {

  server.connection({
    port: process.env.PORT || 3008,
    labels: 'api',
    routes: {
      files: {
        relativeTo: __dirname + '/../clients/'
      },
      cors: true
    }
  });
}

function setupPlugins() {

  return new _promise2.default(function (resolve, reject) {

    server.register(prePlugins, function (error) {

      if (error) {
        reject(error);
      } else {

        server.register(postPlugins, function (error) {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      }
    });
  });
}

function setupRoutes() {

  var api = server.select('api');

  api.route(routes);

  api.views({
    engines: {
      'html': {
        module: require('handlebars')
      },
      'pug': {
        module: require('pug')
      }
    },
    path: __dirname + '/../clients/',
    compileOptions: {},
    isCached: false
  });
}

function startServer() {

  server.start(function (err) {

    if (err) {
      throw err;
    } else {
      console.log('Server running at:', server.info.uri);
      console.log('IP: ');
      console.log(ip.address() + ':' + (process.env.PORT || 3008));
    }
  });
}