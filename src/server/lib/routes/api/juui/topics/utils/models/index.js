'use strict';

const Topic = require('./topics').Topic;

function getSubTopics(plugins, params) {

  return Topic.find({}).exec();

}

module.exports = {
  getSubTopics
};