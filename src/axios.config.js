import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(function (config) {
  if ( localStorage.getItem('access_token') ) {
    config.headers['Authorization'] = "Bearer " + localStorage.getItem('access_token');
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default axiosInstance;