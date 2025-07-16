import axios from './axios.js';

export const createFichaRequest = (ficha) => axios.post('/fichas', ficha);

export const getFichasRequest = () => axios.get('/fichas');

export const getFichaRequest = (id) => axios.get(`/ficha/${id}`);

export const updateFichaRequest = (id, ficha) => axios.put(`/fichas/${id}`, ficha);

console.log(id)
export const deleteFichaRequest = (id) => axios.delete(`/fichas/${id}`);
