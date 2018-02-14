const map = {
  currentView: 'home',
  restaurants: [],
};

const mapReducer = (state = map, action) => {
  switch (action.type) {
  case 'CHANGE_VIEW': {
    const newState = Object.assign({}, state);
    newState.currentView = action.type === 'home' ? 'home' : 'record';
    return newState;
  }
  default: return state;
  }
};

module.exports = mapReducer;
