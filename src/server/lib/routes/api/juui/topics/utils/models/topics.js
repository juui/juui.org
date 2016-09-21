const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const subTopicSchema = new Schema({
  label: {
    type: String, required: true, trim: true
  },
  'juuiId': {
    type: String, required: true, trim: true
  },
  dateCreated: {
    type: Date, required: true, default: Date.now
  },
  dateUpdated: {
    type: Date, required: true, default: Date.now
  }
});

const topicSchema = new Schema({
  label: {
    type: String, required: true, trim: true
  },
  'juuiId': {
    type: String, required: true, trim: true
  },
  subTopics: [subTopicSchema],
  dateCreated: {
    type: Date, required: true, default: Date.now
  },
  dateUpdated: {
    type: Date, required: true, default: Date.now
  }
});

const Topic = Mongoose.model('Topic', topicSchema);

module.exports = {
  Topic
};