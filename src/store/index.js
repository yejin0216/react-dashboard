import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from 'reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import auth from 'reducer/auth'


const middleware = [ thunk ]

let store = createStore(
  persistReducer({key:'root', storage, whitelist: ['auth']}, rootReducer),
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store;