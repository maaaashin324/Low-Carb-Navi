import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

import App from './containers/App';
import mapReducer from './reducers/map';
import recordReducer from './reducers/record';

import styles from './styles/style.css';

const createStoreWithMiddleWare = compose(applyMiddleware(thunk))(createStore);
const rootReducer = combineReducers({
  map: mapReducer,
  record: recordReducer,
});

const store = createStoreWithMiddleWare(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'),
);
