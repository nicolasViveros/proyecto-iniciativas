import { createContext, useContext, useState } from "react";
import {createFichaRequest} from "../api/fichas";

const FichaContext = createContext();


export const useFichas = () => {
    const context = useContext(FichaContext);

    if (!context) {
        throw new Error("useFichas must be used within a FichaProvider");
    }
    return context;
}

export function FichaProvider({ children }) {
    const [fichas, setFichas] = useState([]);

    const getTasks = async () => {
        try {
            const res = await getTasksRequest();
            setTasks(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    const createFicha = async (ficha) => {

        const res = await createFichaRequest(ficha)
        console.log(res)
    }

    const deleteTask = async (id) => {
        try {
            const res = await deleteTasksRequest(id);
            console.log(res);
            if (res.status === 204) setTasks(tasks.filter(task => task._id != id))
        } catch (error) {
            console.log(error);
        }
    };

    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id);
        return (res.data)
        } catch (error) {
            console.log(error)
        } 
    };

const updateTask = async (id, task) => {
 try {
    await updateTasksRequest(id,task);
 } catch (error) {
    console.log(error);
 }
}

    return (
        <FichaContext.Provider
            value={{
                tasks,
                createFicha,
                getTasks,
                deleteTask,
                getTask,
                updateTask,
            }}
        >
            {children}
        </FichaContext.Provider>
    );
}
