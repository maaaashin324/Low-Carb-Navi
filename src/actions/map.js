const fetchAllRestaurants = async () => {
  const thisAppUrl = 'http://127.0.0.1/restaurants';

  fetch(thisAppUrl, { method: 'GET' })
    .then(res => res.json());
};

module.exports = {
  goAnyWhere: dest => ({
    type: 'CHANGE_PAGE',
    dest,
  }),
  getRestaurants: () => {
    fetchAllRestaurants()
      .then(data => ({
        type: 'GET_RESTAURANT',
        restaurant: data,
      }));
  },
};
