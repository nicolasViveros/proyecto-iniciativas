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
        <div className="container mx-auto p-6">
            <h1 className="mb-6">{ficha.name}</h1>
            <p><strong>Organización:</strong> 
            <input 
            type="text" 
            name="organizationName" 
            value={ficha.organizationName} 
            onChange={handleInputChange} 
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" />
            </p>
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
            {/* Aquí puedes agregar un resumen completo en un formato que prefieras */}

        </div>
    );
}

export default EditFichaPage