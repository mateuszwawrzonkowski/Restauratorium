import { createStore } from 'redux';
import rootReducer from 'reducers';
import { loadState, saveState } from 'localStorage/localStorage';

const persistedState = loadState();

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer /* preloadedState, */,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

store.subscribe(() => {
  saveState({
    rootReducer: store.getState().rootReducer,
  });
});

export default store;
