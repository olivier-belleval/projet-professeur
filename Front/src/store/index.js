// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// == Import : local
import rootReducer from './reducers/root';

import logMiddleware from './middleware/logMiddleware';
import ajaxMiddleware from './middleware/ajaxMiddleware';
import editMiddleware from './middleware/editMiddleware';
import deleteMiddleware from './middleware/deleteMiddleware';
import associateMiddleware from './middleware/associateMiddleware';
import createMiddleware from './middleware/createMiddleware';

const persistConfig = {
  key: 'root',
  whitelist: ['user', 'kanbans', 'articles'],
  storage,
};

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    ajaxMiddleware,
    createMiddleware,
    editMiddleware,
    deleteMiddleware,
    associateMiddleware,
  ),
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

// == Store
const store = createStore(persistedReducer, enhancers);

const persistor = persistStore(store);

// == Export
export { store, persistor };
