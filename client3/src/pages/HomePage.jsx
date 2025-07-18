// import { useState } from "react";
// import TaskCard from "../components/TaskCard";
// import { useNavigate } from "react-router-dom";
// import { MdOutlineFileDownload } from "react-icons/md";

// function HomePage() {
//   const navigate = useNavigate();
//   const [activo, setActivo] = useState(0);

//   const secciones = [
//     {
//       titulo: "Sobre la entidad organizadora",
//       contenido: (
//         <>
//           El concurso SoMoS LAC 2025 es impulsado por{" "}
//           <strong> Euroclima </strong>, un programa de cooperación internacional
//           financiado por la{" "}
//           <strong>
//             Unión Europea (UE) y el Ministerio Federal de Cooperación Económica
//             y Desarrollo de Alemania (BMZ) en marco de la Agenda Global Gateway
//             (GGA)
//           </strong>
//           . Su objetivo es apoyar a los países de América Latina y el Caribe en
//           la lucha contra el cambio climático, promoviendo la mitigación,
//           adaptación, resiliencia e inversión climática en la región. Desde
//           2023, Euroclima abarca a 33 países.
//           <div className="my-4">
//             En el sector de <strong>movilidad urbana</strong>, Euroclima trabaja
//             desde 2016 a través de la{" "}
//             <strong>GIZ (Cooperación Alemana para el Desarrollo)</strong>y la{" "}
//             <strong>AFD (Agencia Francesa de Desarrollo)</strong>, apoyando
//             numerosos proyectos en países latinoamericanos. Estos proyectos
//             promueven una movilidad sostenible con un enfoque integral,
//             inclusivo y climático.
//           </div>
//           <div className="my-4">
//             En este sentido, Euroclima impulsa la Comunidad de Práctica{" "}
//             <strong>SoMoS LAC Movilidad Sostenible</strong>, cuya misión es
//             conectar a una En este sentido, Euroclima impulsa la Comunidad de
//             Práctica SoMoS LAC Movilidad Sostenible, cuya misión es conectar a
//             una red de actores públicos, privados y de la sociedad civil,
//             facilitando el diálogo y la colaboración para impulsar liderazgos,
//             políticas y acciones orientadas a mejorar los sistemas de movilidad
//             en la región de forma sostenible. SoMoS LAC se estructura en grupos
//             temáticos que ofrecen espacios dinámicos para propiciar aprendizajes
//             y acciones colaborativas, siendo uno de ellos el grupo temático de{" "}
//             <strong>
//               Género, Equidad e Inclusión en los Sistemas de Movilidad
//             </strong>
//             , liderado por el Ministerio de Transporte, quien promueve el
//             presente concurso como parte de su plan de acción. el Ministerio de
//             Transporte, quien promueve el presente concurso como parte de su
//             plan de acción.
//           </div>
//         </>
//       ),
//     },
//     {
//       titulo: "Propósito del Reconocimiento SoMoS LAC",
//       contenido: (
//         <>
//           <div>
//             El propósito del concurso es: Reconocer, visibilizar y promover
//             iniciativas innovadoras en favor de la equidad e inclusión de género
//             en la movilidad urbana, en América Latina y El Caribe. Se evaluarán
//             mejor aquellas iniciativas con mayor impacto sobre la equidad e
//             inclusión y potencial de replicabilidad y sostenibilidad en el
//             tiempo.
//             <h1 className="my-4">
//               Este concurso está dirigido a instituciones públicas, empresas
//               privadas, organizaciones de la sociedad civil y entidades
//               académicas que lideren este tipo de iniciativas.
//             </h1>
//           </div>
//         </>
//       ),
//     },
//     {
//       titulo: "Categoría de postulación",
//       contenido: (
//         <>
//           <div className="mb-4">El concurso contempla dos categorías:</div>
//           <div>
//             <h3>
//               <strong>Instituciones públicas y Empresas privadas:</strong>
//             </h3>
//             Orientada a instituciones públicas, privadas y/o sociedades de
//             capital mixto responsables de la regulación del transporte urbano,
//             así como a operadores de transporte, que hayan implementado
//             iniciativas concretas para superar brechas de género en la movilidad
//             urbana. Se valorarán acciones que promuevan la igualdad de
//             oportunidades, la participación de las mujeres en el sector, la
//             mejora de condiciones laborales con enfoque de género, o el diseño e
//             implementación de servicios más seguros, accesibles e inclusivos.
//           </div>
//           <div className="my-4"></div>
//           <div>
//             <h3>
//               <strong>
//                 Organizaciones de la sociedad civil y Entidades académicas:
//               </strong>
//             </h3>
//             Dirigida a organizaciones de la sociedad civil y entidades
//             académicas que hayan desarrollado investigaciones, proyectos piloto,
//             campañas, metodologías o programas de formación que promuevan la
//             equidad de género en el ámbito de la movilidad urbana. Se
//             priorizarán aquellas propuestas que hayan generado aprendizajes
//             valiosos, incidencia en políticas públicas, articulación
//             intersectorial o que tengan potencial de escalabilidad y réplica en
//             otros contextos urbanos.
//           </div>
//         </>
//       ),
//     },
//     {
//       titulo: "Requisitos de postulación y exclusiones",
//       contenido: (
//         <>
//           <div className=" text-sm space-y-3 p-2">
//             <div>
//               <h3>
//                 <strong>
//                   Categoría Instituciones públicas y Empresas privadas
//                 </strong>
//               </h3>
//               <ul className="list-disc list-inside">
//                 <li>
//                   La iniciativa debe haber sido implementada en al menos una
//                   ciudad latinoamericana o caribeña.
//                 </li>
//                 <li>
//                   La organización postulante puede ser una institución pública
//                   y/o privada.
//                 </li>
//                 <li>
//                   La iniciativa debe haber comenzado su implementación entre el
//                   1 de enero de 2021 y hasta un año antes de la fecha de
//                   postulación.
//                 </li>
//                 <li>
//                   La organización debe estar legalmente constituida y operativa.
//                 </li>
//                 <li>
//                   No podrán postular iniciativas que estén participando en el
//                   concurso Mujeres en Ruta 2025, en cualquiera de sus ciudades.
//                 </li>
//                 <li>
//                   No podrán participar instituciones que hayan participado
//                   directamente en la preparación o ejecución de este concurso.
//                 </li>
//               </ul>
//             </div>

//             <div className="my-4">
//               <h3>
//                 <strong>
//                   Categoría Organizaciones de la sociedad civil y Entidades
//                   académicas
//                 </strong>
//               </h3>
//               <ul className="list-disc list-inside">
//                 <li>
//                   La iniciativa debe referirse a experiencias o análisis
//                   aplicados a una ciudad latinoamericana o caribeña o haber sido
//                   desarrollada para un país que se encuentre en dichas regiones.
//                 </li>
//                 <li>
//                   La organización postulante puede ser académica o de la
//                   sociedad civil.
//                 </li>
//                 <li>
//                   La iniciativa debe haber sido publicada entre el 1 de enero de
//                   2021 y hasta la fecha de postulación.
//                 </li>
//                 <li>
//                   La organización debe estar legalmente constituida y operativa.
//                 </li>
//                 <li>
//                   No podrán postular iniciativas que estén participando en el
//                   concurso Mujeres en Ruta 2025, en cualquiera de sus ciudades.
//                 </li>
//                 <li>
//                   No podrán participar instituciones que hayan participado
//                   directamente en la preparación o ejecución de este concurso.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </>
//       ),
//     },
//     {
//       titulo: "Postulación",
//       contenido: (
//         <>
//           <ul className="list-disc list-inside">
//             <li>
//               SoMoS LAC llevará a cabo un llamado público que se difundirá por
//               distintos medios además de contactar a los responsables de las más
//               de ochenta iniciativas que ya han sido identificadas en el marco
//               del trabajo sobre “Mapeo de iniciativas de género e inclusión” de
//               Somos LAC.
//             </li>
//             <li>
//               Las postulaciones se realizarán exclusivamente a través de un
//               formulario electrónico en línea.
//             </li>
//             <li>
//               Se deberá adjuntar una carta firmada por una autoridad de alta
//               dirección de la institución, autorizando la postulación y el uso
//               de información y de su logo.
//             </li>
//           </ul>
//         </>
//       ),
//     },
//     {
//       titulo: "Evaluación y Jurado",
//       contenido: (
//         <>
//           <div>
//             <h1>
//               Se evaluarán las postulaciones considerando los siguientes
//               criterios:
//             </h1>

//             <div>
//               <h3 className="font-bold text-base mb-2">
//                 Categoría Instituciones públicas y Empresas privadas
//               </h3>

//               <div className="text-sm pl-6">
//                 <div className="flex gap-4 border-b border-[#D9D6E1]">
//                   <span className="font-bold text-lg w-12 p-3">30%</span>
//                   <div>
//                     <strong>Innovación</strong>
//                     <h3>
//                       Soluciones creativas frente a barreras de género en la
//                       operación o gestión del transporte
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="flex gap-4 border-b border-[#D9D6E1]">
//                   <span className="font-bold text-lg w-12 p-3">30%</span>
//                   <div>
//                     <strong>Impacto</strong>
//                     <h3>
//                       Cambios positivos en inclusión, seguridad, participación o
//                       empleabilidad de mujeres
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="flex gap-4 border-b border-[#D9D6E1]">
//                   <span className="font-bold text-lg w-12 p-3">10%</span>
//                   <div>
//                     <strong>Replicabilidad</strong>
//                     <h3>
//                       Potencial para ser aplicada en otras ciudades o empresas
//                       del sector
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="flex gap-4 border-b border-[#D9D6E1]">
//                   <span className="font-bold text-lg w-12 p-3">10%</span>
//                   <div>
//                     <strong>Sostenibilidad</strong>
//                     <h3>
//                       Capacidad de mantenerse en el tiempo dentro de la
//                       estructura organizacional
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="flex gap-4 border-b border-[#D9D6E1]">
//                   <span className="font-bold text-lg w-12 p-3">20%</span>
//                   <div>
//                     <strong>Evidencia</strong>
//                     <h3>
//                       Existencia de datos, documentación o resultados concretos
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-4">
//               <h3 className="font-bold text-base mb-2">
//                 Categoría Organizaciones de la sociedad civil y Entidades
//                 académicas
//               </h3>

//               <div className="text-sm pl-6">
//                 <div className="flex gap-4 border-b border-[#D9D6E1]">
//                   <span className="font-bold text-lg w-12 p-3">30%</span>
//                   <div>
//                     <strong>Innovación</strong>
//                     <h3>
//                       Nuevos enfoques, herramientas o investigaciones que
//                       aborden desigualdades de género
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="flex gap-4 border-b border-[#D9D6E1]">
//                   <span className="font-bold text-lg w-12 p-3">30%</span>
//                   <div>
//                     <strong>Impacto</strong>
//                     <h3>
//                       Resultados generados en sensibilización, incidencia o
//                       generación de conocimiento aplicado
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="flex gap-4 border-b border-[#D9D6E1]">
//                   <span className="font-bold text-lg w-12 p-3">10%</span>
//                   <div>
//                     <strong>Replicabilidad</strong>
//                     <h3>
//                       Potencial para escalar o transferir el conocimiento o
//                       metodología
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="flex gap-4 border-b border-[#D9D6E1] ">
//                   <span className="font-bold text-lg w-12 p-3">10%</span>
//                   <div>
//                     <strong>Sostenibilidad</strong>
//                     <h3>
//                       Continuidad del trabajo en el tiempo más allá del proyecto
//                       específico
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="flex gap-4 border-b border-[#D9D6E1]">
//                   <span className="font-bold text-lg w-12 p-3">20%</span>
//                   <div>
//                     <strong>Evidencia</strong>
//                     <h3>
//                       Documentación, publicaciones o datos que respalden los
//                       resultados obtenidos
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       ),
//     },
//     {
//       titulo: "Fechas del concurso",
//       contenido: (
//         <>
//           <div className="text-[#5A478D] text-sm space-y-4 p-4">
//             <div className="space-y-2">
//               <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
//                 <span className="w-1/2">15 de julio</span>
//                 <span className="w-1/2 font-medium">
//                   Lanzamiento y apertura de postulaciones
//                 </span>
//               </div>
//               <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
//                 <span className="w-1/2">15 de agosto</span>
//                 <span className="w-1/2 font-medium">
//                   Cierre de postulaciones
//                 </span>
//               </div>
//               <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
//                 <span className="w-1/2">15 de septiembre</span>
//                 <span className="w-1/2 font-medium">
//                   Selección de ganadores
//                 </span>
//               </div>
//               <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
//                 <span className="w-1/2">13 y 14 de octubre</span>
//                 <span className="w-1/2 font-medium">
//                   Entrega de reconocimientos
//                 </span>
//               </div>
//             </div>

//             <h3 className="text-sm">
//               Las fechas serán publicadas vía mailing SoMoS LAC, sitio web del
//               OBGeM y en las redes de GIZ. Las convocatorias se realizarán vía
//               correo electrónico y se divulgarán por RRSS de las iniciativas
//               aliadas.
//             </h3>
//           </div>
//         </>
//       ),
//     },
//     {
//       titulo: "Premiación",
//       contenido: (
//         <>
//           {" "}
//           <div class=" text-sm space-y-4">
//             <h3>
//               Las tres iniciativas mejor evaluadas de cada categoría serán
//               reconocidas con primer, segundo y mención honrosa.
//             </h3>
//             <h3>
//               La ceremonia de premiación se realizará en un evento internacional
//               en Bogotá que tendrá lugar en septiembre de 2025 y que será
//               coproducido con junto el Observatorio Latinoamericano de Género y
//               Movilidad y en cuya oportunidad se premiará a los ganadores del
//               concurso Mujeres en Ruta organizado por dicha institución. Durante
//               el evento se desarrollarán además actividades técnicas, visitas, y
//               espacios de intercambio entre las organizaciones seleccionadas.
//             </h3>
//             <h3>
//               SoMoS LAC cubrirá los gastos de viaje y estadía de un
//               representante de cada una de las instituciones ganadoras de los
//               primero y segundo lugar de las dos categorías.
//             </h3>
//           </div>
//         </>
//       ),
//     },
//   ];

//   return (
//     <div className="w-full min-h-screen bg-white font-sans">
//       {/* ENCABEZADO VISUAL */}
//       <div className="relative w-full">
//         <img
//           src="/micro.svg"
//           alt="Banner principal"
//           className="w-full h-auto object-cover"
//         />
//         {/* <div className="absolute inset-0 flex flex-col items-start pl-35 pt-25 z-10 space-y-2">
//           <p className="text-xs md:text-sm font-medium text-[#5A478D]">concurso</p>
//           <div className="bg-[#F8991D] text-white inline-block px-2 py-1 text-xs md:text-sm font-bold rounded-sm mb-2">
//             ¡Postula tu Iniciativa!
//           </div>

//           <h2 className="text-base md:text-lg lg:text-xl font-extrabold text-[#3C3270] mb-1">
//             RUMBO A LA EQUIDAD:
//           </h2>
//           <p className="text-xs md:text-sm lg:text-base text-[#5A478D] leading-tight">
//             Reconociendo iniciativas innovadoras en favor de la <br />
//             equidad de género en movilidad urbana
//           </p>
//         </div> */}
//         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-24 md:h-24 text-white flex items-center justify-center z-20">
//           <img src="/fecha.svg" className="w-full h-auto" />
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row p-6 gap-6 max-w-6xl mx-auto my-4">
//         {/* Menú lateral */}
//         <div className="w-full md:w-1/3">
//           {secciones.map((sec, i) => (
//             <button
//               key={i}
//               className={`w-full text-left  font-semibold text-l px-4 py-3 mb-2 rounded-xl  transition ${
//                 activo === i
//                   ? "bg-white border border-[#a49fc4] text-[#5d5593] hover:bg-gray-100"
//                   : "bg-transparent  hover:bg-gray-100 "
//               }`}
//               onClick={() => setActivo(i)}
//             >
//               {sec.titulo}
//             </button>
//           ))}
//         </div>

//         {/* Contenido de la sección */}
//         <div className="w-full md:w-2/3 bg-white px-6 rounded  ">
//           <h2 className="text-2xl font-bold mb-4">
//             {secciones[activo].titulo}
//           </h2>
//           <h2 className="text-sm whitespace-pre-line">
//             {secciones[activo].contenido}
//           </h2>
//         </div>
//       </div>

//       {/* BOTONES DE ACCIÓN */}
//       <div className="container flex flex-col md:flex-row justify-end-safe gap-4 py-10">
//         <button
//           onClick={() => navigate("/nueva-ficha")}
//           className="bg-[#5d5593] text-white px-4 py-2 rounded-xl hover:bg-[#a49fc4]"
//         >
//           Comenzar postulación
//         </button>

//         <button
//           className="border border-[#5d5593] text-[#5d5593] px-4 py-2 rounded-xl hover:bg-[#a49fc4] flex items-center justify-center"
//           onClick={() => {
//             // Crea un enlace temporal para descargar el archivo y simula un clic en él
//             const link = document.createElement("a");
//             link.href = "/Bases.pdf"; // Asegúrate de que la ruta al archivo sea correcta
//             link.download = "Bases.pdf";
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//           }}
//         >
//           Descargar bases
//           <MdOutlineFileDownload className="text-2xl m-1 mb-1 ml-2 inline" />
//         </button>
//       </div>
//     </div>
//   );

//   // const {getTasks, tasks} = useTask();

//   // useEffect(() => {
//   //   getTasks()
//   // }, []);

//   // if (tasks.length == 0) return (<h1> No Tasks </h1>);

//   // return (

//   //   <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
//   //     {tasks.map((task) => (
//   //       <TaskCard task={task} key={task._id} />
//   //     ))}
//   //   </div>
//   // );
// }

// export default HomePage;

import { useState } from "react";
import TaskCard from "../components/TaskCard";
import { useNavigate } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { useLanguage } from "../context/LanguageContext";

function HomePage() {
  const navigate = useNavigate();
  const [activo, setActivo] = useState(0);
  const { language, toggleLanguage } = useLanguage();

  const secciones = [
    {
      titulo: {
        es: "Sobre la entidad organizadora",
        en: "About the Organizing Entity",
      },
      contenido: {
        es: (
          <>
            El concurso SoMoS LAC 2025 es impulsado por{" "}
            <strong>Euroclima</strong>, un programa de cooperación internacional
            financiado por la{" "}
            <strong>
              Unión Europea (UE) y el Ministerio Federal de Cooperación
              Económica y Desarrollo de Alemania (BMZ) en marco de la Agenda
              Global Gateway (GGA)
            </strong>
            . Su objetivo es apoyar a los países de América Latina y el Caribe
            en la lucha contra el cambio climático, promoviendo la mitigación,
            adaptación, resiliencia e inversión climática en la región. Desde
            2023, Euroclima abarca a 33 países.
            <div className="my-4">
              En el sector de <strong>movilidad urbana</strong>, Euroclima
              trabaja desde 2016 a través de la{" "}
              <strong>GIZ (Cooperación Alemana para el Desarrollo)</strong> y la{" "}
              <strong>AFD (Agencia Francesa de Desarrollo)</strong>, apoyando
              numerosos proyectos en países latinoamericanos. Estos proyectos
              promueven una movilidad sostenible con un enfoque integral,
              inclusivo y climático.
            </div>
            <div className="my-4">
              En este sentido, Euroclima impulsa la Comunidad de Práctica{" "}
              <strong>SoMoS LAC Movilidad Sostenible</strong>, cuya misión es
              conectar a una red de actores públicos, privados y de la sociedad
              civil, facilitando el diálogo y la colaboración para impulsar
              liderazgos, políticas y acciones orientadas a mejorar los sistemas
              de movilidad en la región de forma sostenible. SoMoS LAC se
              estructura en grupos temáticos que ofrecen espacios dinámicos para
              propiciar aprendizajes y acciones colaborativas, siendo uno de
              ellos el grupo temático de{" "}
              <strong>
                Género, Equidad e Inclusión en los Sistemas de Movilidad
              </strong>
              , liderado por el Ministerio de Transporte, quien promueve el
              presente concurso como parte de su plan de acción.
            </div>
          </>
        ),
        en: (
          <>
            The SoMoS LAC 2025 contest is driven by <strong>Euroclima</strong>,
            an international cooperation program funded by the{" "}
            <strong>
              European Union (EU) and the Federal Ministry of Economic
              Cooperation and Development of Germany (BMZ) under the Global
              Gateway Agenda (GGA)
            </strong>
            . Its objective is to support Latin American and Caribbean countries
            in fighting climate change by promoting mitigation, adaptation,
            resilience, and climate investment in the region. Since 2023,
            Euroclima includes 33 countries.
            <div className="my-4">
              In the <strong>urban mobility</strong> sector, Euroclima has
              worked since 2016 through{" "}
              <strong>GIZ (German Cooperation for Development)</strong> and{" "}
              <strong>AFD (French Development Agency)</strong>, supporting
              numerous projects in Latin American countries. These projects
              promote sustainable mobility with a comprehensive, inclusive, and
              climate-focused approach.
            </div>
            <div className="my-4">
              In this regard, Euroclima promotes the{" "}
              <strong>SoMoS LAC Sustainable Mobility</strong> Community of
              Practice, whose mission is to connect a network of public,
              private, and civil society actors, facilitating dialogue and
              collaboration to drive leadership, policies, and actions to
              improve mobility systems in the region sustainably. SoMoS LAC is
              structured in thematic groups that offer dynamic spaces to foster
              learning and collaborative actions, one being the thematic group
              on{" "}
              <strong>Gender, Equity, and Inclusion in Mobility Systems</strong>
              , led by the Ministry of Transport, which promotes this contest as
              part of its action plan.
            </div>
          </>
        ),
      },
    },
    {
      titulo: {
        es: "Propósito del Reconocimiento SoMoS LAC",
        en: "Purpose of the SoMoS LAC Acknowledgment",
      },
      contenido: {
        es: (
          <>
            El propósito del concurso es: Reconocer, visibilizar y promover
            iniciativas innovadoras en favor de la equidad e inclusión de género
            en la movilidad urbana, en América Latina y El Caribe. Se evaluarán
            mejor aquellas iniciativas con mayor impacto sobre la equidad e
            inclusión y potencial de replicabilidad y sostenibilidad en el
            tiempo.
            <h1 className="my-4">
              Este concurso está dirigido a instituciones públicas, empresas
              privadas, organizaciones de la sociedad civil y entidades
              académicas que lideren este tipo de iniciativas.
            </h1>
          </>
        ),
        en: (
          <>
            The purpose of the contest is to recognize, make visible, and
            promote innovative initiatives in favor of gender equity and
            inclusion in urban mobility in Latin America and the Caribbean.
            Initiatives with a greater impact on equity and inclusion and
            potential for replicability and sustainability over time will be
            better evaluated.
            <h1 className="my-4">
              This contest is aimed at public institutions, private companies,
              civil society organizations, and academic entities that lead such
              initiatives.
            </h1>
          </>
        ),
      },
    },
    {
      titulo: {
        es: "Categoría de postulación",
        en: "Application Category",
      },
      contenido: {
        es: (
          <>
            <div className="mb-4">El concurso contempla dos categorías:</div>
            <div>
              <h3>
                <strong>Instituciones públicas y Empresas privadas:</strong>
              </h3>
              Orientada a instituciones públicas, privadas y/o sociedades de
              capital mixto responsables de la regulación del transporte urbano,
              así como a operadores de transporte, que hayan implementado
              iniciativas concretas para superar brechas de género en la
              movilidad urbana. Se valorarán acciones que promuevan la igualdad
              de oportunidades, la participación de las mujeres en el sector, la
              mejora de condiciones laborales con enfoque de género, o el diseño
              e implementación de servicios más seguros, accesibles e
              inclusivos.
            </div>
            <div className="my-4"></div>
            <div>
              <h3>
                <strong>
                  Organizaciones de la sociedad civil y Entidades académicas:
                </strong>
              </h3>
              Dirigida a organizaciones de la sociedad civil y entidades
              académicas que hayan desarrollado investigaciones, proyectos
              piloto, campañas, metodologías o programas de formación que
              promuevan la equidad de género en el ámbito de la movilidad
              urbana. Se priorizarán aquellas propuestas que hayan generado
              aprendizajes valiosos, incidencia en políticas públicas,
              articulación intersectorial o que tengan potencial de
              escalabilidad y réplica en otros contextos urbanos.
            </div>
          </>
        ),
        en: (
          <>
            <div className="mb-4">The contest includes two categories:</div>
            <div>
              <h3>
                <strong>Public Institutions and Private Companies:</strong>
              </h3>
              Aimed at public, private, and/or mixed-capital companies
              responsible for urban transport regulation and transport operators
              that have implemented concrete initiatives to overcome gender gaps
              in urban mobility. Actions that promote equal opportunities,
              women's participation in the sector, improved working conditions
              with a gender focus, or the design and implementation of safer,
              more accessible, and inclusive services will be valued.
            </div>
            <div className="my-4"></div>
            <div>
              <h3>
                <strong>
                  Civil Society Organizations and Academic Entities:
                </strong>
              </h3>
              Targeted at civil society organizations and academic entities that
              have developed research, pilot projects, campaigns, methodologies,
              or training programs that promote gender equity in urban mobility.
              Proposals that have generated valuable learning, influenced public
              policy, intersectoral collaboration, or potential scalability and
              replication in other urban contexts will be prioritized.
            </div>
          </>
        ),
      },
    },
    {
      titulo: {
        es: "Requisitos de postulación y exclusiones",
        en: "Application Requirements and Exclusions",
      },
      contenido: {
        es: (
          <>
            <div className=" text-sm space-y-3 p-2">
              <div>
                <h3>
                  <strong>
                    Categoría Instituciones públicas y Empresas privadas
                  </strong>
                </h3>
                <ul className="list-disc list-inside">
                  <li>
                    La iniciativa debe haber sido implementada en al menos una
                    ciudad latinoamericana o caribeña.
                  </li>
                  <li>
                    La organización postulante puede ser una institución pública
                    y/o privada.
                  </li>
                  <li>
                    La iniciativa debe haber comenzado su implementación entre
                    el 1 de enero de 2021 y hasta un año antes de la fecha de
                    postulación.
                  </li>
                  <li>
                    La organización debe estar legalmente constituida y
                    operativa.
                  </li>
                  <li>
                    No podrán postular iniciativas que estén participando en el
                    concurso Mujeres en Ruta 2025, en cualquiera de sus
                    ciudades.
                  </li>
                  <li>
                    No podrán participar instituciones que hayan participado
                    directamente en la preparación o ejecución de este concurso.
                  </li>
                </ul>
              </div>

              <div className="my-4">
                <h3>
                  <strong>
                    Categoría Organizaciones de la sociedad civil y Entidades
                    académicas
                  </strong>
                </h3>
                <ul className="list-disc list-inside">
                  <li>
                    La iniciativa debe referirse a experiencias o análisis
                    aplicados a una ciudad latinoamericana o caribeña o haber
                    sido desarrollada para un país que se encuentre en dichas
                    regiones.
                  </li>
                  <li>
                    La organización postulante puede ser académica o de la
                    sociedad civil.
                  </li>
                  <li>
                    La iniciativa debe haber sido publicada entre el 1 de enero
                    de 2021 y hasta la fecha de postulación.
                  </li>
                  <li>
                    La organización debe estar legalmente constituida y
                    operativa.
                  </li>
                  <li>
                    No podrán postular iniciativas que estén participando en el
                    concurso Mujeres en Ruta 2025, en cualquiera de sus
                    ciudades.
                  </li>
                  <li>
                    No podrán participar instituciones que hayan participado
                    directamente en la preparación o ejecución de este concurso.
                  </li>
                </ul>
              </div>
            </div>
          </>
        ),
        en: (
          <>
            <div className=" text-sm space-y-3 p-2">
              <div>
                <h3>
                  <strong>
                    Category Public Institutions and Private Companies
                  </strong>
                </h3>
                <ul className="list-disc list-inside">
                  <li>
                    The initiative must have been implemented in at least one
                    Latin American or Caribbean city.
                  </li>
                  <li>
                    The applicant organization can be a public and/or private
                    institution.
                  </li>
                  <li>
                    The initiative must have started implementation between
                    January 1, 2021, and up to one year before the application
                    date.
                  </li>
                  <li>
                    The organization must be legally constituted and
                    operational.
                  </li>
                  <li>
                    Initiatives participating in the Mujeres en Ruta 2025
                    contest, in any of their cities, will not be eligible to
                    apply.
                  </li>
                  <li>
                    Institutions directly involved in the preparation or
                    execution of this contest may not participate.
                  </li>
                </ul>
              </div>

              <div className="my-4">
                <h3>
                  <strong>
                    Category Civil Society Organizations and Academic Entities
                  </strong>
                </h3>
                <ul className="list-disc list-inside">
                  <li>
                    The initiative must refer to experiences or analyses applied
                    to a Latin American or Caribbean city or have been developed
                    for a country in these regions.
                  </li>
                  <li>
                    The applicant organization can be academic or part of civil
                    society.
                  </li>
                  <li>
                    The initiative must have been published between January 1,
                    2021, and the application date.
                  </li>
                  <li>
                    The organization must be legally constituted and
                    operational.
                  </li>
                  <li>
                    Initiatives participating in the Mujeres en Ruta 2025
                    contest, in any of their cities, will not be eligible to
                    apply.
                  </li>
                  <li>
                    Institutions directly involved in the preparation or
                    execution of this contest may not participate.
                  </li>
                </ul>
              </div>
            </div>
          </>
        ),
      },
    },
    {
      titulo: {
        es: "Postulación",
        en: "Application",
      },
      contenido: {
        es: (
          <>
            <ul className="list-disc list-inside">
              <li>
                SoMoS LAC llevará a cabo un llamado público que se difundirá por
                distintos medios además de contactar a los responsables de las
                más de ochenta iniciativas que ya han sido identificadas en el
                marco del trabajo sobre “Mapeo de iniciativas de género e
                inclusión” de Somos LAC.
              </li>
              <li>
                Las postulaciones se realizarán exclusivamente a través de un
                formulario electrónico en línea.
              </li>
              <li>
                Se deberá adjuntar una carta firmada por una autoridad de alta
                dirección de la institución, autorizando la postulación y el uso
                de información y de su logo.
              </li>
            </ul>
          </>
        ),
        en: (
          <>
            <ul className="list-disc list-inside">
              <li>
                SoMoS LAC will make a public call that will be disseminated
                through various media, in addition to contacting the leaders of
                the more than eighty initiatives already identified as part of
                the "Mapping of gender and inclusion initiatives" by Somos LAC.
              </li>
              <li>
                Applications will be made exclusively through an online
                electronic form.
              </li>
              <li>
                A letter signed by a senior management authority of the
                institution must be attached, authorizing the application and
                the use of information and its logo.
              </li>
            </ul>
          </>
        ),
      },
    },
    {
      titulo: {
        es: "Evaluación y Jurado",
        en: "Evaluation and Jury",
      },
      contenido: {
        es: (
          <>
            <div>
              <h1>
                Se evaluarán las postulaciones considerando los siguientes
                criterios:
              </h1>

              <div>
                <h3 className="font-bold text-base mb-2">
                  Categoría Instituciones públicas y Empresas privadas
                </h3>

                <div className="text-sm pl-6">
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Innovación</strong>
                      <h3>
                        Soluciones creativas frente a barreras de género en la
                        operación o gestión del transporte
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Impacto</strong>
                      <h3>
                        Cambios positivos en inclusión, seguridad, participación
                        o empleabilidad de mujeres
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Replicabilidad</strong>
                      <h3>
                        Potencial para ser aplicada en otras ciudades o empresas
                        del sector
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Sostenibilidad</strong>
                      <h3>
                        Capacidad de mantenerse en el tiempo dentro de la
                        estructura organizacional
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">20%</span>
                    <div>
                      <strong>Evidencia</strong>
                      <h3>
                        Existencia de datos, documentación o resultados
                        concretos
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-bold text-base mb-2">
                  Categoría Organizaciones de la sociedad civil y Entidades
                  académicas
                </h3>

                <div className="text-sm pl-6">
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Innovación</strong>
                      <h3>
                        Nuevos enfoques, herramientas o investigaciones que
                        aborden desigualdades de género
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Impacto</strong>
                      <h3>
                        Resultados generados en sensibilización, incidencia o
                        generación de conocimiento aplicado
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Replicabilidad</strong>
                      <h3>
                        Potencial para escalar o transferir el conocimiento o
                        metodología
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1] ">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Sostenibilidad</strong>
                      <h3>
                        Continuidad del trabajo en el tiempo más allá del
                        proyecto específico
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">20%</span>
                    <div>
                      <strong>Evidencia</strong>
                      <h3>
                        Documentación, publicaciones o datos que respalden los
                        resultados obtenidos
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ),
        en: (
          <>
            <div>
              <h1>
                Applications will be evaluated considering the following
                criteria:
              </h1>

              <div>
                <h3 className="font-bold text-base mb-2">
                  Category Public Institutions and Private Companies
                </h3>

                <div className="text-sm pl-6">
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Innovation</strong>
                      <h3>
                        Creative solutions to gender barriers in the operation
                        or management of transport
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Impact</strong>
                      <h3>
                        Positive changes in inclusion, security, participation,
                        or employability of women
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Replicability</strong>
                      <h3>
                        Potential to be applied in other cities or sector
                        companies
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Sustainability</strong>
                      <h3>
                        Capacity to maintain over time within the organizational
                        structure
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">20%</span>
                    <div>
                      <strong>Evidence</strong>
                      <h3>
                        Existence of data, documentation or concrete results
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-bold text-base mb-2">
                  Category Civil Society Organizations and Academic Entities
                </h3>

                <div className="text-sm pl-6">
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Innovation</strong>
                      <h3>
                        New approaches, tools or research addressing gender
                        inequalities
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Impact</strong>
                      <h3>
                        Results generated in awareness, incidence, or applied
                        knowledge generation
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Replicability</strong>
                      <h3>
                        Potential to scale or transfer the knowledge or
                        methodology
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1] ">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Sustainability</strong>
                      <h3>
                        Continuity of the work over time beyond the specific
                        project
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">20%</span>
                    <div>
                      <strong>Evidence</strong>
                      <h3>
                        Documentation, publications or data supporting the
                        obtained results
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ),
      },
    },
    {
      titulo: {
        es: "Fechas del concurso",
        en: "Contest Dates",
      },
      contenido: {
        es: (
          <>
            <div className="text-[#5A478D] text-sm space-y-4 p-4">
              <div className="space-y-2">
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2">15 de julio</span>
                  <span className="w-1/2 font-medium">
                    Lanzamiento y apertura de postulaciones
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2">15 de agosto</span>
                  <span className="w-1/2 font-medium">
                    Cierre de postulaciones
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2">15 de septiembre</span>
                  <span className="w-1/2 font-medium">
                    Selección de ganadores
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2">13 y 14 de octubre</span>
                  <span className="w-1/2 font-medium">
                    Entrega de reconocimientos
                  </span>
                </div>
              </div>

              <h3 className="text-sm">
                Las fechas serán publicadas vía mailing SoMoS LAC, sitio web del
                OBGeM y en las redes de GIZ. Las convocatorias se realizarán vía
                correo electrónico y se divulgarán por RRSS de las iniciativas
                aliadas.
              </h3>
            </div>
          </>
        ),
        en: (
          <>
            <div className="text-[#5A478D] text-sm space-y-4 p-4">
              <div className="space-y-2">
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2">July 15</span>
                  <span className="w-1/2 font-medium">
                    Launch and opening of applications
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2">August 15</span>
                  <span className="w-1/2 font-medium">
                    Closing of applications
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2">September 15</span>
                  <span className="w-1/2 font-medium">Winner selection</span>
                </div>
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2">October 13 & 14</span>
                  <span className="w-1/2 font-medium">Awards presentation</span>
                </div>
              </div>

              <h3 className="text-sm">
                The dates will be published via SoMoS LAC mailing, OBGeM
                website, and GIZ networks. Calls will be sent by email and
                disseminated through the social networks of allied initiatives.
              </h3>
            </div>
          </>
        ),
      },
    },
    {
      titulo: {
        es: "Premiación",
        en: "Awarding",
      },
      contenido: {
        es: (
          <>
            {" "}
            <div className="text-sm space-y-4">
              <h3>
                Las tres iniciativas mejor evaluadas de cada categoría serán
                reconocidas con primer, segundo y mención honrosa.
              </h3>
              <h3>
                La ceremonia de premiación se realizará en un evento
                internacional en Bogotá que tendrá lugar en septiembre de 2025 y
                que será coproducido con junto el Observatorio Latinoamericano
                de Género y Movilidad y en cuya oportunidad se premiará a los
                ganadores del concurso Mujeres en Ruta organizado por dicha
                institución. Durante el evento se desarrollarán además
                actividades técnicas, visitas, y espacios de intercambio entre
                las organizaciones seleccionadas.
              </h3>
              <h3>
                SoMoS LAC cubrirá los gastos de viaje y estadía de un
                representante de cada una de las instituciones ganadoras de los
                primero y segundo lugar de las dos categorías.
              </h3>
            </div>
          </>
        ),
        en: (
          <>
            {" "}
            <div className="text-sm space-y-4">
              <h3>
                The top three evaluated initiatives from each category will be
                recognized with first, second, and honorable mention.
              </h3>
              <h3>
                The awarding ceremony will be held at an international event in
                Bogotá, scheduled for September 2025, coproduced with the Latin
                American Gender and Mobility Observatory, where winners of the
                Mujeres en Ruta contest organized by that institution will also
                be awarded. During the event, technical activities, visits, and
                exchange opportunities between selected organizations will also
                be conducted.
              </h3>
              <h3>
                SoMoS LAC will cover travel and accommodation expenses for one
                representative from each of the first and second-place winning
                institutions in both categories.
              </h3>
            </div>
          </>
        ),
      },
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div className="flex justify-end p-4">
        <button
          onClick={toggleLanguage}
          className="bg-[#5d5593] text-white px-4 py-2 rounded-xl hover:bg-[#a49fc4]"
        >
          {language === "es" ? "Switch to English" : "Cambiar a Español"}
        </button>
      </div>

      <div className="relative w-full">
        <img
          src="/micro.svg"
          alt="Banner principal"
          className="w-full h-auto object-cover hidden sm:block"
        />
        <img
          src="/ilustracion.png"
          alt="Banner mobile"
          className="w-full h-auto object-cover block sm:hidden"
        />
        <div className="absolute top-2/8 left-2/12 transform -traslate-x-3/12">
          <p className="text-2xl md:text-xl sm:text-base font-medium text-[#5A478D]">concurso</p>
          <div className="bg-[#e79953] text-3xl md:text-2xl sm:text-lg text-white inline-block px-2 py-1  font-bold rounded-sm mb-2">
            ¡Postula tu Iniciativa!
          </div>

          <h2 className="text-2xl md:text-xl sm:text-base font-extrabold text-[#3C3270] mb-1">
            RUMBO A LA EQUIDAD:
          </h2>
          <p className="text-xl md:text-lg sm:text-base text-[#5A478D] leading-tight">
            Reconociendo iniciativas innovadoras en favor de la <br />
            equidad de género en movilidad urbana
          </p>
        </div>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-24 md:h-24 text-white flex items-center justify-center z-20">
          <img src="/fecha.svg" className="w-full h-auto" />
        </div>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-24 md:h-24 text-white flex items-center justify-center z-20 hidden sm:flex">
          <img src="/fecha.svg" className="w-full h-auto" />
        </div>
      </div>

      {/* <div className="absolute inset-0 flex flex-col items-start pl-35 pt-25 z-10 space-y-2"> */}
      {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-24 md:h-24 text-white flex items-center justify-center z-20"> */}


      <div className="flex flex-col md:flex-row p-6 gap-6 max-w-6xl mx-auto my-4">
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
              {sec.titulo[language]}
            </button>
          ))}
        </div>

        <div className="w-full md:w-2/3 bg-white px-6 rounded ">
          <h2 className="text-2xl font-bold mb-4">
            {secciones[activo].titulo[language]}
          </h2>
          <h2 className="text-sm whitespace-pre-line">
            {secciones[activo].contenido[language]}
          </h2>
        </div>
      </div>

      <div className="container flex flex-col md:flex-row justify-end-safe gap-4 py-10">
        <button
          onClick={() => navigate("/nueva-ficha")}
          className="bg-[#5d5593] text-white px-4 py-2 rounded-xl hover:bg-[#a49fc4]"
        >
          {language === "es" ? "Comenzar postulación" : "Start Application"}
        </button>

        <button
          className="border border-[#5d5593] text-[#5d5593] px-4 py-2 rounded-xl hover:bg-[#a49fc4] flex items-center justify-center"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Bases.pdf";
            link.download = "Bases.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          {language === "es" ? "Descargar bases" : "Download Guidelines"}
          <MdOutlineFileDownload className="text-2xl m-1 mb-1 ml-2 inline" />
        </button>
      </div>
    </div>
  );
}

export default HomePage;
