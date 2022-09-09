const Joi = require("joi");

const schema = Joi.object()
  .keys({
    gender: Joi.string().valid("male", "female"),
    age: Joi.number().integer().min(1).max(100),
  })
  .or("age", "gender");

const getQueryErrors = (data) => schema.validate(data).error;

module.exports = { getQueryErrors: getQueryErrors };
