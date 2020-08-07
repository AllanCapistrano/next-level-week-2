import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.3:3333' /*URL que está disponível no site do expo, tira o "exp" e coloca "http", e troca a porta pela utilizada no back-end*/
});

export default api;