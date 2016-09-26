'use strict';

const hoek = require('hoek');
let util = require('./util.js');
let channels = require('./channels');
let io;
let currentServer;

exports.register = function (server, options, next) {

  currentServer = server;

  io = require('socket.io')(currentServer.select('api').listener, {});

  start(next);

};

function start(done) {

  console.log('socket ready');

  done();

}

exports.register.attributes = {
  name: 'hapi-socket-manager',
  multiple: false,
  version: '1.0.0'
};
