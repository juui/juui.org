'use strict';

const hoek = require('hoek');
let util = require('./util.js');
let channels = require('./channels');
let io;
let currentServer;
let mainChannel;

exports.register = function (server, options, next) {

  currentServer = server;

  io = require('socket.io')(currentServer.select('api').listener, {});

  mainChannel = io.of('/main');

  start(next);

};

function start(done) {

  console.log('socket ready');
  activateMainChannel();

  done();

}

function activateMainChannel() {

  mainChannel.on('connection', function (socket) {

    console.log(' *** onConnection to --->', 'mainChannel', 'id:', socket.id);

    socket.emit('identification',
      {
        status: 'ok',
        type: 'identification',
        id: socket.id
      }
    );

    socket.on('disconnect', function () {

      console.log(' *** onDisconnect to ---> ', 'mainChannel');

    });


  });

}

exports.register.attributes = {
  name: 'hapi-socket-manager',
  multiple: false,
  version: '1.0.0'
};
