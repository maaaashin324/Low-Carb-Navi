const map = {
  currentView: 'home',
  restaurants: [],
};

const mapReducer = (state = map, action) => {
  switch (action.type) {
  case 'CHANGE_PAGE': {
    const newState = { ...state };
    newState.currentView = action.dest;
    return newState;
  }
  case 'GET_RESTAURANT': {
    const newState = { ...state };
    newState.restaurants = action.restaurant;
    return newState;
  }
  default: return state;
  }
};

module.exports = mapReducer;
