'use strict';

const Topic = require('./topics').Topic;

function getSubTopics(params) {

  const topic = params.topic;
  return Topic.findOne(
    {
      'juuiId': topic
    }
  ).exec();

}

module.exports = {
  getSubTopics
};