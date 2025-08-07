import axios from "./axios";

export const getIniciativasRequest = () => axios.get("/iniciativas");

export const getIniciativaRequest = (id) => axios.get(`/iniciativa/${id}`);

export const updateIniciativaRequest = (id, iniciativa) => axios.put(`/iniciativas/${id}`, iniciativa);

export const deleteIniciativaRequest = (id) => axios.delete(`/iniciativas/${id}`);

export const getIniciativasPorPaisRequest = (pais) => axios.get(`/iniciativas/${pais}`);
