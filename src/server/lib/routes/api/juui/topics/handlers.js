'use strict';

const bluebird = require('bluebird');
const manager = require('./manager');
const async = bluebird.coroutine;

function getSubTopics(request, reply) {

  let options = {
    request: request,
    reply: reply,
    input: request.query,
    plugins: {},
    result: {}
  };

  manager.getSubTopics(options)
    .then((result) => {
      onSuccessful(options, result);
    })
    .catch((error) => {
      onError(options, error);
    });

}

function getSubTopicDetails(request, reply) {

  let options = {
    request: request,
    reply: reply,
    input: request.query,
    plugins: {},
    result: {}
  };

  manager.getSubTopicDetails(options)
    .then((result) => {
      onSuccessful(options, result);
    })
    .catch((error) => {
      onError(options, error);
    });

}

function onError(options, error) {
  options.reply(error.message).code(417);
}

function onSuccessful(options, result) {
  options.reply(result);
}

const handlers = {
  getSubTopics,
  getSubTopicDetails
};

module.exports = handlers;
