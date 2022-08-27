import axios from 'axios'
import { API_BASE_URL } from './constants/constants';

const instance = axios.create({
    baseURL: API_BASE_URL,
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
  export default instance