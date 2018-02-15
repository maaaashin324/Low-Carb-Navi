const { promisify } = require('util');

module.exports = (client) => {
  const saddAsync = promisify(client.sadd).bind(client);
  const setAsync = promisify(client.set).bind(client);

  return async (params) => {
    const { email, userName } = params;

    try {
      const saddResult = await saddAsync('userId', email);
      const setResult = await setAsync(email, userName);
      return ({ saddResult, setResult });
    } catch (error) {
      return error;
    }
  };
};
