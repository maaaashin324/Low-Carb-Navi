const redis = require('./db/index');
const logger = require('./logger/index');

module.exports = (config) => {
  const services = {};

  services.db = redis(config.db);
  services.logger = logger(config.logger);
  return services;
};
