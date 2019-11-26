import axios from 'axios';

export const mocky = axios.create({
  baseURL: 'http://www.mocky.io/v2',
});
