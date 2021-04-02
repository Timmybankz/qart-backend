const express = require('express');
const myDetails = require('../controllers/payment-details');
const error = require('../controllers/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/validate-payment', myDetails);
  app.use(error);
}
