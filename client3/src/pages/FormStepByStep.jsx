import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useFichas } from '../context/FichasContext';
import { FaArrowCircleLeft } from "react-icons/fa";


function Step1({ form, handleChange, handleTeamChange, addTeamMember, removeTeamMember, handleAssociationChange }) {

    const [organizationType, setOrganizationType] = useState(form.organizationType);
    const [otherOrganizationType, setOtherOrganizationType] = useState('');
    const [country, setCountry] = useState(form.country);
    const [otherCountry, setOtherCountry] = useState('');

    const handleOrganizationTypeChange = (e) => {
        const { value } = e.target;
        setOrganizationType(value);
        handleChange(e); // Mantiene la lógica existente

        if (value !== "Otra") {
            setOtherOrganizationType('');
        }
    };

    const handleCountryChange = (e) => {
        const { value } = e.target;
        setCountry(value);
        handleChange(e); // Actualiza país en el formulario principal

        if (value !== "Otro") {
            setOtherCountry('');
        }
    };

    useEffect(() => {
        if (organizationType === "Otra") {
            handleChange({ target: { name: "organizationType", value: otherOrganizationType } });
        }
    }, [otherOrganizationType]);

    useEffect(() => {
        if (country === "Otro") {
            handleChange({ target: { name: "country", value: otherCountry } });
        }
    }, [otherCountry]);


    return (
        <div>
            <h1 className="text-3xl text-center font-bold mb-4">Datos de la organización postulante</h1>

            <label htmlFor="organizationName" className='text-xl'>Nombre de la organización *</label><br />
            <input
                name="organizationName"
                value={form.organizationName}
                onChange={handleChange}
                className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
                autoFocus
                required />

            <label htmlFor="organizationType" className='text-xl'>Tipo de organización *</label><br />
            <div className="mt-2 grid grid-cols-1">
                <select
                    id="organizationType"
                    name="organizationType"
                    value={organizationType}
                    onChange={handleOrganizationTypeChange}
                    className="col-start-1 row-start-1 w-full input-focused appearance-none rounded-md py-2 px-4 outline-1 outline-gray-300 focus:outline-2 focus:outline-[#5D5594]">
                    <option value="">Selecciona un tipo</option>
                    <option value="Publica">Pública</option>
                    <option value="Privada">Privada</option>
                    <option value="ONG">ONG</option>
                    <option value="Multilateral">Multilateral</option>
                    <option value="Privada y ONG">Privada y ONG</option>
                    <option value="Otra">Otra...</option>
                </select>
            </div>

            {organizationType === "Otra" && (
                <input
                    name="otherOrganizationType"
                    value={otherOrganizationType}
                    onChange={(e) => setOtherOrganizationType(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md my-2 input-focused"
                    placeholder="Especifica el tipo de organización"
                    required
                />
            )}

            <label htmlFor="country" className='text-xl'>País</label><br />
            <div className="mt-2 grid grid-cols-1">
                <select
                    id="country"
                    name="country"
                    value={country}
                    onChange={handleCountryChange}
                    className="col-start-1 row-start-1 w-full appearance-none input-focused rounded-md py-2 px-4 outline-1 outline-gray-300 focus:outline-2 focus:outline-[#5D5594]">
                    <option value="">Selecciona un país</option>
                    <option value="Internacional">Internacional</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Brasil">Brasil</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Guyana">Guyana</option>
                    <option value="México">México</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Perú">Perú</option>
                    <option value="Surinam">Surinam</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Otro">Otro...</option>
                </select>
            </div>

            {country === "Otro" && (
                <input
                    name="otherCountry"
                    value={otherCountry}
                    onChange={(e) => setOtherCountry(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md my-2 input-focused"
                    placeholder="Especifica el país"
                    required
                />
            )}

            <label htmlFor="legalRepName" className='text-xl'>Nombre de el/la representante legal o responsable*</label><br />
            <input name="legalRepName"
                value={form.legalRepName}
                onChange={handleChange}
                className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
                required
            />

            <label htmlFor="legalRepPosition" className='text-xl'>Cargo *</label><br />
            <input name="legalRepPosition"
                value={form.legalRepPosition}
                onChange={handleChange}
                className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
                required
            />

            <label htmlFor="email" className='text-xl'>Correo electrónico *</label><br />
            <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
                required />

            <label htmlFor="phone" className='text-xl'>Teléfono de contacto *</label><br />
            <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
                required />

            <label htmlFor="registrationId" className='text-xl'>RUT/NIT/CNPJ/Registro legal</label><br />
            <input
                name="registrationId"
                value={form.registrationId}
                onChange={handleChange}
                className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
                required
            />

            <h3 className="text-2xl font-semibold my-5 ">Equipo responsable</h3>
            <h3 className="text-xl">Ingrese acá los nombres, cargos y correos de contacto de las principales personas implicados en la realización del proyecto o iniciativa </h3>
            <label className='block text-sm my-2'>(puede ingresar más de una persona)</label>



            {form.team.map((member, index) => (
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
            ))}

            <button type="button" onClick={addTeamMember} className=" hover:underline"> + Agregar responsable</button>

            <h3 className="text-xl font-semibold my-5">¿Hubo asociaciones para el desarrollo? En caso afirmativo, indique los sectores asociados * </h3>
            <div className="grid grid-cols-2 gap-2 ">
                {["No", "Otras Secretarías", "ONGs y Sociedad Civil", "Instituciones educativas y de investigación", "Empresas", "Organizaciones multilaterales (como el BID, el Banco Mundial y la ONU)", "Organizaciones Internacionales", "Otras organizaciones"].map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            value={option}
                            checked={form.associations.includes(option)}
                            onChange={handleAssociationChange}
                            className='input-focused   accent-[#5d5593]'
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

function Step2({ form, handleChange }) {
    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        // Convert the value to a boolean
        const booleanValue = value === "true";
        handleChange({ target: { name, value: booleanValue } });
    };

    return (
        <div >
            <h2 className="text-3xl text-center font-bold mb-4">Información del proyecto postulado</h2>

            <label className='text-xl'>Nombre del proyecto o iniciativa:</label>
            <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
                required
            />

            <label className='text-xl'>Ciudad de implementación del proyecto:</label>
            <input
                name="city"
                type="text"
                value={form.city}
                onChange={handleChange}
                className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
                required
            />

            <label className='text-xl'>Fecha de inicio de implementación:</label>
            <input
                name="startDate"
                type="date"
                value={form.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused "
                required
            />

            <label className="block mb-2">¿Se encuentra vigente?</label>
            <div className="flex gap-4 mb-4">
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="isActive"
                        value="true"
                        checked={form.isActive === true}
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
                        checked={form.isActive === false}
                        onChange={handleRadioChange}
                        className="mr-2 accent-[#5d5593] "
                    />
                    No
                </label>
            </div>

            {!form.isActive && (
                <div className="mb-4">
                    <label className="block text-xl">En caso de no estar vigente, explique brevemente por qué:</label>
                    <textarea
                        name="reasonInactive"
                        value={form.reasonInactive}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded input-focused "
                        rows="3"
                    ></textarea>
                </div>
            )}
        </div>
    );
}

function Step3({ form, handleChange }) {

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg">
            <h2 className="text-3xl text-center font-bold mb-4">Descripción del proyecto</h2>

            <label className='text-xl'>Describa la necesidad o problemática detectada. *</label>
            <label className='block text-sm'>(máx 500 palabras)</label>

            <textarea
                name="need"
                maxLength="3000"
                value={form.need}
                onChange={handleChange}
                className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2" rows="4"
                required
            />

            <label className='text-xl'>Objetivos del proyecto. *</label>
            <label className='block text-sm'>(máx 500 palabras)</label>

            <textarea
                name="objectives"
                maxLength="3000"
                value={form.objectives}
                onChange={handleChange}
                className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2" rows="4"
                required
            />

            <label className='text-xl'>Público objetivo y población beneficiaria. *</label>
            <label className='block text-sm'>(máx 500 palabras)</label>

            <textarea
                name="targetAudience"
                maxLength="3000"
                value={form.targetAudience}
                onChange={handleChange}
                className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2" rows="4"
                required
            />

            <label className='text-xl'>Principales actividades realizadas. *</label>
            <label className='block text-sm'>(máx 500 palabras)</label>

            <textarea
                name="activities"
                maxLength="3000"
                value={form.activities}
                onChange={handleChange}
                className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2" rows="4"
                required
            />

            <label className='text-xl'>¿Qué tipo de categoría corresponde el proyecto?</label>
            <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"            >
                <option className='accent-[#5d5593]' value="Operador/Regulador">Operador/Regulador</option>
                <option value="ONG/Academia">ONG/Academia</option>
            </select>
        </div>
    );
}

function Step4({ form, handleChange }) {
    if (form.category === 'Operador/Regulador') {
        return (
            <div className="">
                <h2 className="text-3xl text-center font-bold mb-4">Criterios Operador/Regulador</h2>

                <label className='text-xl'>
                    Describa qué aspectos de su iniciativa son innovadores frente a prácticas tradicionales en movilidad urbana con enfoque de género *
                </label>
                <label className='block text-sm'>(máx 300 palabras)</label>

                <textarea
                    name="innovation"
                    value={form.innovation}
                    onChange={handleChange}
                    className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2" rows="4"
                    maxLength={300 * 6} // Approx 300 words

                />

                <label className='text-xl'>
                    ¿Qué cambios concretos ha generado la iniciativa en la empleabilidad, participación, seguridad o inclusión de mujeres? Incluya indicadores si es posible *
                </label>
                <label className='block text-sm'>(máx 300 palabras)</label>

                <textarea
                    name="impact"
                    value={form.impact}
                    onChange={handleChange}
                    className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2" rows="4"
                    maxLength={300 * 6}

                />

                <label className='text-xl'>
                    ¿Puede aplicarse la iniciativa en otras ciudades o instituciones? ¿Existen herramientas, protocolos o aprendizajes transferibles? *
                </label>
                <label className='block text-sm'>(máx 250 palabras)</label>

                <textarea
                    name="transferability"
                    value={form.transferability}
                    onChange={handleChange}
                    className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2" rows="4"
                    maxLength={250 * 6}
                    required
                />

                <label className='text-xl'>
                    ¿Qué mecanismos aseguran la continuidad de la iniciativa en el tiempo (ej. financiamiento, institucionalización, alianzas)? *
                </label>
                <label className='block text-sm'>(máx 250 palabras)</label>

                <textarea
                    name="sustainability"
                    value={form.sustainability}
                    onChange={handleChange}
                    className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2" rows="4"
                    maxLength={250 * 6}
                    required
                />
            </div>
        );
    }

    if (form.category === 'ONG/Academia') {
        return (
            <div>
                <h2 className="text-3xl text-center font-bold mb-4">ONG / Academia</h2>

                <label className="text-xl">
                    ¿Qué enfoque, herramienta o metodología nueva han desarrollado o adaptado? ¿En qué se diferencia de lo ya existente? *
                </label>
                <label className='block text-sm'>(máx 300 carácteres)</label>

                <textarea
                    name="methodology"
                    value={form.methodology}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded input-focused"
                    rows="4"
                    maxLength={300 * 6}
                />

                <label className="text-xl">
                    ¿Qué resultados o cambios ha generado la iniciativa en actores, políticas, conocimiento o prácticas sociales? Incluya datos si los tiene *
                </label>
                <label className='block text-sm'>(máx 300 carácteres)</label>

                <textarea
                    name="outcomes"
                    value={form.outcomes}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border input-focused rounded"
                    rows="4"
                    maxLength={300 * 6}
                />

                <label className="text-xl">
                    ¿Puede aplicarse la propuesta en otros contextos? ¿Han transferido o compartido su trabajo con otras organizaciones o instituciones? *
                </label>
                <label className='block text-sm'>(máx 250 carácteres)</label>

                <textarea
                    name="transferability"
                    value={form.transferability}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded input-focused"
                    rows="4"
                    maxLength={250 * 6}
                />

                <label className="text-xl">
                    ¿Qué continuidad ha tenido o tendrá la iniciativa tras su primera fase? ¿Existen redes, recursos o estructuras que la sostienen? *
                </label>
                <label className='block text-sm'>(máx 250 carácteres)</label>

                <textarea
                    name="sustainability"
                    value={form.sustainability}
                    onChange={handleChange}
                    className="w-full p-2 mb-6 border rounded input-focused"
                    rows="4"
                    maxLength={250 * 6}
                />
            </div>
        );
    }


}


function Step5({ form, handleInputChange, handleAddLink, handleLetterChange, handleLinkChange, handleFileChange, handleRemoveLink }) {
    return (
        <div>
            <h2 className="text-3xl text-center font-bold mb-4">Material de respaldo</h2>

            <label className="text-xl">
                Link a publicaciones, evaluaciones, informes, materiales metodológicos o registros de impacto.            </label>
            {form.links.map((link, index) => (
                <div key={index} className="mb-3 flex items-center">
                    <input
                        type="url"
                        value={link}
                        placeholder='https://'
                        onChange={(e) => handleLinkChange(index, e.target.value)}
                        className="w-full p-2 border rounded my-2 input-focused"
                    />

                </div>
            ))}


            <label className="block text-xl">
                Adjunte publicaciones, evaluaciones, informes, materiales metodológicos o registros de impacto.
            </label>
            <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="my-4 w-full border py-7 rounded input-focused "
            />
            <div>
                {form.files.map((file, index) => (
                    <div key={index} className="mt-2 p-2 border border-gray-300 rounded-md">
                        <p>{file.name} ({file.type})</p>
                    </div>
                ))}
            </div>

            <label className="block text-xl">¿Desea compartir un video corto (máx. 2 minutos) que muestre la
                experiencia o testimonios relevantes? (opcional)</label>
            <label className="block text-sm">(Enlace a YouTube, Vimeo o archivo compartido)</label>
            <input
                type="url"
                name="video"
                value={form.video}
                onChange={handleInputChange}

                className="w-full p-2 mb-2 border rounded input-focused"
            />

            <label className="block text-xl">
                ¿La iniciativa cuenta con algún reconocimiento o premio previo? (opcional)
            </label>
            <label className="block text-sm">(Indicar cuál y en qué año, si aplica)</label>

            <input
                type="text"
                name="recognition"
                value={form.recognition}
                onChange={handleInputChange}
                className="w-full p-2 mb-4 border rounded input-focused"
            />

            <label className="block text-xl">
                Adjunte carta de autorización del/de la representante legal
            </label>
            <input
                type="file"
                multiple
                onChange={handleLetterChange}
                className="my-4 w-full border py-7 rounded input-focused "
            />
            <div>
                {form.acceptanceLetter.map((file, index) => (
                    <div key={index} className="mt-2 p-2 border border-gray-300 rounded-md">
                        <p>{file.name} ({file.type})</p>
                    </div>
                ))}
            </div>

            <div className="flex items-start mb-6">
                <label className="flex items-start text-sm cursor-pointer">
                    <input
                        type="checkbox"
                        name="accepted"
                        checked={form.accepted}
                        onChange={handleInputChange}
                        className="mr-2 mt-1 accent-[#5d5593]"
                    />
                    Declaro que la información entregada en este formulario es veraz y autorizo el uso de los antecedentes y material gráfico entregado para fines de difusión del concurso SoMoS LAC.
                </label>
            </div>

        </div>
    );
}


export default function FormWizard() {
    const navigate = useNavigate();
    const { createFicha } = useFichas();

    const [errors, setErrors] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [form, setForm] = useState({
        organizationName: '',
        organizationType: '',
        country: '',
        legalRepName: '',
        legalRepPosition: '',
        email: '',
        phone: '',
        registrationId: '',
        team: [{ name: '', position: '', email: '' }],
        associations: [],
        name: '',
        city: '',
        startDate: '',
        isActive: true,
        reasonInactive: '',
        need: '',
        objectives: '',
        targetAudience: '',
        activities: '',
        category: 'Operador/Regulador',
        innovation: '',
        impact: '',
        methodology: '',
        outcomes: '',
        transferability: '',
        sustainability: '',
        links: [''],
        files: [],
        video: '',
        recognition: '',
        acceptanceLetter: [],
        accepted: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // Helper function to validate phone format
    const isValidPhone = (phone) => {
      const phoneRegex = /^\+?\d{7,15}$/;
      return phoneRegex.test(phone);
    };

    // Helper function to validate email format
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateStep = () => {
        const newErrors = [];

        // Validaciones para Step 1
        if (currentStep === 0) {
            if (!form.organizationName) newErrors.push('El nombre de la organización es requerido.');
            if (!form.organizationType) newErrors.push('El tipo de organización es requerido.');
            if (!form.country) newErrors.push('El país es requerido.');
            if (!form.legalRepName) newErrors.push('El nombre del representante legal es requerido.');
            if (!form.legalRepPosition) newErrors.push('El cargo del representante legal es requerido.');
            if (!form.email) {
                newErrors.push('El correo electrónico es requerido.');
            } else if (!isValidEmail(form.email)) {
                newErrors.push('El correo electrónico tiene un formato inválido.');
            }
            if (!form.phone) {
                newErrors.push('El teléfono de contacto es requerido.');
            } else if (!isValidPhone(form.phone)) {
                newErrors.push('El teléfono de contacto tiene un formato inválido.');
            }
            form.team.forEach((member, index) => {
                if (!member.name) newErrors.push(`El nombre del miembro ${index + 1} del equipo es requerido.`);
                if (!member.position) newErrors.push(`El cargo del miembro ${index + 1} del equipo es requerido.`);
                if (!member.email) {
                    newErrors.push(`El correo electrónico del miembro ${index + 1} del equipo es requerido.`);
                } else if (!isValidEmail(member.email)) {
                    newErrors.push(`El correo electrónico del miembro ${index + 1} tiene un formato inválido.`);
                }
            });
        }
        // Validaciones para Step 2
        if (currentStep === 1) {
            if (!form.name) newErrors.push('El nombre del proyecto es requerido.');
            if (!form.city) newErrors.push('La ciudad de implementación es requerida.');
            if (!form.startDate) newErrors.push('La fecha de inicio es requerida.');
        }
        // Validaciones para Step 3
        if (currentStep === 2) {
            if (!form.need) newErrors.push('La descripción de la necesidad es requerida.');
            if (!form.objectives) newErrors.push('Los objetivos del proyecto son requeridos.');
            if (!form.targetAudience) newErrors.push('El público objetivo es requerido.');
            if (!form.activities) newErrors.push('Las actividades principales son requeridas.');
        }
        // Validaciones para Step 4
        if (currentStep === 3 && form.category === 'Operador/Regulador') {
            if (!form.innovation) newErrors.push('La descripción de los aspectos innovadores es requerida.');
            if (!form.impact) newErrors.push('La descripción de los cambios concretos es requerida.');
            if (!form.transferability) newErrors.push('La información sobre transferibilidad es requerida.');
            if (!form.sustainability) newErrors.push('La información sobre sostenibilidad es requerida.');
        }
        // Validaciones para Step 4
        if (currentStep === 3 && form.category === 'ONG/Academia') {
            if (!form.methodology) newErrors.push('El enfoque, herramienta o metodología es requerida.');
            if (!form.outcomes) newErrors.push('Los resultados o cambios generados son requeridos.');
            if (!form.transferability) newErrors.push('La información sobre transferibilidad es requerida.');
            if (!form.sustainability) newErrors.push('La información sobre sostenibilidad es requerida.');
        }

        // Validaciones para Step 5
        if (currentStep === 4) {
            // Validar enlaces
            form.links.forEach((link, index) => {
                if (!link) {
                    newErrors.push(`El campo link no debe estar vacío.`);
                } else {
                    try {
                        new URL(link); // Verifica si la URL es válida
                    } catch (_) {
                        newErrors.push(`El link ${index + 1} es inválido.`);
                    }
                }
            });

            // // Validar archivos
            // if (form.files.length === 0) {
            //     newErrors.push('Debe adjuntar al menos un archivo.');
            // }

            // Validar carta de aceptación
            if (form.acceptanceLetter.length === 0) {
                newErrors.push('Debe adjuntar la carta de autorización.');
            }
        }
        setErrors(newErrors);
        return newErrors.length === 0;
    };

    const handleRemoveLink = (index) => {
        const newLinks = form.links.filter((_, i) => i !== index);
        setForm({ ...form, links: newLinks });
    };

    const handleTeamChange = (index, e) => {
        const updatedTeam = [...form.team];
        updatedTeam[index][e.target.name] = e.target.value;
        setForm({ ...form, team: updatedTeam });
    };

    const addTeamMember = () => {
        setForm({ ...form, team: [...form.team, { name: '', position: '' }] });
    };

    const removeTeamMember = (index) => {
        const updatedTeam = form.team.filter((_, i) => i !== index);
        setForm({ ...form, team: updatedTeam });
    };

    const handleAssociationChange = (e) => {
        const { value, checked } = e.target;
        setForm({
            ...form,
            associations: checked
                ? [...form.associations, value]
                : form.associations.filter((item) => item !== value),
        });
    };


    const nextStep = () => {
        if (validateStep()) {
            setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
        }
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };
    

    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (form) => {
        console.log(form)
        const ficha = {
            ...form,
            // asegúrate de que no haya propiedades que apunten a elementos no serializables
        };
        console.log(ficha)
        ficha.preventDefault();
        createFicha(ficha).then(res => {
            console.log(res)
            setSuccessMessage('Muchas gracias! Su formulario fue ingresado correctamente.');
            setIsSubmitted(true);
        })

        // Configura el timeout para redireccionar después de 5 segundos
        const timeoutId = setTimeout(() => {
            navigate('/'); // Asegúrate de que '/' sea la ruta al home
        }, 5000);

        // Limpia el timeout si el componente se desmonta antes de que se complete el timeout
        return () => clearTimeout(timeoutId);
    };

    const onSubmit = () => {
        if (validateStep()) {
            const userConfirmed = window.confirm(
                "¿Has revisado todos los datos ingresados? Una vez enviado, no podrás editar la postulación. ¿Deseas continuar?"
            );
    
            if (userConfirmed) {
                // Asegúrate de que `form` tiene todos los datos antes de llamar a `createFicha`
                createFicha(form).then(() => {
                    setSuccessMessage('Muchas gracias! Su formulario fue ingresado correctamente. Ahora será redireccionado al Inicio');
                    setIsSubmitted(true);
    
                    // Configura el timeout para redireccionar después de 5 segundos
                    const timeoutId = setTimeout(() => {
                        navigate('/'); // Asegúrate de que '/' sea la ruta al home
                    }, 5000);
    
                    // Limpia el timeout si es necesario
                    return () => clearTimeout(timeoutId);
                }).catch(error => {
                    console.error('Error al crear la ficha:', error);
                });
            }
        }
    };

    const handleBack = () => {
        if (isSubmitted) {
            navigate('/'); // Asume que '/' es la ruta del home
        } else {
            navigate(-1);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleLinkChange = (index, value) => {
        const newLinks = [...form.links];
        newLinks[index] = value;
        setForm({ ...form, links: newLinks });
    };

    const handleAddLink = () => {
        setForm({ ...form, links: [...form.links, ''] });
    };

    const handleFileChange = (e) => {
        const filesArray = Array.from(e.target.files);

        filesArray.forEach(file => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const base64Data = reader.result;
                const fileInfo = {
                    name: file.name,
                    type: file.type,
                    content: base64Data
                };

                // Agregar el archivo al estado
                setForm(prevForm => ({
                    ...prevForm,
                    files: [...prevForm.files, fileInfo]
                }));
            };
            reader.onerror = error => {
                console.error('Error al leer el archivo:', error);
            };
        });
    };

    const handleLetterChange = (e) => {
        const filesArray = Array.from(e.target.files);

        filesArray.forEach(file => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const base64Data = reader.result;
                const fileInfo = {
                    name: file.name,
                    type: file.type,
                    content: base64Data
                };

                // Agrega el archivo al estado 'acceptanceLetter'
                setForm(prevForm => ({
                    ...prevForm,
                    acceptanceLetter: [...prevForm.acceptanceLetter, fileInfo]
                }));
            };
            reader.onerror = error => {
                console.error('Error al leer el archivo:', error);
            };
        });
    };


    const steps = [
        <Step1
            form={form}
            handleChange={handleChange}
            handleTeamChange={handleTeamChange}
            addTeamMember={addTeamMember}
            removeTeamMember={removeTeamMember}
            handleAssociationChange={handleAssociationChange}
        />,
        <Step2
            form={form}
            handleChange={handleChange}
        />,
        <Step3
            form={form}
            handleChange={handleChange}
        />,
        <Step4
            form={form}
            handleChange={handleChange}
        />,
        <Step5
            form={form}
            handleInputChange={handleInputChange}
            handleAddLink={handleAddLink}
            handleLinkChange={handleLinkChange}
            handleFileChange={handleFileChange}
            handleLetterChange={handleLetterChange}
            handleRemoveLink={handleRemoveLink} // Aquí pasamos la función
        />,
    ];

    const progressPercentage = ((currentStep + 1) / steps.length) * 100;

    return (
        <div className="relative flex items-center justify-center min-h-screen">
            <button onClick={handleBack} className="absolute top-4 left-4 hover:text-[#a49fc4] rounded-md">
                <FaArrowCircleLeft className="text-2xl mr-1 mb-1 inline" />
                <span className="ml-1">Volver</span>
            </button>
    
            <div className="max-w-3xl w-full p-10 rounded-md">
                {/* Progress Indicator and Bar */}
                <div className="mb-6">
                    <div className="text-center text-sm mb-1">
                        {currentStep + 1} de {steps.length}
                    </div>
                    <div className="w-full bg-[#a49fc4] rounded-full h-2.5 overflow-hidden">
                        <div className="bg-[#5d5593] h-2.5" style={{ width: `${progressPercentage}%` }} />
                    </div>
                </div>
    
                <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="max-w-2xl mx-auto p-6 bg-white rounded-lg">
                    {steps[currentStep]}
    
                    {successMessage && (
                        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                            {successMessage}
                        </div>
                    )}
                    {errors.length > 0 && (
                        <div className="my-4 p-4 border border-red-400 text-red-700 rounded">
                            <ul>
                                {errors.map((error, index) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    )}
    
                    {/* Controla que el botón "Siguiente" no envíe el formulario en Step4 */}
                    {currentStep === 0 && (
                        <div className="flex justify-end mt-10">
                            <button
                                type="button"
                                onClick={nextStep}
                                className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]">
                                Siguiente
                            </button>
                        </div>
                    )}
    
                    {currentStep > 0 && currentStep < steps.length - 1 && (
                        <div className="flex justify-between mt-6">
                            <button
                                type="button"
                                onClick={prevStep}
                                className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]">
                                {isSubmitted ? 'Volver' : 'Anterior'}
                            </button>
                            <button
                                type="button"
                                onClick={nextStep}
                                className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]">
                                Siguiente
                            </button>
                        </div>
                    )}
    
                    {currentStep === steps.length - 1 && (
                        <div className="flex justify-between mt-6">
                            <button
                                type="button"
                                onClick={prevStep}
                                className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]">
                                {isSubmitted ? 'Volver' : 'Anterior'}
                            </button>
                            <button
                                type="submit"
                                className={`text-white px-4 py-2 rounded ${form.accepted ? "bg-[#5d5593] hover:bg-[#a49fc4]" : 'bg-purple-300'}`}
                                disabled={!form.accepted || isSubmitted}
                            >
                                Enviar Postulación →
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}