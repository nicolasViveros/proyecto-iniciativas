import React from 'react'
import InitiativeCard from '../components/InitiativeCard'

const exampleInitiative = {
    title: "Plan de Género y Movilidad de la Ciudad de Buenos Aires",
    objective: "Integrar la perspectiva de género en la planificación, gestión e implementación de políticas de movilidad y transporte para una ciudad más inclusiva y equitativa.",
    description: "El Plan de Género y Movilidad de la Ciudad Autónoma de Buenos Aires parte del análisis de iniciativas internacionales y nacionales destacadas en la temática de género y movilidad, enmarcándose en instrumentos normativos vigentes tanto en Argentina como en la Ciudad. Su implementación está organizada en torno a cuatro ejes estratégicos principales:",
    steps: [
      {
        title: "Eje 1: Planificación, diseño y gestión con perspectiva de género",
        content: "Desarrollo de infraestructura urbana y servicios de transporte con criterios específicos que aumenten la seguridad y autonomía de mujeres y diversidades.",
      },
      {
        title: "Eje 2: Inserción laboral de las mujeres en el sector Transporte y Movilidad",
        content: "Impulso a la participación laboral femenina mediante acciones conjuntas con empresas del sector, sindicatos e instituciones académicas.",
      },
      {
        title: "Eje 3: Datos y estudios de movilidad cotidiana y seguridad con perspectiva de género",
        content: "Generación y análisis sistemático de información y estudios específicos sobre movilidad y percepción de seguridad diferenciados por género, incluyendo herramientas innovadoras como el “Mapa del Miedo”.",
      },
      {
        title: "Eje 4: Capacitación y sensibilización en perspectiva de género",
        content: "Formación interna permanente de equipos técnicos y operativos, así como campañas públicas de sensibilización sobre la importancia de una movilidad segura, inclusiva y con perspectiva de género.",
      },
    ],
    achievements: [
      "Elaboración de diagnósticos de género y movilidad;",
      "Implementación de mapas de calor;",
      "Capacitaciones internas;",
      "Elaboración de lineamientos para infraestructura con perspectiva de género."
    ],
    startDate: "2019",
    endDate: "Indefinido",
    specificData: {
      country: "Argentina",
      scope: "Metropolitano",
      city: "Ciudad Autónoma de Buenos Aires",
      institutionType: "Pública",
    },
    actorsInvolved: "Gobierno de la Ciudad, equipos técnicos, organizaciones de la sociedad civil, consultoras especializadas. PENDIENTE",
    websiteLink: "", // Puedes poner una URL aquí si hay
    imageUrl: "/imagen_iniciativa.jpeg", // Placeholder de imagen
  };

function IniciativaPage() {
  <div>la mundo</div>
//   <div className="min-h-screen bg-gray-100 p-4">
//   <InitiativeCard initiative={exampleInitiative} />
//   hola mundo
// </div>
}

export default IniciativaPage