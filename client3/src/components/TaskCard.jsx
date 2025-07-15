import { Link } from "react-router-dom";
import { useTask } from "../context/TasksContext";
import { useAuth } from "../context/AuthContext"


function TaskCard({ task }) {

    const { deleteTask } = useTask();
    const { isAuthenticated, logout, user } = useAuth();


    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{task.nombre_iniciativa}</h1>

            </header>
            <p className="text-slate-300">{task.objetivo_iniciativa}</p>
            <h1>{task.institucion_encargada}</h1>
            <h1>{task.pais}</h1>
            <div className="flex gap-x-2 place-content-end-safe ">
                {isAuthenticated ? (
                    <>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                            onClick={() => {
                                deleteTask(task._id);
                            }}
                        >
                            eliminar
                        </button>

                        <Link
                            to={`/tasks/${task._id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                        >
                            editar
                        </Link>
                    </>) : (
                    <></>
                )}
            </div>

        </div>)
}

export default TaskCard