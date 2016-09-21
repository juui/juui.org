'use strict';

const topicSchema = require('./topicsSchemas');

function setupSchemas(Mongoose){
  const Topic = Mongoose.model('topic', topicSchema);
}

module.exports = {
  setupSchemas
};

