const Redis = require('redis');
const users = require('./users');
const restaurants = require('./restaurants');

module.exports = (config) => {
  const client = Redis.createClient(config);

  const exportModule = {
    users: users(client),
    restaurants: restaurants(client),
  };
  return exportModule;
};
