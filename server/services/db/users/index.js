module.exports = redis => ({
  create: require('./create')(redis),
  list: require('list')(redis),
  get: require('list')(redis),
});
