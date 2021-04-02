const express = require('express');
const router = express.Router();
const reqValidator = require('../models/rule');


router.post('/', async (req, res) => {

  const { error: validationError } = reqValidator.validateRequest(req.body);

  if (validationError)
    return res.status(400).json(validationError.details[0].message);
  
  const { totalCost, minPayable, monthlyInstl, loanTenure } = req.body;

  if ((0.3 * totalCost) > minPayable)
    return res.status(400).json('Your Down Payment must be at least 30% of the Total Goods Value');
  
  // if (((monthlyInstl * loanTenure) + minPayable) !== totalCost)
  //   return res.status(400).json('Incorrect details! The sum of your Down Payment and Monthly payment is not up to the Total Goods Value');

  return res.status(200).json('Your request validated successfully! Kindly proceed');
});


module.exports = router;
