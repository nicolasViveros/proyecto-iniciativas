// src/components/InitiativeCard.jsx (o .js)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useIniciativas } from "../context/IniciativasContext";
import { useState, useEffect } from "react";

const InitiativeCard = ({ iniciativa }) => {
  const {
    _id,
    tipoIniciativa,
    nombreIniciativa,
    fechaInicioTermino,
    objetivo,
    descripcionIniciativa,
    logrosResultados,
    pais,
    alcance,
    ciudad,
    tipoInstitucion,
    actoresInvolucrados,
    paginaWebInstitucion,
  
  } = iniciativa;

  const [location, setLocation] = useState(null);
  const { getIniciativasPorCiudad } = useIniciativas();


  const { getLocationPorIniciativa } = useIniciativas();

  useEffect(() => {
    if (id) {
      getLocationPorIniciativa(id).then((data) => {
        setLocation(data);
      });
    }
  }, [id]);

  const navigate = useNavigate();
  console.log(iniciativa._id)
  console.log(location.data)

  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 rounded-lg shadow-xl overflow-hidden p-6 max-w-6xl mx-auto my-8">
      {/* Contenido principal de la iniciativa */}
      <div className="lg:w-2/3 lg:pr-8 mb-6 lg:mb-0">
        <h4 className="text-sm font-semibold  mb-2">{tipoIniciativa}</h4>
        <h1 className="text-3xl font-bold mb-4">{nombreIniciativa}</h1>

        <div className="flex items-center text-sm  mb-6">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          <span className="font-semibold mr-1">Inicio/ Término</span> {fechaInicioTermino}
        </div>

        <h2 className="text-xl font-semibold  mb-2">Objetivo</h2>
        <p className=" text-base leading-relaxed mb-6">{objetivo}</p>

        <h2 className="text-xl font-semibold  mb-2">Descripción de la iniciativa</h2>
        <p className=" text-base leading-relaxed mb-4">{descripcionIniciativa}</p>

        {/* {steps && steps.length > 0 && (
          <div className="mb-6">
            {steps.map((step, index) => (
              <p key={index} className=" text-base leading-relaxed mb-2">
                <span className="font-semibold">{step.title}:</span> {step.content}
              </p>
            ))}
          </div>
        )} */}

        {/* {achievements && achievements.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Logros o resultados obtenidos</h2>
            {achievements.map((achievement, index) => (
              <p key={index} className=" text-base leading-relaxed mb-2">
                {achievement}
              </p>
            ))}
          </div>
        )} */}
        <h2 className="text-xl font-semibold mb-2">Logros o resultados obtenidos</h2>
        <p className=" text-base leading-relaxed mb-4">{logrosResultados}</p>




        {/* Botón Volver al mapa */}
        <div className="mt-8">
          <button
            onClick={() => navigate('/iniciativasHome')}
            className="flex items-center bg-[#5d5593] text-white px-4 py-3 rounded-xl hover:bg-[#a49fc4] font-semibold shadow-sm transition-colors duration-200">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Volver al mapa
          </button>
        </div>
      </div>

      {/* Barra lateral derecha */}
      <div className="lg:w-1/3 flex flex-col items-center">
        {/* Imagen decorativa */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 p-4 w-full">

          <img
            src={"/imagen_iniciativa.jpeg"}
            alt="Ilustración de la iniciativa"
            className="w-full h-auto object-cover rounded-md"
          />

        </div>

        {/* Datos específicos */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full mb-6">
          <h2 className="text-lg font-semibold  mb-4">Datos específicos</h2>
          <ul className="text-sm space-y-2">
            <li><span className="font-semibold">País:</span> {pais}</li>
            <li><span className="font-semibold">Alcance:</span> {alcance}</li>
            <li><span className="font-semibold">Ciudad:</span> {ciudad}</li>
            <li><span className="font-semibold">Tipo de institución:</span> {tipoInstitucion}</li>
            <li><span className="font-semibold">Actores involucrados:</span> {actoresInvolucrados}</li>
            {paginaWebInstitucion ? (
              <li>
                <span className="font-semibold">Sitio web de la institución:</span>{' '}
                <a
                  href={paginaWebInstitucion} // Use brackets here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Ver sitio
                </a>
              </li>
            ) : (
              <li>
                <span className="font-semibold">Sitio web de la institución:</span> <span>Sin información</span>
              </li>
            )}
            
            {/* <li>latitud: {location.latitud}</li>
            <li>longitud: {location.longitud}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InitiativeCard;