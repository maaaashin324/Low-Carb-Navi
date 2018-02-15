module.exports = {
  registRestaurant: (restaurantData) => {
    const { name, address } = restaurantData;
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`;
    const thisAppUrl = 'http://127.0.0.1/restaurants';

    fetch(geocodeUrl, { method: 'GET' })
      .then(res => res.json())
      .then((geoData) => {
        const { location } = geoData.results[0].geometry;
        return ({
          name,
          lng: location.lng,
          lat: location.lat,
        });
      })
      .then(locationData => fetch(thisAppUrl, {
        body: JSON.stringify(locationData),
        method: 'POST',
      }))
      .then(() => ({
        type: 'REGISTERED',
      }))
      .catch(err => ({
        type: 'ERROR',
        err,
      }));
  },
};
