import axios from 'axios'
import {BASE_URL} from "./../constants"

const axiosInstance = axios.create({
    baseURL: BASE_URL
  })
  

function errorResponseHandler(error) {
  // check for errorHandle config
  if( error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false ) {
      return Promise.reject(error);
  }

  // if has response show the error
  if (error.response) {
      console.error(error.response.data.message)
  }
}

// Add a request interceptor
axios.interceptors.request.use((config) => {
  // Do something before request is sent
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

axios.interceptors.response.use(
  response => response,
  errorResponseHandler
);

export default errorResponseHandler;