import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// sessionStorage: import storageSession from 'redux-persist/lib/storage/session'
// localStorage: import storage from 'redux-persist/lib/storage'

// importing actual local storage object on window browser: essingtially telling redux-persist using local storage as default storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
