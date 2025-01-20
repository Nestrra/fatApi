// api/axios.js
import axios from 'axios';


const api = axios.create({
  baseURL: 'https://fakestoreapi.com', 
  timeout: 5000,
});


api.interceptors.response.use(
  (response) => response,  
  (error) => {
 
    console.error('Error en la respuesta de la API', error);
    return Promise.reject(error);  
  }
);

export default api;