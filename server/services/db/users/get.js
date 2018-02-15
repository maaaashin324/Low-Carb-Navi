const { promisify } = require('util');

module.exports = (client) => {
  const getAsync = promisify(client.set).bind(client);

  return async (params) => {
    const { email } = params;

    const userName = await getAsync(email);
    return userName;
  };
};
