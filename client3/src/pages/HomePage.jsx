
import { useEffect } from "react";
import { useTask } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import { useNavigate } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";


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
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 grid grid-cols-12 md:grid-cols-4 gap-6 content-center">
        {/* MENÚ IZQUIERDA */}
        <div className="col-span-start-2 col-span-end-6 space-y-2">
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
              className="w-full text-left px-4 py-2 rounded-md hover:border-[#5d5593] hover:border  transition"
            >
              {item}
            </button>
          ))}
        </div>

        {/* TEXTO DERECHA */}
        <div className="md:col-span-3">
          <h2 className="text-xl font-bold mb-4">
            Sobre la entidad organizadora
          </h2>
          <p className=" text-sm leading-relaxed ">
            El concurso SoMoS LAC 2025 es impulsado por Euroclima, un programa de cooperación
            internacional financiado por la Unión Europea (UE) y el Ministerio Federal de Cooperación
            Económica y Desarrollo de Alemania (BMZ) en marco de la Agenda Global Gateway (GGA).
            Su objetivo es apoyar a los países de América Latina y el Caribe en la lucha contra el cambio
            climático, promoviendo la mitigación, adaptación, resiliencia e inversión climática en la
            región. Desde 2023, Euroclima abarca a 33 países.
          </p>

          <p className=" text-sm leading-relaxed ">

            En el sector de movilidad urbana, Euroclima trabaja desde 2016 a través de la GIZ
            (Cooperación Alemana para el Desarrollo) y la AFD (Agencia Francesa de Desarrollo),
            apoyando numerosos proyectos en países latinoamericanos. Estos proyectos promueven una
            movilidad sostenible con un enfoque integral, inclusivo y climático.

          </p>
          <p className=" text-sm leading-relaxed ">

            En este sentido, Euroclima impulsa la Comunidad de Práctica SoMoS LAC Movilidad
            Sostenible, cuya misión es conectar a una red de actores públicos, privados y de la sociedad
            civil, facilitando el diálogo y la colaboración para impulsar liderazgos, políticas y acciones
            orientadas a mejorar los sistemas de movilidad en la región de forma sostenible. SoMoS LAC
            se estructura en grupos temáticos que ofrecen espacios dinámicos para propiciar
            aprendizajes y acciones colaborativas, siendo uno de ellos el grupo temático de Género,
            Equidad e Inclusión en los Sistemas de Movilidad, liderado por el Ministerio de Transporte,
            quien promueve el presente concurso como parte de su plan de acción.
            {/* Puedes continuar o dividir esto en secciones */}
          </p>
        </div>
      </div>

      {/* BOTONES DE ACCIÓN */}
      <div className="flex flex-col md:flex-row justify-center gap-4 py-10">
        <button
          onClick={() => navigate('/nueva-ficha')}
          className="bg-[#5d5593] text-white px-4 py-2 rounded-xl hover:bg-[#a49fc4]">
          Comenzar postulación
        </button>
        <button
          className="border border-[#5d5593] text-[#5d5593] px-4 py-2 rounded-xl hover:bg-[#a49fc4]">

          Descargar bases
          <MdOutlineFileDownload className="text-2xl m-1 mb-1 inline" />

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