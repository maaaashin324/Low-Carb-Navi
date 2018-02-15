const { promisify } = require('util');

module.exports = (client) => {
  const setAsync = promisify(client.geoadd);

  return async (params) => {
    const { name, lng, lat } = params.name;

    const result = await setAsync(name, lng, lat);
    return result;
  };
};
