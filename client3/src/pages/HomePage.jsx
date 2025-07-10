
import { useEffect } from "react";
import { useTask } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import { useNavigate } from "react-router-dom";


function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* ENCABEZADO VISUAL */}
      <div className="relative w-full">
        <img
          src="/micro.svg"
          alt="Banner principal"
          className="w-full h-auto object-cover"
        />

        {/* Logo “¡Participa!” superpuesto */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 w-24 h-24 md:w-32 md:h-32 bg-purple-800 text-white rounded-full flex flex-col items-center text-center shadow-md">
          <img
            src="/fecha.svg"
            alt="Logo ¡Participa!"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* MENÚ IZQUIERDA */}
        <div className="md:col-span-1 space-y-2">
          {[
            "Sobre la entidad organizadora",
            "Propósito del Reconocimiento SoMoS LAC",
            "Categoría del reconocimiento",
            "Requisitos de postulación y exclusiones",
            "Evaluación y Jurado",
            "Fechas del concurso",
            "Premiación"
          ].map((item, index) => (
            <button
              key={index}
              className="w-full text-left px-4 py-2 rounded-md border border-purple-300 text-purple-700 hover:bg-purple-100 transition"
            >
              {item}
            </button>
          ))}
        </div>

        {/* TEXTO DERECHA */}
        <div className="md:col-span-3">
          <h2 className="text-lg font-bold mb-4 text-purple-800">
            Sobre la entidad organizadora
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            El concurso SoMoS LAC 2025 es impulsado por Euroclima, un programa
            de cooperación internacional financiado por la Unión Europea (UE) y
            el Ministerio Federal de Cooperación Económica y Desarrollo de
            Alemania (BMZ) en el marco de la Agenda Global Gateway (GGA). Su
            objetivo es apoyar a los países de América Latina y el Caribe en la
            lucha contra el cambio climático...
            {/* Puedes continuar o dividir esto en secciones */}
          </p>
        </div>
      </div>

      {/* BOTONES DE ACCIÓN */}
      <div className="flex flex-col md:flex-row justify-center gap-4 py-10">
        <button
          onClick={() => navigate('/nueva-ficha')}
          className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]">
          Comenzar postulación
        </button>
        <button
          className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]">
          Descargar bases
        </button>
      </div>
    </div>
  );


  // const { getTasks, tasks } = useTask();


  // useEffect(() => {
  //   getTasks() 
  // }, []);

  // if (tasks.length == 0) return (<h1> No Tasks </h1>);

  // return (

  //   <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
  //     {tasks.map((task) => (
  //       <TaskCard task={task} key={task._id} />
  //     ))}
  //   </div>
  // );
}

export default HomePage