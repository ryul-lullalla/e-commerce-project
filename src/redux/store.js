import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';

import rootSage from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSage);

export const persistor = persistStore(store);

export default { store, persistor };

process.env.NODE_ENV === 'development' && console.log(store.getState());
console.log(process.env.NODE_ENV);
