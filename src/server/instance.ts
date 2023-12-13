import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://sendmail-api-4zli.onrender.com', 
  baseURL: 'http://localhost:3000',
  timeout: 10000, 
});

export default instance;