const Redis = require('redis');
const users = require('./users');
const restaurants = require('./restaurants');

module.exports = () => ({
  users: users(Redis),
  restaurants: restaurants(Redis),
});
