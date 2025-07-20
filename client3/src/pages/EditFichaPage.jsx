import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFichas } from '../context/FichasContext';
import FichaPage from './FichaPage';
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleLeft } from "react-icons/fa";


function EditFichaPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [ficha, setFicha] = useState(null);

    const { fichas, getFicha } = useFichas();

    useEffect(() => {
        const cargarFicha = async () => {
            try {
                const ficha = await getFicha(id);
                setFicha(ficha);
            } catch (error) {
                console.error('Error al cargar la ficha:', error);
            }
        };

        if (id) {
            cargarFicha();
        }
    }, [id]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFicha((prevFicha) => ({
            ...prevFicha,
            [name]: value,
        }));
    };

    const validateFields = () => {
        if (!ficha.name) return "El nombre es requerido";
        if (!ficha.organizationName) return "El nombre de la organización es requerido";
        if (!ficha.organizationType) return "El tipo de organización es requerido";
        if (!ficha.country) return "El país es requerido";
        if (!ficha.legalRepName) return "El representante legal es requerido";
        if (!ficha.legalRepPosition) return "El cargo del representante legal es requerido";
        if (!ficha.email) return "El email es requerido";
        if (!ficha.phone) return "El teléfono es requerido";
        if (!ficha.registrationId) return "El registro legal es requerido";
        if (!ficha.city) return "La ciudad de implementación es requerida";
        if (!ficha.startDate) return "La fecha de inicio es requerida";
        if (ficha.isActive === undefined) return "El estado de vigencia es requerido";
        if (!ficha.need) return "La necesidad/problema es requerida";
        if (!ficha.objectives) return "Los objetivos del proyecto son requeridos";
        if (!ficha.targetAudience) return "El público objetivo es requerido";
        if (!ficha.activities) return "Las actividades principales son requeridas";
        if (ficha.category === 'Operador/Regulador' && !ficha.innovation) return "La innovación es requerida";
        if (ficha.category === 'Operador/Regulador' && !ficha.impact) return "El impacto es requerido";
        if (ficha.category === 'ONG/Academia' && !ficha.methodology) return "La metodología es requerida";
        if (ficha.category === 'ONG/Academia' && !ficha.outcomes) return "Los resultados son requeridos";
        if (!ficha.transferability) return "La transferibilidad es requerida";
        if (!ficha.sustainability) return "La sostenibilidad es requerida";
        if (!ficha.links) return "Los enlaces son requeridos";
        if (!ficha.files) return "Los archivos son requeridos";

        // Email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(ficha.email)) return "El email no es válido";
        // Add more specific validation as needed
        return '';
    };

    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        // Convert the value to a boolean
        const booleanValue = value === "true";
        handleInputChange({ target: { name, value: booleanValue } });
    };

    const handleTeamChange = (index, e) => {
        const updatedTeam = [...ficha.team];
        updatedTeam[index][e.target.name] = e.target.value;
        setFicha({ ...ficha, team: updatedTeam });
    };

    const addTeamMember = () => {
        setFicha({ ...ficha, team: [...ficha.team, { name: '', position: '', email: '' }] });
    };

    const removeTeamMember = (index) => {
        const updatedTeam = ficha.team.filter((_, i) => i !== index);
        setFicha({ ...ficha, team: updatedTeam });
    };

    const handleSave = () => {
        const validationError = validateFields();
        if (validationError) {
            alert(validationError);
            return;
        }
        console.log('Ficha Saved:', ficha);
    };

    const handleBack = () => {

        navigate('/fichas'); // vuelve al listado de fichas

    };

    if (!ficha) {
        return <div>Cargando...</div>;
    }

    return (

        <div >
            <button onClick={handleBack} className="absolute top-4 left-4 hover:text-[#a49fc4] rounded-md">
                <FaArrowCircleLeft className="text-2xl mr-1 mb-1 inline" />
                <span className="ml-1">Volver</span>
            </button>

            <h1 className="text-3xl text-center font-bold mb-4">{ficha.name}</h1>
            <div className="container grid grid-cols-2 mx-auto p-2">
                <div>Organización:</div>
                <div><input
                    type="text"
                    name="organizationName"
                    value={ficha.organizationName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300  px-4 py-2 rounded-md mb-1 input-focused" />
                </div>

                <div>Tipo de Organización:</div>
                <div>
                    <input
                        type="text"
                        name="organizationType"
                        value={ficha.organizationType}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                    />
                </div>

                <div>País:</div>
                <div>
                    <input
                        type="text"
                        name="country"
                        value={ficha.country}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                    />
                </div>

                <div>Representante Legal:</div>
                <div>
                    <input
                        type="text"
                        name="legalRepName"
                        value={ficha.legalRepName}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                    />
                </div>

                <div>Cargo del Representante Legal:</div>
                <div>
                    <input
                        type="text"
                        name="legalRepPosition"
                        value={ficha.legalRepPosition}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                    />
                </div>

                <div>Email:</div>
                <div>
                    <input
                        type="email"
                        name="email"
                        value={ficha.email}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                    />
                </div>

                <div>Teléfono:</div>
                <div>
                    <input
                        type="text"
                        name="phone"
                        value={ficha.phone}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                    />
                </div>

                <div>Registro Legal:</div>
                <div>
                    <input
                        type="text"
                        name="registrationId"
                        value={ficha.registrationId}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                    />
                </div>

                <div>Ciudad de Implementación:</div>
                <div>
                    <input
                        type="text"
                        name="city"
                        value={ficha.city}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                    />
                </div>

                <div>Fecha de Inicio:</div>
                <div>
                    <input
                        type="date"
                        name="startDate"
                        value={ficha.startDate ? new Date(ficha.startDate).toISOString().split('T')[0] : ''}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                    />
                </div>

                <div className="block mb-2">¿Se encuentra vigente?</div>
                <div className="flex gap-4 mb-4">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="isActive"
                            value="true"
                            checked={ficha.isActive === true}
                            onChange={handleRadioChange}
                            className="mr-2 accent-[#5d5593]"
                        />
                        Sí
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="isActive"
                            value="false"
                            checked={ficha.isActive === false}
                            onChange={handleRadioChange}
                            className="mr-2 accent-[#5d5593] "
                        />
                        No
                    </label>
                </div>

                {!ficha.isActive && (
                    <div className='col-span-2'>
                        <label>En caso de no estar vigente, explique brevemente por qué:</label>
                        <textarea
                            name="reasonInactive"
                            value={ficha.reasonInactive}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded input-focused "
                            rows="3"
                        ></textarea>
                    </div>
                )}

                <div>Asociaciones:</div>
                <div>
                    <input
                        type="text"
                        name="associations"
                        value={ficha.associations.length > 0 ? ficha.associations.join(', ') : 'Ninguna'}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                    />
                </div>

                <div className='col-span-2 font-bold'>Equipo Responsable:</div>

                {ficha.team.map((member, index) => (
                    <div className="col-span-2">
                        <p className='col-span-2'>Miembro {index + 1} del equipo:</p>

                        <div key={index} className="grid grid-cols-5 gap-1 my-1">
                            <div className='col-span-2 '><label>Nombre*</label> </div>
                            <div className='col-span-2'><label>Cargo*</label> </div>
                            <div className='col-span-2'>
                                <input
                                    name="name"
                                    value={member.name}
                                    onChange={(e) => handleTeamChange(index, e)}
                                    className="w-full border border-gray-300  px-4 py-2 rounded-md mb-1 input-focused"
                                />
                            </div>
                            <div className='col-span-2'>
                                <input
                                    name="position"
                                    value={member.position}
                                    onChange={(e) => handleTeamChange(index, e)}
                                    className="w-full border border-gray-300  px-4 py-2 rounded-md mb-1 input-focused"
                                />
                            </div>
                            <div>
                                <button type="button" onClick={() => removeTeamMember(index)} className="text-red-600 w-full py-1 hover:underline">
                                    Eliminar
                                </button>
                            </div>
                            <div className='col-span-4'>
                                <div className='col-span-2'><label>Email*</label> </div>

                                <input
                                    name="email"
                                    type="email"
                                    value={member.email}
                                    onChange={(e) => handleTeamChange(index, e)}
                                    className="w-full border border-gray-300  px-4 py-2 rounded-md mb-1 input-focused"
                                />
                            </div>

                        </div>
                    </div>
                ))}

                <button
                    type="button"
                    onClick={addTeamMember}
                    className=" hover:underline col-span-2"> + Agregar responsable
                </button>

                <div>Necesidad/Problemática:</div>
                <div>
                    <textarea
                        name="need"
                        value={ficha.need}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        rows="3"
                    ></textarea>
                </div>

                <div>Objetivos del Proyecto:</div>
                <div>
                    <textarea
                        name="objectives"
                        value={ficha.objectives}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        rows="3"
                    ></textarea>
                </div>

                <div>Público Objetivo:</div>
                <div>
                    <textarea
                        name="targetAudience"
                        value={ficha.targetAudience}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        rows="3"
                    ></textarea>
                </div>

                <div>Actividades Principales:</div>
                <div>
                    <textarea
                        name="activities"
                        value={ficha.activities}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        rows="3"
                    ></textarea>
                </div>

                {ficha.category === 'Operador/Regulador' && (
                    <>
                        <div>Innovación:</div>
                        <div>
                            <textarea
                                name="innovation"
                                value={ficha.innovation}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                                rows="3"
                            ></textarea>
                        </div>

                        <div>Impacto:</div>
                        <div>
                            <textarea
                                name="impact"
                                value={ficha.impact}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                                rows="3"
                            ></textarea>
                        </div>
                    </>
                )}
                {ficha.category === 'ONG/Academia' && (
                    <>
                        <div>Metodología:</div>
                        <div>
                            <textarea
                                name="methodology"
                                value={ficha.methodology}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                                rows="3"
                            ></textarea>
                        </div>

                        <div>Resultados:</div>
                        <div>
                            <textarea
                                name="outcomes"
                                value={ficha.outcomes}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                                rows="3"
                            ></textarea>
                        </div>
                    </>
                )}
                <div>Transferibilidad:</div>
                <div>
                    <textarea
                        name="transferability"
                        value={ficha.transferability}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        rows="3"
                    ></textarea>
                </div>

                <div>Sostenibilidad:</div>
                <div>
                    <textarea
                        name="sustainability"
                        value={ficha.sustainability}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                        rows="3"
                    ></textarea>
                </div>

                <div>Material de Respaldo:</div>
                <div>Links:</div>
                <div>
                    {ficha.links.map((link, index) => (
                        {key = { index } > 
                        <input
                            name="links"
                            value={link} 
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
                            rows="3"
                        ></input>
                        }
                    ))}
                </div>

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
                {/* Aquí puedes agregar un resumen completo en un formato que prefieras */}
                <button
                    type="button"
                    onClick={handleSave}
                    className="mt-4 p-2 bg-blue-500 text-white rounded"
                >
                    Guardar Ficha
                </button>
            </div>
        </div >
    );
}

export default EditFichaPage