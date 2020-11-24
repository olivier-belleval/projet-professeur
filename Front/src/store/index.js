// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// == Import : local
import rootReducer from './reducers/root';

import logMiddleware from './middleware/logMiddleware';
import ajaxMiddleware from './middleware/ajaxMiddleware';

const persistConfig = {
  key: 'root',
  whitelist: ['user', 'kanbans'],
  storage,
};

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    ajaxMiddleware,
  ),
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

// == Store
const store = createStore(persistedReducer, enhancers);

const persistor = persistStore(store);

// == Export
export { store, persistor };
