'use strict';

const Joi = require('joi');

const lang = Joi.string().trim().lowercase()
  .description('ISO 639-1 Language Code and ISO Country Code').example('es-CR')
  .default('es-CR')
  .optional();

const topic = Joi.string().trim().lowercase()
  .description('Topic name').example('Functions')
  .required();

const subTopic = Joi.string().trim().lowercase()
  .description('Sub Topic name').example('Introduction')
  .required();

let getSubTopics = Joi.object({})
  .keys({
    topic,
    lang
  });

let getSubTopicDetails = Joi.object({})
  .keys({
    topic,
    subTopic,
    lang
  });

const validators = {
  getSubTopics,
  getSubTopicDetails
};

module.exports = validators;
