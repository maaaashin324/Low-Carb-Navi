const { promisify } = require('util');

module.exports = (client) => {
  const saddAsync = promisify(client.sadd).bind(client);
  const geoAddAsync = promisify(client.geoadd).bind(client);

  return async (params) => {
    const { name, lng, lat } = params;

    try {
      const saddResult = await saddAsync('restaurantName', name);
      const geoAddResult = await geoAddAsync('restaurant', lng, lat, name);
      const resultObj = {
        saddResult,
        geoAddResult,
      };
      return resultObj;
    } catch (error) {
      return error;
    }
  };
};
