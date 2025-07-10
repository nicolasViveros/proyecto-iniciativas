import axios from './axios.js';


export const createFichaRequest = (ficha) => axios.post('/fichas', ficha);
