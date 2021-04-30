import axios from 'axios';

export const AUTH_AXIOS = axios.create();

AUTH_AXIOS.interceptors.request.use(
  function (config) {
    if (localStorage.getItem('access_token')) {
      // token 정보가 있을 경우에만 세팅한다.
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${localStorage.getItem('access_token')}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export const AUTH_TARGET_AXIOS = axios.create();

AUTH_TARGET_AXIOS.interceptors.request.use(
  function (config) {
    if (localStorage.getItem('access_token')) {
      // token 정보가 있을 경우에만 세팅한다.
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${localStorage.getItem('access_token')}`;
      axios.defaults.headers.common['X-KT-IM-TARGET-ID'] = localStorage.getItem(
        'target_ids',
      );
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);
