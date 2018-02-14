const defaultState = {
  name: null,
  address: null,
};

const recordReducer = (state = defaultState, action) => {
  switch (action.type) {
  case 'REGISTERED': {
    const { newState } = state;
    // I need calling server but now I don't have it.
    return newState;
  }
  default:
    return state;
  }
};

export default recordReducer;
