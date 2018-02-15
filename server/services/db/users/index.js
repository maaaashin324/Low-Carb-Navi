const createUsers = require('./create');
const getUsers = require('./get');

module.exports = client => ({
  createUsers: createUsers(client),
  getUsers: getUsers(client),
});
