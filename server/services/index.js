const redis = require('./db/index');

module.exports = (config) => {
  const services = {};

  services.db = redis(config.db);
  return services;
};
