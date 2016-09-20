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
    detailsKey: Joi.string().trim().lowercase()
      .description('Topic and subTopic key').example('functions:introduction')
      .required()
  });

const validators = {
  getSubTopics,
  getSubTopicDetails
};

module.exports = validators;
