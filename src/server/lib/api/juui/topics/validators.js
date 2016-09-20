'use strict';

const Joi = require('joi');

let getSubTopics = Joi.object({})
  .keys({
    topic: Joi.string().trim().lowercase()
      .description('Topic name').example('Functions')
      .required()
  });

const validators = {
  getSubTopics
};

module.exports = validators;
