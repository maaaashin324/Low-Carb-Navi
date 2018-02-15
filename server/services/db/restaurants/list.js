const { promisify } = require('util');

module.exports = (client) => {
  const smembersAsync = promisify(client.smembers).bind(client);
  const geoposAsync = promisify(client.geopos).bind(client);

  const getGeoData = async (restaurantName) => {
    const positon = await geoposAsync(restaurantName);
    return ({
      restaurantName,
      positon,
    });
  };

  return async () => {
    const restaurantNames = await smembersAsync('restaurantName');

    const result = restaurantNames.map(eachRestaurant => getGeoData(eachRestaurant)
      .then(eachGeoData => eachGeoData))
      .catch(err => err.message);
    return result;
  };
};
