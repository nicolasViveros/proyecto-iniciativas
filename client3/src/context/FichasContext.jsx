import { createContext, useContext, useState } from "react";
import { createFichaRequest, getFichasRequest, getFichaRequest, deleteFichaRequest, updateFichaRequest } from "../api/fichas";

const FichaContext = createContext();

export const useFichas = () => {
    const context = useContext(FichaContext);

    if (!context) {
        throw new Error("useFichas must be used within a FichaProvider");
    }
    return context;
}

export function FichaProvider({ children }) {
    const [fichas, setFichas] = useState([])

    const getFichas = async () => {
        try {
            const res = await getFichasRequest();
            setFichas(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    const createFicha = async (ficha) => {
        // console.log("Datos antes de enviar:", ficha);
        try {
            const res = await createFichaRequest(ficha)

            window.alert("Postulación enviada con éxito!!!, ahora serás redirigido a la página de inicio");
            // console.log('Ficha creada:', res.data);
        } catch (error) {
            console.error('Error al crear la ficha:', error);
        }
    }

    const deleteFicha = async (id) => {
       
       
        try {
            const res = await deleteFichaRequest(id);
            // console.log('Ficha eliminada:', id);
            window.alert("Ficha eliminada con éxito");
            if (res.status === 204) setFichas(fichas.filter(ficha => ficha._id != id))
        } catch (error) {
            console.log(error);
        }
    };

    const getFicha = async (id) => {
        try {
            const res = await getFichaRequest(id);
            return (res.data)
        } catch (error) {
            console.log(error)
        }
    };

    const updateFicha = async (id, ficha) => {
        try {
            await updateFichaRequest(id, ficha);
            window.alert("Postulación actualizada con éxito");
        } catch (error) {
            console.log(error);
            window.alert("Error al actualizar ficha")
        }
    }

    return (
        <FichaContext.Provider
            value={{
                fichas,
                createFicha,
                getFichas,
                deleteFicha,
                getFicha,
                updateFicha,
            }}
        >
            {children}
        </FichaContext.Provider>
    );
}
