import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useIniciativas } from '../context/IniciativasContext';
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleLeft } from "react-icons/fa";
import LoadingSpinner from "../context/LoadingSpinner";
import Localizacion from "../models/localizacion.model.js";
import { getGeocodeData } from "./maps.controller.js";

function EditIniciativaPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [iniciativa, setIniciativa] = useState(null);
    const { getIniciativa, createIniciativa } = useIniciativas();
    const [isSaving, setIsSaving] = useState(false);
    const { updateIniciativa } = useIniciativas();


    useEffect(() => {
        const cargarIniciativa = async () => {
            if (id) {
                try {
                    const iniciativa = await getIniciativa(id);
                    setIniciativa(iniciativa);
                } catch (error) {
                    console.error("Error al cargar la iniciativa:", error);
                }
            } else {
                // Initializes an empty initiative with all fields set
                setIniciativa({
                    nombreIniciativa: '',
                    tipoIniciativa: '',
                    fechaInicioTermino: '',
                    pais: '',
                    ciudad: '',
                    alcance: '',
                    tipoInstitucion: '',
                    actoresInvolucrados: '',
                    paginaWebInstitucion: '',
                    objetivo: '',
                    descripcionIniciativa: '',
                    logrosResultados: '',
                    institucionEncargada: '',
                    grupoObjetivo: '',
                    mujeresParticipantes: '',
                    costoAnualUSD: '',
                    ejecutor: '',
                    pertinencia: '',
                    categoria: '',
                    justificacion: '',
                    personaContacto: '',
                    comentariosAdicionales: '',
                    documentos: '',
                    links: [''], // Start with one empty link
                });
            }
        };
        cargarIniciativa();
    }, [id]);

    if (!iniciativa) {
        return (
            <div className=" flex items-center justify-center min-h-screen">
                Cargando iniciativa...
                <LoadingSpinner />
            </div>

        );
    }

    if (isSaving) {
        return <div className="flex items-center justify-center min-h-screen">
            {/* <div className="max-w-3xl w-full rounded-md justify-center items-center"> */}
            Guardando iniciativa...
            <LoadingSpinner />
            {/* </div> */}
        </div>;
    }
    const capitalizeWords = (str) => {
        return str
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const handleBack = () => {
        navigate('/iniciativas'); // vuelve al listado de fichas
    };

    const obtenerLocalizacion = async (pais, ciudad) => {
        const location = await getGeocodeData(
            pais + "+" + ciudad
          );
          const localizacion = new Localizacion({
            latitud: location.items[0].position.lat,
            longitud: location.items[0].position.lng,
            pais: iniciativa.pais,
            ciudad: iniciativa.ciudad,
            idIniciativa: iniciativa._id,
          });
          await localizacion.save();
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;

        if (name === 'pais' || name === 'ciudad') {
            value = capitalizeWords(value);
        }
        setIniciativa((prevIniciativa) => ({
            ...prevIniciativa,
            [name]: value,
        }));
    };
    const handleSave = async () => {
        // Implementación de validación
        if (!iniciativa.nombreIniciativa.trim() || !iniciativa.pais.trim() || !iniciativa.ciudad.trim()) {
            alert("Los campos 'Nombre Iniciativa', 'País' y 'Ciudad' son obligatorios.");
            return;
        }

        setIsSaving(true);
        try {
            if (id) {
                await updateIniciativa(id, iniciativa);
                navigate(`/iniciativa/${id}`);
            } else {
                await createIniciativa(iniciativa);
                navigate(`/iniciativas`);
                try {
                    await obtenerLocalizacion(iniciativa.pais, iniciativa.ciudad);
                    console.log("Localización guardada");
                } catch (error) {
                    console.error("Error al obtener la localización:", error);
                }
            }
        } catch (error) {
            console.error("Error al guardar la iniciativa:", error);
        } finally {
            setIsSaving(false);
        }
    };
    const handleLinkChange = (index, value) => {
        const newLinks = [...iniciativa.links];
        newLinks[index] = value;
        setIniciativa({ ...iniciativa, links: newLinks });
    };
    const handleRemoveLink = (index) => {
        const newLinks = iniciativa.links.filter((_, i) => i !== index);
        setIniciativa({ ...iniciativa, links: newLinks });
    };
    const handleAddLink = () => {
        setIniciativa({ ...iniciativa, links: [...iniciativa.links, ""] });
    };
    return (
        <div className="relative flex items-center justify-center min-h-screen" >
            <button onClick={handleBack} className="absolute top-4 left-4 hover:text-[#a49fc4] rounded-md">
                <FaArrowCircleLeft className="text-2xl mr-1 mb-1 inline" />
                <span className="ml-1">Volver</span>
            </button>

            <div className="max-w-3xl w-full px-2 py-12 sm:py-10 sm:px-4 rounded-md">
                <h1 className="text-3xl text-center font-bold mb-4">{iniciativa.nombreIniciativa}</h1>
                <div className="container grid grid-cols-2 mx-auto p-2">
                    <div>Nombre iniciativa: *</div>
                    <div><input
                        type="text"
                        name="nombreIniciativa"
                        value={iniciativa.nombreIniciativa || ''}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300  px-4 py-2 rounded-md mb-1 input-focused" />
                    </div>

                    <div>Pais: *</div>
                    <div>
                        <input
                            type="text"
                            name="pais"
                            value={iniciativa.pais || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        />
                    </div>

                    <div>Ciudad: *</div>
                    <div>
                        <input
                            type="text"
                            name="ciudad"
                            value={iniciativa.ciudad || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        />
                    </div>

                    <div>Tipo de Iniciativa:</div>
                    <div>
                        <input
                            type="text"
                            name="tipoIniciativa"
                            value={iniciativa.tipoIniciativa || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        />
                    </div>

                    <div>Fecha de Inicio/Término:</div>
                    <div>
                        <input
                            type="text"
                            name="fechaInicioTermino"
                            value={iniciativa.fechaInicioTermino || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        />
                    </div>

                    <div>Alcance:</div>
                    <div>
                        <input
                            type="text"
                            name="alcance"
                            value={iniciativa.alcance || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        />
                    </div>

                    <div>Tipo de Institución:</div>
                    <div>
                        <input
                            type="text"
                            name="tipoInstitucion"
                            value={iniciativa.tipoInstitucion || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        />
                    </div>

                    <div>Actores Involucrados:</div>
                    <div>
                        <input
                            type="text"
                            name="actoresInvolucrados"
                            value={iniciativa.actoresInvolucrados || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        />
                    </div>

                    <div>Pagina Web de la Institución:</div>
                    <div>
                        <input
                            type="text"
                            name="paginaWebInstitucion"
                            value={iniciativa.paginaWebInstitucion || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        />
                    </div>

                    <div>Objetivo:</div>
                    <div>
                        <textarea
                            name="objetivo"
                            value={iniciativa.objetivo || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                            rows="4"
                        />
                    </div>

                    <div>Descripción de la iniciativa:</div>
                    <div>
                        <textarea
                            name="descripcionIniciativa"
                            value={iniciativa.descripcionIniciativa || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                            rows="4"
                        />
                    </div>

                    <div>Logros o resultados obtenidos:</div>
                    <div>
                        <textarea
                            name="logrosResultados"
                            value={iniciativa.logrosResultados || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                            rows="4"
                        />
                    </div>

                    <div>Institucion Encargada:</div>
                    <div>
                        <input
                            type="text"
                            name="institucionEncargada"
                            value={iniciativa.institucionEncargada || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        />
                    </div>

                    <div>Grupo de Objetivo:</div>
                    <div>
                        <input
                            type="text"
                            name="grupoObjetivo"
                            value={iniciativa.grupoObjetivo || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        />
                    </div>

                    <div>Mujeres Participantes:</div>
                    <div>
                        <input
                            type="text"
                            name="mujeresParticipantes"
                            value={iniciativa.mujeresParticipantes || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        />
                    </div>

                    <div>Costo Anual USD:</div>
                    <div>
                        <input
                            type="text"
                            name="costoAnualUSD"
                            value={iniciativa.costoAnualUSD || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        />
                    </div>

                    <div> Ejecutor:</div>
                    <div>
                        <input
                            type="text"
                            name="ejecutor"
                            value={iniciativa.ejecutor || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        />
                    </div>

                    <div>Pertinencia:</div>
                    <div>
                        <input
                            type="text"
                            name="pertinencia"
                            value={iniciativa.pertinencia || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        />
                    </div>

                    <div>Categoria:</div>
                    <div>
                        <input
                            type="text"
                            name="categoria"
                            value={iniciativa.categoria || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        />
                    </div>

                    <div>Justificación:</div>
                    <div>
                        <textarea
                            name="justificacion"
                            value={iniciativa.justificacion || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                            rows="4"
                        />
                    </div>

                    <div>Persona Contacto:</div>
                    <div>
                        <textarea
                            name="personaContacto"
                            value={iniciativa.personaContacto || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                            rows="4"
                        />
                    </div>

                    <div>Comentarios Adicionales:</div>
                    <div>
                        <input
                            type="text"
                            name="comentariosAdicionales"
                            value={iniciativa.comentariosAdicionales || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        />
                    </div>

                    <div className='col-span-2 font-bold mt-4'>Material de Respaldo:</div>

                    <div>Documentos:</div>
                    <div>
                        <input
                            type="text"
                            name="documentos"
                            value={iniciativa.documentos || ''}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        />
                    </div>

                    <div className='col-span-2'>Links:</div>
                    {iniciativa.links.map((link, index) => (
                        <div key={`link-${index}`} className='col-span-2'>
                            <div className="flex items-center">
                                <input
                                    name='link'
                                    type="url"
                                    value={link}
                                    onChange={(e) => handleLinkChange(index, e.target.value)}
                                    className="w-full p-2 border rounded my-2 input-focused"
                                />
                                {index > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveLink(index)}
                                        className="text-red-600  text-xs px-2 hover:underline ml-2"
                                    >
                                        Eliminar
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddLink}
                        className="underline hover:text-[#a49fc4] mb-2"
                    >
                        Agregar link +
                    </button>

                    <div className="flex col-span-2 justify-end">
                        <button
                            type="button"
                            onClick={handleSave}
                            className="bg-[#5d5593] text-white px-2 my-8 py-2 rounded hover:bg-[#a49fc4] justify-end"
                        >
                            Guardar
                        </button>
                    </div>

                </div>
            </div >
        </div>
    )
}

export default EditIniciativaPage