'use strict';

function getSubTopics(plugins, params) {

  const Topic = plugins['hapi-mongoose'].lib.model('topic');

  return Topic.find({}).exec();

}

module.exports = {
  getSubTopics
};