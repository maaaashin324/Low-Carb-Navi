const redis = require('redis');

module.exports = () => ({
  users: require('./users')(redis),
  restaurants: require('./restaurants')(redis),
});
