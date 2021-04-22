import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import reportWebVitals from './reportWebVitals';
import App from 'App';
import { Provider } from 'react-redux';
import store from 'store';
import 'container/layout/normalize.css';
import 'container/layout/common.css';
import 'container/layout/styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {persistStore} from "redux-persist";

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
