'use strict';

const bluebird = require('bluebird');
const coroutine = bluebird.coroutine;
const utils = require('./utils/index');

function getSubTopics(options) {

  return new Promise((resolve, reject)=> {

    coroutine(function*() {

      const topic = options.input.topic;
      const subTopics = utils.getSubTopics(options);

      resolve(
        {
          topic: {
            label: ''
          },
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