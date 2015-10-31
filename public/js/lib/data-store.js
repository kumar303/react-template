import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


export function createReduxStore() {
  const store = createStoreWithMiddleware(rootReducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    // See: https://github.com/rackt/react-redux/releases/tag/v2.0.0
    module.hot.accept('lib/reducers', () => {
      const nextRootReducer = require('lib/reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default createReduxStore();
