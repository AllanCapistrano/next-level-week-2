import axios from 'axios'; /*Utilizado para poder consumir APIs externas.*/

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;