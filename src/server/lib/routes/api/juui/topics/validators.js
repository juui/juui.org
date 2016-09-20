'use strict';

const Joi = require('joi');

let getSubTopics = Joi.object({})
  .keys({
    topic: Joi.string().trim().lowercase()
      .description('Topic name').example('Functions')
      .required()
  });

let getSubTopicDetails = Joi.object({})
  .keys({
    topic: Joi.string().trim().lowercase()
      .description('Topic name').example('Functions')
      .required(),
    subTopic: Joi.string().trim().lowercase()
      .description('Sub Topic name').example('Introduction')
      .required()
  });

const validators = {
  getSubTopics,
  getSubTopicDetails
};

module.exports = validators;
