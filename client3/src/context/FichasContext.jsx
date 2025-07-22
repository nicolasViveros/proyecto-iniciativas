import { createContext, useContext, useState } from "react";
import {
    createFichaRequest,
    getFichasRequest,
    getFichaRequest,
    deleteFichaRequest,
    updateFichaRequest,
} from "../api/fichas";

const FichaContext = createContext();

export const useFichas = () => {
    const context = useContext(FichaContext);

    if (!context) {
        throw new Error("useFichas must be used within a FichaProvider");
    }
    return context;
};

export function FichaProvider({ children }) {
    const [fichas, setFichas] = useState([]);

    const getFichas = async () => {
        try {
            const res = await getFichasRequest();
            setFichas(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const createFicha = async (ficha) => {

        try {
            const res = await createFichaRequest(ficha);
            const language = res.data.language;
            console.log("Ficha creada:", res);

            let successMessage;

            switch (language) {
                case "es":
                    successMessage =
                        "Postulación enviada con éxito!!!, ahora serás redirigido a la página de inicio";
                    break;
                case "en":
                    successMessage =
                        "Application submitted successfully!!! You will now be redirected to the home page";
                    break;
                case "pt":
                    successMessage =
                        "Candidatura enviada com sucesso!!! Agora você será redirecionado para a página inicial";
                    break;
                default:
                    successMessage =
                        "Postulación enviada con éxito!!!, ahora serás redirigido a la página de inicio";
            }

            window.alert(successMessage);
        } catch (error) {
            console.error("Error al crear la ficha:", error);

            let errorMessage;

            switch (language) {
                case "es":
                    errorMessage = "Error al crear la ficha";
                    break;
                case "en":
                    errorMessage = "Error creating application";
                    break;
                case "pt":
                    errorMessage = "Erro ao criar ficha";
                    break;
                default:
                    errorMessage = "Error al crear la ficha";
            }

            window.alert(errorMessage);
        }
    };

    const deleteFicha = async (id) => {
        try {
            const res = await deleteFichaRequest(id);
            // console.log('Ficha eliminada:', id);
            window.alert("Ficha eliminada con éxito");
            if (res.status === 204)
                setFichas(fichas.filter((ficha) => ficha._id != id));
        } catch (error) {
            console.log(error);
        }
    };

    const getFicha = async (id) => {
        try {
            const res = await getFichaRequest(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    const updateFicha = async (id, ficha) => {
        try {
            await updateFichaRequest(id, ficha);
            window.alert("Postulación actualizada con éxito");
        } catch (error) {
            console.log(error);
            window.alert("Error al actualizar ficha");
        }
    };

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
