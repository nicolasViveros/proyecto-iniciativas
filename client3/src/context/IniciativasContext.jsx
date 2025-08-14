import { createContext, useContext, useState } from "react";

import {
    getIniciativasRequest,
    getIniciativaRequest,
    deleteIniciativaRequest,
    updateIniciativaRequest,
    getIniciativasPorPaisRequest,
    getIniciativasPorCiudadRequest,
    createIniciativaRequest,
    getLocationPorIniciativaRequest,
    updateLocationPorIniciativaRequest,
} from "../api/iniciativas";

const IniciativaContext = createContext();

export const useIniciativas = () => {
    const context = useContext(IniciativaContext);

    if (!context) {
        throw new Error("useIniciativas must be used within a IniciativaProvider");
    }
    return context;
};

export function IniciativaProvider({ children }) {
    const [iniciativas, setIniciativas] = useState([])

    const createIniciativa = async (iniciativa) => {
        try {
            const res = await createIniciativaRequest(iniciativa);
            console.log(iniciativa);
            console.log(res.data);
            window.alert("Iniciativa creada con éxito");
            setIniciativas([...iniciativas, res.data]);
        } catch (error) {
            console.log(error);
        }
    };
    
    const getIniciativas = async () => {
        try {
            const res = await getIniciativasRequest()
            setIniciativas(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getIniciativa = async (id) => {
        try {
            const res = await getIniciativaRequest(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    const deleteIniciativa = async (id) => {
        try {
            console.log(id);
            const res = await deleteIniciativaRequest(id);
            window.alert("Iniciativa eliminada con éxito");
            if (res.status === 204)
                setIniciativas(iniciativas.filter((iniciativa) => iniciativa._id != id));
        } catch (error) {
            console.log(error);
        }
    };

    const updateIniciativa = async (id, iniciativa) => {
        try {
            await updateIniciativaRequest(id, iniciativa);
            window.alert("Iniciativa actualizada con éxito");
        } catch (error) {
            console.log(error);
            window.alert("Error al actualizar iniciativa");
        }
    };
    const getIniciativasPorPais = async (pais) => {
        try {
            const res = await getIniciativasPorPaisRequest(pais);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    const getIniciativasPorCiudad = async (ciudad) => {
        try {
            const res = await getIniciativasPorCiudadRequest(ciudad);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    const getLocationPorIniciativa = async (id) => {
        try {
            const res = await getLocationPorIniciativaRequest(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    const updateLocationPorIniciativa = async (id, location) => {
        try {
            await updateLocationPorIniciativaRequest(id, location);
            window.alert("Localización actualizada con éxito");
        } catch (error) {
            console.log(error);
            window.alert("Error al actualizar localización");
        }
    };
    return (
        <IniciativaContext.Provider
            value={{
                iniciativas,
                getIniciativas,
                getIniciativa,
                deleteIniciativa,
                updateIniciativa,
                getIniciativasPorPais,
                getIniciativasPorCiudad,
                createIniciativa,
                getLocationPorIniciativa,
                updateLocationPorIniciativa,
            }}
        >
            {children}
        </IniciativaContext.Provider>
    );
}