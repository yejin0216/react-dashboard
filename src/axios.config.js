/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable dot-notation */
import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

// access token을 intercept하는 axios 객체이다.
const AUTH_AXIOS = axios.create({
  headers: { 'Cache-Control': 'no-cache' },
  // disable the default cache and set the cache flag
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, {
    enabledByDefault: false,
    cacheFlag: 'useCache',
  }),
});
AUTH_AXIOS.interceptors.request.use(
  function (config) {
    if (localStorage.getItem('access_token')) {
      // token 정보가 있을 경우에만 세팅한다.
      config.headers['Authorization'] = `Bearer ${localStorage.getItem(
        'access_token',
      )}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// access token, service tagets을 intercept하는 axios 객체이다.
const AUTH_TARGET_AXIOS = axios.create({
  headers: { 'Cache-Control': 'no-cache' },
  // disable the default cache and set the cache flag
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, {
    enabledByDefault: false,
    cacheFlag: 'useCache',
  }),
});
AUTH_TARGET_AXIOS.interceptors.request.use(
  function (config) {
    if (localStorage.getItem('access_token')) {
      // token 정보가 있을 경우에만 세팅한다.
      config.headers['Authorization'] = `Bearer ${localStorage.getItem(
        'access_token',
      )}`;
      config.headers['X-KT-IM-TARGET-ID'] = localStorage.getItem('target_ids');
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export { AUTH_AXIOS, AUTH_TARGET_AXIOS };
