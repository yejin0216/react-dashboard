import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from 'App';
import { Provider } from 'react-redux';
import store from 'stores';
import history from 'stores/history';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/normalize.css';
import 'assets/common.css';
import 'assets/styles.css';

const test = `${process.env.PUBLIC_URL}`;
console.log(test);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
