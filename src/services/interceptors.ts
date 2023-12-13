import axios from 'axios';

export const axiosAuth = axios.create();

// add headers to all req
axiosAuth.interceptors.request.use(
  async function (config) {
    config.headers['content-type'] = 'application/json'
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);