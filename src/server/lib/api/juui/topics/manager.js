'use strict';

const bluebird = require('bluebird');
const coroutine = bluebird.coroutine;
const utils = require('./utils/index');

function getSubTopics(options) {

  return new Promise((resolve, reject)=> {

    coroutine(function*() {

      const subTopics = utils.getSubTopics(options);

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


const manager = {
  getSubTopics
};

module.exports = manager;