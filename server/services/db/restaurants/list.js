const { promisify } = require('util');

module.exports = (client) => {
  const smembersAsync = promisify(client.smembers).bind(client);
  const geoposAsync = promisify(client.geopos).bind(client);

  const getGeoData = async (key, restaurantName) => {
    const position = await geoposAsync(key, restaurantName);
    return ({
      restaurantName,
      position,
    });
  };

  return () => smembersAsync('restaurantName')
    .then((restaurantNames) => {
      const promises = restaurantNames.map(eachRestaurant => getGeoData('restaurant', eachRestaurant));
      return Promise.all(promises);
    })
    .catch(err => err.message);
};
