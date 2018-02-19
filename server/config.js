module.exports = {
  // Redis setup
  db: {
    host: process.env.REDIS_URL || '127.0.0.1',
  },
  // server port setup
  express: {
    port: 3000,
  },
  // logger setup
  logger: {
    format: 'MMMM Do YYYY, h:mm:ss a',
  },
};
