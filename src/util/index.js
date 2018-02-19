const thisAppUrl = 'http://localhost:5000/api/restaurants';
// const thisAppUrl = 'https://cc3-low-carbo.herokuapp.com/api/restaurants';

module.exports = {
  async fetchAllRestaurants() {
    const restaurants = await fetch(thisAppUrl, { method: 'GET' }).then(res => res.json());
    return restaurants.map((eachData, index) => ({
      id: index,
      name: eachData.restaurantName,
      position: {
        lat: eachData.position[0][1],
        lng: eachData.position[0][0],
      },
    }));
  },
  async fetchResistRestaurant(restaurantData) {
    const { name, address } = restaurantData;
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`;

    try {
      const geoData = await (await fetch(geocodeUrl, { method: 'GET' })).json();

      if (geoData.status === 'ZERO_RESULTS') {
        throw new Error('Address is invalid.');
      }
      const geo = geoData.results[0].geometry.location;
      const locationData = {
        name,
        lng: +geo.lng,
        lat: +geo.lat,
      };

      const response = await (await fetch(thisAppUrl, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(locationData),
        method: 'POST',
      })).json();

      if (response.status >= 400) {
        throw new Error('Fail to register.');
      }

      return 'success';
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
