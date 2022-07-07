import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.bitfrog.io',
});

export default instance;
