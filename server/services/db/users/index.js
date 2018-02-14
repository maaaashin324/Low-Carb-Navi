const createUsers = require('./create');
const listUsers = require('./list');
const getUsers = require('./get');

module.exports = Redis => ({
  create: createUsers(Redis),
  list: listUsers(Redis),
  get: getUsers(Redis),
});
