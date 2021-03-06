'use strict';

const models = require('./models/index');

const topics = {
  'functions': {
    'id': 0,
    'topic': {
      label: 'Functions',
      key: 'functions',
    },
    list: [
      {
        label: 'Introducción',
        key: 'introduction',
        state: 'introduction'
      },
      {
        label: 'Conceptos generales',
        key: 'concepts',
        state: 'concepts'
      },
      {
        label: 'Cálculo de imágenes',
        key: 'calculate-images',
        state: 'calculate-images'
      }
    ]

  }

};

function getSubTopics(options) {
  return new Promise((resolve, reject)=>{
    const topic = options.input.topic;
    models.getSubTopics({topic})
      .then((result)=>{
        resolve(result);
      })
      .catch((error)=>{
        reject(error);
      });
  });
}

function getSubTopicDetails(options) {
  return new Promise((resolve, reject)=>{
    const topic = options.input.topic;
    resolve(topics[topic] || []);
  });
}

const utils = {
  getSubTopics,
  getSubTopicDetails
};

module.exports = utils;