'use strict';

const topics = {
  'functions': {
    'id': 0,
    'topic': {
      label: 'Functions',
      key: 'functions'
    },
    list: [
      {
        label: 'Introducción',
        key: 'introduction'
      },
      {
        label: 'Conceptos generales',
        key: 'concepts'
      },
      {
        label: 'Cálculo de imágenes',
        key: 'concepts'
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