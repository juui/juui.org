'use strict';

const Redis = require('ioredis');
const hoek = require('hoek');

let redisClient;
let config;
let currentServer;

exports.register = function (server, options, next) {

  currentServer = server;

  if (options == null) {
    options = {};
  }

  var defaults = {
    port: 6379,
    host: 'localhost',
    options: ''
  };

  config = hoek.applyToDefaults(defaults, options);

  start();

  server.expose('client', redisClient);
  server.expose('config', config);

  next();

};

function start() {

  redisClient = new Redis(config.port, config.host, config.options);

  redisClient.on('error', function (error) {
    console.log(error);
  });

  redisClient.on('connect', function (error) {
    var result;

    result = 'Redis client connected to: ';

    result += JSON.stringify(config);

    currentServer.log(['plugin', 'info', 'hapi-redis-client'], result);
  });

}

exports.register.attributes = {
  name: 'hapi-redis-client',
  multiple: false,
  version: '1.0.0'
};
