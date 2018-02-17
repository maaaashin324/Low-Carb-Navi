const express = require('express');

const router = express.Router();
const usersRouter = require('./users/index');
const restaurantsRouter = require('./restaurants/index');

module.exports = (services) => {
  router.use('/users', usersRouter(services));
  router.use('/restaurants', restaurantsRouter(services));
  return router;
};
