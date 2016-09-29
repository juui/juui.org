'use strict';

const Hapi = require('hapi');
const ip = require('ip');
const bluebird = require('bluebird');
const coroutine = bluebird.coroutine;
const mongoose = require('mongoose');

//////////////////////////////////////////////////

const settings = require('./config/index');
const prePlugins = require('./config/plugins/pre/index');
const postPlugins = require('./config/plugins/post/index');
const routes = require('./config/routes');

let server = {};

//////////////////////////////////////////////////

coroutine(activateServer)()
  .catch((error)=> {
    console.error(error);
  });

//////////////////////////////////////////////////

function* activateServer() {

  createServer();
  setupConnections();
  yield setupPlugins();
  setupRoutes();
  startServer();

}

//////////////////////////////////////////////////

function createServer() {
  server = new Hapi.Server(settings);
}

function setupConnections() {

  server.connection(
    {
      port: process.env.PORT || 3008,
      labels: 'api',
      routes: {
        files: {
          relativeTo: __dirname + '/../clients/',
        },
        cors: true
      }
    }
  );
}

function setupPlugins() {

  return new Promise((resolve, reject)=> {

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

  let api = server.select('api');

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

  server.start((err) => {

    if (err) {
      throw err;
    } else {
      console.log('Server running at:', ip.address() + ':' + (process.env.PORT || 3008));
    }

  });

}
