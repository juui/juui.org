const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const subTopicSchema = new Schema({
  label: {
    type: String, required: true, trim: true
  },
  key: {
    type: String, required: true, trim: true
  }
});

const topicSchema = new Schema({
  label: {
    type: String, required: true, trim: true
  },
  key: {
    type: String, required: true, trim: true
  },
  subTopics: [subTopicSchema],
  dateCreated: {
    type: Date, required: true, default: Date.now
  }
});

const Topic = Mongoose.model('topics', topicSchema);

module.exports = {
  Topic
};