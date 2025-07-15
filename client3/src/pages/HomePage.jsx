
import { useEffect, useState } from "react";
import { useTask } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import { useNavigate } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";


function HomePage() {
  const navigate = useNavigate();
  const [activo, setActivo] = useState(0);

  const secciones = [
    {
      titulo: "Sobre la entidad organizadora",
      contenido: (
        <>

          El concurso SoMoS LAC 2025 es impulsado por <strong> Euroclima </strong>, un programa de cooperación internacional
          financiado por la <strong>Unión Europea (UE) y el Ministerio Federal de Cooperación Económica y Desarrollo de Alemania (BMZ)
            en marco de la Agenda Global Gateway (GGA)</strong>. Su objetivo es apoyar a los países de América Latina y el Caribe
          en la lucha contra el cambio climático, promoviendo la mitigación, adaptación, resiliencia e inversión climática en la región.
          Desde 2023, Euroclima abarca a 33 países.


          <div className="my-4">
            En el sector de <strong>movilidad urbana</strong>, Euroclima trabaja desde 2016 a través de la <strong>GIZ (Cooperación Alemana para el Desarrollo)</strong>
            y la <strong>AFD (Agencia Francesa de Desarrollo)</strong>, apoyando numerosos proyectos en países latinoamericanos.
            Estos proyectos promueven una movilidad sostenible con un enfoque integral, inclusivo y climático.

          </div>
          <div className="my-4">
            En este sentido, Euroclima impulsa la Comunidad de Práctica <strong>SoMoS LAC Movilidad Sostenible</strong>, cuya misión es conectar a una
            En este sentido, Euroclima impulsa la Comunidad de Práctica SoMoS LAC Movilidad Sostenible, cuya misión es conectar a una
            red de actores públicos, privados y de la sociedad civil, facilitando el diálogo y la colaboración para impulsar liderazgos,
            políticas y acciones orientadas a mejorar los sistemas de movilidad en la región de forma sostenible.
            SoMoS LAC se estructura en grupos temáticos que ofrecen espacios dinámicos para propiciar aprendizajes y acciones colaborativas,
            siendo uno de ellos el grupo temático de <strong>Género, Equidad e Inclusión en los Sistemas de Movilidad</strong>, liderado por el Ministerio de Transporte, quien promueve el presente concurso como parte de su plan de acción.
            el Ministerio de Transporte, quien promueve el presente concurso como parte de su plan de acción.

          </div>
        </>
      )
    },
    {
      titulo: "Propósito del Reconocimiento SoMoS LAC",
      contenido: (
        <>
          <div>

            El propósito del concurso es: Reconocer, visibilizar y promover iniciativas innovadoras en favor de la equidad e inclusión de género
            en la movilidad urbana, en América Latina y El Caribe. Se evaluarán mejor aquellas iniciativas con mayor impacto sobre la equidad
            e inclusión y potencial de replicabilidad y sostenibilidad en el tiempo.

            <h1 className="my-4">
              Este concurso está dirigido a instituciones públicas, empresas privadas, organizaciones de la sociedad civil y entidades académicas
              que lideren este tipo de iniciativas.
            </h1>
          </div>
        </>
      )
    },
    {
      titulo: "Categoría de postulación",
      contenido: (
        <>
          <div className="mb-4">El concurso contempla dos categorías:</div>
          <div>
            <h3><strong>Instituciones públicas y Empresas privadas:</strong></h3>

            Orientada a instituciones públicas, privadas y/o sociedades de capital mixto responsables de la regulación del transporte urbano, así como a operadores de transporte, que hayan implementado iniciativas concretas para superar brechas de género en la movilidad urbana. Se valorarán acciones que promuevan la igualdad de oportunidades, la participación de las mujeres en el sector, la mejora de condiciones laborales con enfoque de género, o el diseño e implementación de servicios más seguros, accesibles e inclusivos.

          </div>
          <div className="my-4">
          </div>
          <div>
            <h3><strong>Organizaciones de la sociedad civil y Entidades académicas:</strong></h3>

            Dirigida a organizaciones de la sociedad civil y entidades académicas que hayan desarrollado investigaciones, proyectos piloto, campañas, metodologías o programas de formación que promuevan la equidad de género en el ámbito de la movilidad urbana. Se priorizarán aquellas propuestas que hayan generado aprendizajes valiosos, incidencia en políticas públicas, articulación intersectorial o que tengan potencial de escalabilidad y réplica en otros contextos urbanos.

          </div>
        </>
      ),
    },
    {
      titulo: "Requisitos de postulación y exclusiones",
      contenido: (<>
        <div className=" text-sm space-y-3 p-2">
          <div>
            <h3 ><strong>Categoría Instituciones públicas y Empresas privadas</strong></h3>
            <ul className="list-disc list-inside">
              <li>La iniciativa debe haber sido implementada en al menos una ciudad latinoamericana o caribeña.</li>
              <li>La organización postulante puede ser una institución pública y/o privada.</li>
              <li>La iniciativa debe haber comenzado su implementación entre el 1 de enero de 2021 y hasta un año antes de la fecha de postulación.</li>
              <li>La organización debe estar legalmente constituida y operativa.</li>
              <li>No podrán postular iniciativas que estén participando en el concurso Mujeres en Ruta 2025, en cualquiera de sus ciudades.</li>
              <li>No podrán participar instituciones que hayan participado directamente en la preparación o ejecución de este concurso.</li>
            </ul>
          </div>

          <div className="my-4">
            <h3><strong>Categoría Organizaciones de la sociedad civil y Entidades académicas</strong></h3>
            <ul className="list-disc list-inside">
              <li>La iniciativa debe referirse a experiencias o análisis aplicados a una ciudad latinoamericana o caribeña o haber sido desarrollada para un país que se encuentre en dichas regiones.</li>
              <li>La organización postulante puede ser académica o de la sociedad civil.</li>
              <li>La iniciativa debe haber sido publicada entre el 1 de enero de 2021 y hasta la fecha de postulación.</li>
              <li>La organización debe estar legalmente constituida y operativa.</li>
              <li>No podrán postular iniciativas que estén participando en el concurso Mujeres en Ruta 2025, en cualquiera de sus ciudades.</li>
              <li>No podrán participar instituciones que hayan participado directamente en la preparación o ejecución de este concurso.</li>
            </ul>
          </div>
        </div>

      </>)
    },
    {
      titulo: "Postulación",
      contenido: (
        <>
          <ul>
            <li>SoMoS LAC llevará a cabo un llamado público que se difundirá por distintos medios además de contactar a los responsables de las más de ochenta iniciativas que ya han sido identificadas en el marco del trabajo sobre “Mapeo de iniciativas de género e inclusión” de Somos LAC.</li>
            <li>Las postulaciones se realizarán exclusivamente a través de un formulario electrónico en línea.</li>
            <li>Se deberá adjuntar una carta firmada por una autoridad de alta dirección de la institución, autorizando la postulación y el uso de información y de su logo.</li>
          </ul>
        </>
      ),
    },
    {
      titulo: "Evaluación y Jurado",
      contenido: (
        <>
          <div>

            <h1>Se evaluarán las postulaciones considerando los siguientes criterios:</h1>

            <div>
              <h3 className="font-bold text-base mb-2">Categoría Instituciones públicas y Empresas privadas</h3>

              <div className=" text-sm space-y-2 pl-6">
                <div className="flex gap-2">
                  <span className="font-bold text-lg w-12">30%</span>
                  <div>
                    <strong>Innovación</strong>
                    <h3>Soluciones creativas frente a barreras de género en la operación o gestión del transporte</h3>
                    <hr className="w-sm"/>

                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-lg w-12">30%</span>
                  <div>
                    <strong>Impacto</strong>
                    <h3>Cambios positivos en inclusión, seguridad, participación o empleabilidad de mujeres</h3>
                    <hr className="w-sm"/>

                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-lg w-12">10%</span>
                  <div>
                    <strong>Replicabilidad</strong>
                    <h3>Potencial para ser aplicada en otras ciudades o empresas del sector</h3>
                    <hr className="w-sm" />

                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-lg w-12">10%</span>
                  <div>
                    <strong>Sostenibilidad</strong>
                    <h3>Capacidad de mantenerse en el tiempo dentro de la estructura organizacional</h3>
                    <hr className="w-sm"/>

                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-lg w-12">20%</span>
                  <div>
                    <strong>Evidencia</strong>
                    <h3>Existencia de datos, documentación o resultados concretos</h3>
                    <hr className="w-sm"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <strong className="my-4">Categoría Organizaciones de la sociedad civil y Entidades académicas</strong>
              <div className="text-sm space-y-3 pl-6">
                <div className="flex gap-4">
                  <span className="font-bold text-lg w-12">30%</span>
                  <div>
                    <strong>Innovación</strong>
                    <h3>Nuevos enfoques, herramientas o investigaciones que aborden desigualdades de género</h3>
                    <hr className="w-sm"/>

                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-lg w-12">30%</span>
                  <div>
                    <strong>Impacto</strong>
                    <h3>Resultados generados en sensibilización, incidencia o generación de conocimiento aplicado</h3>
                    <hr className="w-sm" />

                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-lg w-12">10%</span>
                  <div>
                    <strong>Replicabilidad</strong>
                    <h3>Potencial para escalar o transferir el conocimiento o metodología</h3>
                    <hr className="w-sm"/>

                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-lg w-12">10%</span>
                  <div>
                    <strong>Sostenibilidad</strong>
                    <h3>Continuidad del trabajo en el tiempo más allá del proyecto específico</h3>
                    <hr className="w-sm"/>

                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-lg w-12">20%</span>
                  <div>
                    <strong>Evidencia</strong>
                    <h3>Documentación, publicaciones o datos que respalden los resultados obtenidos</h3>
                    <hr className="w-sm"/>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </>
      )
    },
    {
      titulo: "Fechas del concurso",
      contenido: `La convocatoria se abre el 15 de julio y cierra el 15 de agosto...`,
    },
    {
      titulo: "Premiación",
      contenido: `Las tres iniciativas mejor evaluadas de cada categoría serán reconocidas con primer, segundo y mención honrosa.
          La ceremonia de premiación se realizará en un evento internacional en Bogotá que tendrá lugar en septiembre de 2025 y que será coproducido con junto el Observatorio Latinoamericano de Género y Movilidad y en cuya oportunidad se premiará a los ganadores del concurso Mujeres en Ruta organizado por dicha institución. Durante el evento se desarrollarán además actividades técnicas, visitas, y espacios de intercambio entre las organizaciones seleccionadas.
          SoMoS LAC cubrirá los gastos de viaje y estadía de un representante de cada una de las instituciones ganadoras de los primero y segundo lugar de las dos categorías.`,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* ENCABEZADO VISUAL */}
      <div className="relative w-full">
        <img
          src="/micro.svg"
          alt="Banner principal"
          className="w-full h-auto object-cover"
        />
        {/* <div className="absolute inset-0 flex flex-col items-start pl-35 pt-25 z-10 space-y-2">
          <p className="text-xs md:text-sm font-medium text-[#5A478D]">concurso</p>
          <div className="bg-[#F8991D] text-white inline-block px-2 py-1 text-xs md:text-sm font-bold rounded-sm mb-2">
            ¡Postula tu Iniciativa!
          </div>

          <h2 className="text-base md:text-lg lg:text-xl font-extrabold text-[#3C3270] mb-1">
            RUMBO A LA EQUIDAD:
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-[#5A478D] leading-tight">
            Reconociendo iniciativas innovadoras en favor de la <br />
            equidad de género en movilidad urbana
          </p>
        </div> */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-24 md:h-24 text-white flex items-center justify-center z-20">
          <img
            src="/fecha.svg"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-6 gap-6 max-w-6xl mx-auto my-4">
        {/* Menú lateral */}
        <div className="w-full md:w-1/3">
          {secciones.map((sec, i) => (
            <button
              key={i}
              className={`w-full text-left  font-semibold text-l px-4 py-3 mb-2 rounded-xl  transition ${activo === i
                ? "bg-white border border-[#a49fc4] text-[#5d5593] hover:bg-gray-100"
                : "bg-transparent  hover:bg-gray-100 "
                }`}
              onClick={() => setActivo(i)}
            >
              {sec.titulo}
            </button>
          ))}
        </div>

        {/* Contenido de la sección */}
        <div className="w-full md:w-2/3 bg-white px-6 rounded  ">
          <h2 className="text-2xl font-bold mb-4">{secciones[activo].titulo}</h2>
          <h2 className="text-sm whitespace-pre-line">{secciones[activo].contenido}</h2>
        </div>
      </div>

      {/* BOTONES DE ACCIÓN */}
      <div className="container flex flex-col md:flex-row justify-end-safe gap-4 py-10">
        <button
          onClick={() => navigate('/nueva-ficha')}
          className="bg-[#5d5593] text-white px-4 py-2 rounded-xl hover:bg-[#a49fc4]">
          Comenzar postulación
        </button>
        <button
          className="border border-[#5d5593] text-[#5d5593] px-4 py-2 rounded-xl hover:bg-[#a49fc4] flex items-center justify-center">
          Descargar bases
          <MdOutlineFileDownload className="text-2xl m-1 mb-1 ml-2 inline" />
        </button>
      </div>
    </div>
  );


  // const {getTasks, tasks} = useTask();


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