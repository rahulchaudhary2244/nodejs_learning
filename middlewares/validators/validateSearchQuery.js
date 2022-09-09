const Joi = require("joi");

const schema = Joi.object()
  .keys({
    gender: Joi.string().valid("male", "female"),
    age: Joi.number().integer().min(1).max(100),
  })
  .or("age", "gender");

const validateSearchQuery = (req, res, next) => {
  const { gender, age } = req.query;
  if (schema.validate({ gender, age }).error) return res.status(422).end();

  next();
};

module.exports = { validateSearchQuery: validateSearchQuery };
