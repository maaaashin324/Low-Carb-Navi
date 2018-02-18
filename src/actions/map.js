const { fetchAllRestaurants } = require('../util/index');

function getMarkersSuccess(markers) {
  return {
    type: 'GET_RESTAURANT',
    restaurant: markers,
  };
}

export function goAnyWhere(dest) {
  return {
    type: 'CHANGE_PAGE',
    dest,
  };
}

export function getMarkers() {
  return dispatch => (async () => {
    const restaurants = await fetchAllRestaurants();
    dispatch(getMarkersSuccess(restaurants));
  })();
}
