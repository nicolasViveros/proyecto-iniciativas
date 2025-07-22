import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFichas } from "../context/FichasContext";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../context/LoadingSpinner";

const FichaPage = () => {
  const { id } = useParams();
  const [ficha, setFicha] = useState(null);
  const { fichas, getFicha } = useFichas();
  const navigate = useNavigate();

  useEffect(() => {
    // Función para cargar datos de la ficha
    const cargarFicha = async () => {
      try {
        const ficha = await getFicha(id);
        setFicha(ficha);
      } catch (error) {
        console.error("Error al cargar la ficha:", error);
      }
    };

    if (id) {
      cargarFicha();
    }
  }, [id]);

  if (!ficha) {
    return (
      <div className=" flex items-center justify-center min-h-screen">
        <div className="max-w-3xl w-full rounded-md justify-center items-center">
          Cargando ficha...
          <LoadingSpinner />
        </div>
      </div>

    );
  }

  const handleBack = () => {
    navigate("/fichas"); // vuelve al listado de fichas
  };

  const handleFileDownload = async (file) => {
    try {
      // Remove prefix if present and ensure trimming
      let base64Content = file.content.split(",")[1].trim();
      //console.log(base64Content);
      let byteCharacters = atob(base64Content);
      let byteNumbers = new Array(byteCharacters.length);
      //console.log(byteCharacters);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      let byteArray = new Uint8Array(byteNumbers);
      let blob = new Blob([byteArray], { type: file.type });
      let url = window.URL.createObjectURL(blob);

      let a = document.createElement("a");
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 hover:text-[#a49fc4] rounded-md"
      >
        <FaArrowCircleLeft className="text-2xl mr-1 mb-1 inline" />
        <span className="ml-1">Volver</span>
      </button>

      <div className="absolute top-4 right-4 ">
        <Link
          to={`/ficha/${ficha._id}/editar`}
          className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]"
        >
          editar
        </Link>
      </div>

      <div className="max-w-3xl w-full px-2 py-12 sm:p-10 rounded-md">
        <h1 className="text-3xl text-center font-bold mb-4">{ficha.name}</h1>
        <div className="container grid grid-cols-2 mx-auto p-2">
          <p>
            <strong>Organización:</strong>{" "}
          </p>
          <p>{ficha.organizationName}</p>
          <p>
            <strong>Tipo de Organización:</strong>{" "}
          </p>
          <p>{ficha.organizationType}</p>
          <p>
            <strong>País:</strong>{" "}
          </p>
          <p>{ficha.country}</p>
          <p>
            <strong>Representante Legal:</strong>{" "}
          </p>
          <p>{ficha.legalRepName}</p>
          <p>
            <strong>Cargo del Representante Legal:</strong>{" "}
          </p>
          <p>{ficha.legalRepPosition}</p>
          <p>
            <strong>Email:</strong>{" "}
          </p>
          <p>{ficha.email}</p>
          <p>
            <strong>Teléfono:</strong>{" "}
          </p>
          <p>{ficha.phone}</p>
          <p>
            <strong>Registro Legal:</strong>{" "}
          </p>
          <p>{ficha.registrationId}</p>
          <p>
            <strong>Ciudad de Implementación:</strong>{" "}
          </p>
          <p>{ficha.city}</p>
          <p>
            <strong>Fecha de Inicio:</strong>{" "}
          </p>
          <p>{new Date(ficha.startDate).toLocaleDateString()}</p>
          <p>
            <strong>¿Está Vigente?:</strong>{" "}
          </p>
          <p>{ficha.isActive ? "Sí" : "No"}</p>
          {!ficha.isActive && (
            <p>
              <strong>Razón Inactiva:</strong> {ficha.reasonInactive}
            </p>
          )}
          <p>
            <strong>Asociaciones:</strong>{" "}
          </p>
          <p>
            {ficha.associations.length > 0
              ? FileList(ficha.associations)
              : "Ninguna"}
          </p>
          <div className="col-span-2">
            <p className="border-b border-[#D9D6E1] pb-1">
              <strong>Equipo Responsable:</strong>
            </p>
            {ficha.team.map((member, index) => (
              <div key={index}>
                <p className="col-span-2">Miembro {index + 1} del equipo:</p>
                <p className="col-span-2">nombre - {member.name}</p>
                <p className="col-span-2">cargo - {member.position}</p>
                <p className="col-span-2 border-b border-[#D9D6E1] pb-1">
                  correo - {member.email}
                </p>
              </div>
            ))}
          </div>
          <p>
            <strong>Necesidad/Problemática:</strong>{" "}
          </p>
          <p className="col-span-2 border-b border-[#D9D6E1] pb-1">
            {ficha.need}
          </p>

          <p>
            <strong>Objetivos del Proyecto:</strong>{" "}
          </p>
          <p className=" col-span-2 border-b border-[#D9D6E1] pb-1">
            {ficha.objectives}
          </p>

          <p>
            <strong>Público Objetivo:</strong>{" "}
          </p>
          <p className="col-span-2 border-b border-[#D9D6E1] pb-1">
            {ficha.targetAudience}
          </p>

          <p>
            <strong>Actividades Principales:</strong>{" "}
          </p>
          <p className="col-span-2 border-b border-[#D9D6E1] pb-1">
            {ficha.activities}
          </p>

          {ficha.category === "Operador/Regulador" && (
            <>
              <p>
                <strong>Innovación:</strong>{" "}
              </p>
              <p className="col-span-2 border-b border-[#D9D6E1] pb-1">
                {ficha.innovation}
              </p>

              <p>
                <strong>Impacto:</strong>{" "}
              </p>
              <p className="col-span-2 border-b border-[#D9D6E1] pb-1">
                {ficha.impact}
              </p>
            </>
          )}
          {ficha.category === "ONG/Academia" && (
            <>
              <p>
                <strong>Metodología:</strong>{" "}
              </p>
              <p className="col-span-2 border-b border-[#D9D6E1] pb-1">
                {ficha.methodology}
              </p>

              <p>
                <strong>Resultados:</strong>{" "}
              </p>
              <p className="col-span-2 border-b border-[#D9D6E1] pb-1">
                {ficha.outcomes}
              </p>
            </>
          )}
          <p>
            <strong>Transferibilidad:</strong>{" "}
          </p>
          <p className="col-span-2 border-b border-[#D9D6E1] pb-1">
            {ficha.transferability}
          </p>

          <p>
            <strong>Sostenibilidad:</strong>{" "}
          </p>
          <p className="col-span-2 pb-1 ">{ficha.sustainability}</p>

          <p className='col-span-2 mb-3 className="col-span-2 border-t border-[#D9D6E1] pb-1"'>
            <strong>Material de Respaldo:</strong>
          </p>
          <ul>
            {ficha.links.map((link, index) => (
              <p key={index} className="col-span-2">
                <strong>Link:</strong>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
              </p>
            ))}
          </ul>
          {ficha.video && (
            <p className="col-span-2">
              <strong>Video:</strong>{" "}
              <a className="break-words" href={ficha.video} target="_blank" rel="noopener noreferrer">
                {ficha.video}
              </a>
            </p>
          )}
          {ficha.recognition && (
            <p className="col-span-2">
              <strong>Reconocimientos:</strong> {ficha.recognition}
            </p>
          )}
          {ficha.files && (
            <div className="col-span-2">
              <p >
                <strong>Archivos:</strong>
              </p>
              <ul className="list-disc pl-8 space-y-2">
                {ficha.files.map((file, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleFileDownload(file)}
                      className="text-blue-500 underline text-align-left cursor-pointer"
                    >
                      {file.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {ficha.acceptanceLetter && (
            <div className="col-span-2">
              <p >
                <strong>Carta de Aceptación:</strong>
              </p>
              <ul className="list-disc pl-8 space-y-2">
                {ficha.acceptanceLetter.map((file, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleFileDownload(file)}
                      className="text-blue-500 underline text-align-left cursor-pointer"
                    >
                      {file.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FichaPage;
