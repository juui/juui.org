'use strict';

const topics = {
  'functions': [
    {
      'id': 0,
      label: 'Introducción'
    }
  ]
};

function getSubTopics(options) {
  const topic = options.input.topic;
  return topics[topic] || [];
}

const utils = {
  getSubTopics
};

module.exports = utils;