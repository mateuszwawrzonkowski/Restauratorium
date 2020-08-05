import { createStore } from 'redux';
import cards from 'reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  cards /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
