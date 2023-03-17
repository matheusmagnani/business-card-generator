import axios from 'axios';

// Creates axios instance
const api = axios.create({
  baseURL: "http://localhost:3333"
});

export { api }