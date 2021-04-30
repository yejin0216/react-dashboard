import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from 'App';
import { Provider } from 'react-redux';
import store from 'stores';
import history from 'stores/history';
import reportWebVitals from './reportWebVitals';

import 'containers/layout/normalize.css';
import 'containers/layout/common.css';
import 'containers/layout/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
