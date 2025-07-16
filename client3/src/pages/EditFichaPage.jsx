import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFichas } from '../context/FichasContext';

function EditFichaPage() {
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

    const handleSave = () => {
        const validationError = validateFields();
        if (validationError) {
            alert(validationError);
            return;
        }
        console.log('Ficha Saved:', ficha);
    };

    if (!ficha) {
        return <div>Cargando...</div>;
    }

    return (
        <div >
            <h1 className="text-3xl text-center font-bold mb-4">{ficha.name}</h1>
            <div className="container grid grid-cols-2 gap-4 mx-auto p-6">
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
                {/* Aquí puedes agregar un resumen completo en un formato que prefieras */}
                <button
                    type="button"
                    onClick={handleSave}
                    className="mt-4 p-2 bg-blue-500 text-white rounded"
                >
                    Guardar Ficha
                </button>
            </div>
        </div>
    );
}

export default EditFichaPage