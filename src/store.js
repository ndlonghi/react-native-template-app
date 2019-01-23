import {
  applyMiddleware,
  createStore
} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['navigation']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation
);

const store = createStore(
  persistedReducer,
  applyMiddleware(navigationMiddleware)
);

const persistor = persistStore(store);

export {store, persistor};