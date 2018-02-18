import { fetchAllRestaurants } from '../util/index';

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
  return function (dispatch) {
    return (async function () {
      const restaurants = await fetchAllRestaurants();
      dispatch(getMarkersSuccess(restaurants));
    }());
  };
}
