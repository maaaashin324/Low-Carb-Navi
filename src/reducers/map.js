const map = {
  currentView: 'home',
  restaurants: [],
};

const reducer = (state = map, action) => {
  switch (action.type) {
  case 'CHANGE_VIEW': {
    const newState = { ...state };
    newState.currentView = action.type === 'home' ? 'home' : 'record';
    return newState;
  }
  default: return state;
  }
};

module.exports = reducer;
