'use strict';

const hoek = require('hoek');
let util = require('./util.js');
let channels = require('./channels');
let io;
let currentServer;
let namespaces = ['main'];
let mainNamespace;

let users = new Map();

exports.register = function (server, options, next) {

  currentServer = server;

  io = require('socket.io')(currentServer.select('api').listener, {});

  mainNamespace = io.of('/main');

  start(next);

};

function start(done) {

  console.log('socket ready');
  activateMainNamespace();

  done();

}

function activateMainNamespace() {

  mainNamespace.on('connection', (socket)=> {

    const id = socket.id;

    console.log(' *** onConnection to --->', 'mainNamespace', 'id:', id);

    socket.emit('identification',
      {
        status: 'ok',
        type: 'identification',
        id: id
      }
    );

    socket.on('identification', (userInfo)=> {

      console.log(' *** onIdentification to ---> ', 'mainNamespace');
      console.log(userInfo);

      users.set(id, userInfo);

    });

    socket.on('disconnect', function () {

      console.log(' *** onDisconnect to ---> ', 'mainNamespace');
      users.delete(id);

    });


  });

}

exports.register.attributes = {
  name: 'hapi-socket-manager',
  multiple: false,
  version: '1.0.0'
};
