

import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFichas } from '../context/FichasContext';
import { FaArrowCircleLeft } from "react-icons/fa";


const FichaPage = () => {
  const { id } = useParams();
  const [ficha, setFicha] = useState(null);
  const { fichas, getFicha } = useFichas();

  useEffect(() => {
    // Función para cargar datos de la ficha
    const cargarFicha = async () => {
      try {
        const ficha = await getFicha(id);
        console.log(ficha.projectName);
        setFicha(ficha);
        console.log(ficha);

      } catch (error) {
        console.error('Error al cargar la ficha:', error);
      }
    };

    if (id) {
      cargarFicha();
    }
  }, [id]);

  if (!ficha) {
    return <div>Cargando...</div>;
  }

  const handleBack = () => {

    navigate('/fichas'); // vuelve al listado de fichas

};
  return (
    <div className="relative flex items-center justify-center min-h-screen" >

      <button onClick={handleBack} className="absolute top-4 left-4 hover:text-[#a49fc4] rounded-md">
        <FaArrowCircleLeft className="text-2xl mr-1 mb-1 inline" />
        <span className="ml-1">Volver</span>
      </button>

      <div className="max-w-3xl w-full p-10 rounded-md">
        <div className="container mx-auto p-6">

          <h1 className="text-3xl font-bold mb-6">{ficha.name}</h1>
          <p><strong>Organización:</strong> {ficha.organizationName}</p>
          <p><strong>Tipo de Organización:</strong> {ficha.organizationType}</p>
          <p><strong>País:</strong> {ficha.country}</p>
          <p><strong>Representante Legal:</strong> {ficha.legalRepName}</p>
          <p><strong>Cargo del Representante Legal:</strong> {ficha.legalRepPosition}</p>
          <p><strong>Email:</strong> {ficha.email}</p>
          <p><strong>Teléfono:</strong> {ficha.phone}</p>
          <p><strong>Registro Legal:</strong> {ficha.registrationId}</p>
          <p><strong>Ciudad de Implementación:</strong> {ficha.city}</p>
          <p><strong>Fecha de Inicio:</strong> {new Date(ficha.startDate).toLocaleDateString()}</p>
          <p><strong>¿Está Vigente?:</strong> {ficha.isActive ? "Sí" : "No"}</p>
          {!ficha.isActive && <p><strong>Razón Inactiva:</strong> {ficha.reasonInactive}</p>}
          <p><strong>Asociaciones:</strong> {ficha.associations.length > 0 ? ficha.associations.join(', ') : 'Ninguna'}</p>
          <div>
            <p><strong>Equipo Responsable:</strong></p>
            {ficha.team.map((member, index) => (
              <div key={index}>
                <p>Miembro {index + 1} del equipo:</p>
                <p>nombre - {member.name}</p>
                <p>cargo - {member.position}</p>
                <p>correo - {member.email}</p>
              </div>
            ))}
          </div>
          <p><strong>Necesidad/Problemática:</strong> {ficha.need}</p>
          <p><strong>Objetivos del Proyecto:</strong> {ficha.objectives}</p>
          <p><strong>Público Objetivo:</strong> {ficha.targetAudience}</p>
          <p><strong>Actividades Principales:</strong> {ficha.activities}</p>
          {ficha.category === 'Operador/Regulador' && (
            <>
              <p><strong>Innovación:</strong> {ficha.innovation}</p>
              <p><strong>Impacto:</strong> {ficha.impact}</p>
            </>
          )}
          {ficha.category === 'ONG/Academia' && (
            <>
              <p><strong>Metodología:</strong> {ficha.methodology}</p>
              <p><strong>Resultados:</strong> {ficha.outcomes}</p>
            </>
          )}
          <p><strong>Transferibilidad:</strong> {ficha.transferability}</p>
          <p><strong>Sostenibilidad:</strong> {ficha.sustainability}</p>
          <p><strong>Material de Respaldo:</strong></p>
          <ul>
            {ficha.links.map((link, index) => (
              <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
            ))}
          </ul>
          {ficha.video && (
            <p><strong>Video:</strong> <a href={ficha.video} target="_blank" rel="noopener noreferrer">{ficha.video}</a></p>
          )}
          {ficha.recognition && (
            <p><strong>Reconocimientos:</strong> {ficha.recognition}</p>
          )}

        </div>
      </div>
    </div>
  );
};

export default FichaPage;