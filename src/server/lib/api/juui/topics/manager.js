'use strict';

const bluebird = require('bluebird');
const coroutine = bluebird.coroutine;
const utils = require('./utils/index');

function getSubTopics(options) {

  return new Promise((resolve, reject)=> {

    coroutine(function*() {

      const subTopics = yield utils.getSubTopics(options);

      resolve(
        {
          subTopics
        }
      );

    })().catch((error)=> {
      reject(error);
    });

  });

}

function getSubTopicDetails(options) {

  return new Promise((resolve, reject)=> {

    coroutine(function*() {

      const details = yield utils.getSubTopicDetails(options);

      resolve(
        {
          details
        }
      );

    })().catch((error)=> {
      reject(error);
    });

  });

}


const manager = {
  getSubTopics,
  getSubTopicDetails
};

module.exports = manager;