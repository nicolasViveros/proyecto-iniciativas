import { useForm } from "react-hook-form"
import { useTask } from "../context/TasksContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTask();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setValue('nombre_iniciativa', task.nombre_iniciativa)
        setValue('objetivo_iniciativa', task.objetivo_iniciativa)
        setValue('institucion_encargada', task.institucion_encargada)
        setValue('pais', task.pais)
      }
    }
    loadTask()
  }, [])

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data);
    }
    navigate('/tasks');
  });
  return (
    
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">

      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
   
      <h1 className="text-3xl text-center font-bold my-10 ">Ingresa tu iniciativa</h1>

        <form onSubmit={onSubmit}>
          <label htmlFor="nombre_iniciativa">Nombre Iniciativa</label>

          <input type="text" placeholder="Nombre iniciativa"
            {...register("nombre_iniciativa")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />

          <label htmlFor="objetivo_iniciativa">Objetivo Iniciativa</label>

          <textarea rows="3" placeholder="Objetivo iniciativa"
            {...register("objetivo_iniciativa")}
            className="w-full bg-zinc-700 text white px-4 py-2 rounded-md my-2"
          ></textarea>

          <label htmlFor="institucion_encargada">Institución Encargada</label>

          <input type="text" placeholder="Institución encargada"
            {...register("institucion_encargada")}
            className="w-full bg-zinc-700 text white px-4 py-2 rounded-md my-2"
          />

          <label htmlFor="pais">Pais</label>
          <input type="text" placeholder="Pais"
            {...register("pais")}
            className="w-full bg-zinc-700 text white px-4 py-2 rounded-md my-2"

          />

          <button className="bg-indigo-500 hover:bg-indigo-600 px-3 py-2 rounded-md">Guardar</button>
          
          <Link to="/tasks" className="hover:text-red-400 px-4 py-2">volver</Link>
        </form>
      </div>
    </div>
  )
}

export default TaskFormPage