const { promisify } = require('util');

module.exports = (client) => {
  const setAsync = promisify(client.set).bind(client);

  return async (params) => {
    const { email, userName } = params;

    const result = await setAsync(email, userName);
    return result;
  };
};
