const createRestaurants = require('./create');
const listRestaurants = require('./list');

module.exports = client => ({
  createRestaurants: createRestaurants(client),
  listRestaurants: listRestaurants(client),
});
