'use strict';

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
  const topic = options.input.topic;
  return topics[topic] || [];
}

const utils = {
  getSubTopics
};

module.exports = utils;