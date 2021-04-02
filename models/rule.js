const Joi = require('joi');

function validateRequest(req) {
  const schema = Joi.object({
    totalCost: Joi.number().required(),
    hasLoan: Joi.string().required(),
    shoppingCredit: Joi.number().required(),
    minPayable: Joi.number().required(),
    monthlyInstl: Joi.number().required(),
    salary: Joi.number().required(),
    careerId: Joi.number().required(),
    loanTenure: Joi.number().required(),
    payDate: Joi.date().required()
  });

  return schema.validate(req, { abortEarly: false });
}

exports.validateRequest = validateRequest;
