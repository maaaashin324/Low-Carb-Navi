const { fetchResistRestaurant } = require('../util/index');

function registMarkerSuccess() {
  return {
    type: 'REGISTERED',
  };
}

function registMarkerFail(error) {
  return {
    type: 'ERROR',
    error,
  };
}

export function registRestaurantAction() {
  return dispatch => (async (data) => {
    const response = await fetchResistRestaurant(data);
    if (response === 'success') {
      dispatch(registMarkerSuccess());
      return;
    }
    dispatch(registMarkerFail(response));
  });
}
