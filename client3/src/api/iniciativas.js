import axios from "./axios";

export const createIniciativaRequest = (iniciativa) => axios.post('/nueva-iniciativa', iniciativa);

export const getIniciativasRequest = () => axios.get("/iniciativas");

export const getIniciativaRequest = (id) => axios.get(`/iniciativa/${id}`);

export const updateIniciativaRequest = (id, iniciativa) => axios.put(`/iniciativas/${id}`, iniciativa);

export const deleteIniciativaRequest = (id) => axios.delete(`/iniciativas/${id}`);

export const getIniciativasPorPaisRequest = (pais) => axios.get(`/iniciativas/${pais}`);

export const getIniciativasPorCiudadRequest = (ciudad) => axios.get(`/iniciativasPorCiudad/${ciudad}`);

export const getLocationPorIniciativaRequest = (id) => axios.get(`/locationPorIniciativa/${id}`);

export const updateLocationPorIniciativaRequest = (idIniciativa, location) => axios.put(`/locationPorIniciativa/${idIniciativa}`, location);