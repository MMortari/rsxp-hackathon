import axios from 'axios';

export const mocky = axios.create({
  baseURL: 'http://localhost:3333',
});
