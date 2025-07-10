import axios from './axios.js';

export const createFichaRequest = (ficha) => axios.post('/fichas', ficha);

export const getFichasRequest = () => axios.get('/fichas');

export const getFichaRequest = (id) => axios.get(`/ficha/${id}`);
