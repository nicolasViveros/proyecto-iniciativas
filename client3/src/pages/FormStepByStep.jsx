import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Step1({ form, handleChange, handleTeamChange, addTeamMember, removeTeamMember, handleAssociationChange }) {
    return (
        <div>
            <h1 className="text-3xl text-center font-bold mb-4">Datos de la organización postulante</h1>

            <label htmlFor="organizationName" className='text-xl'>Nombre de la organización:</label><br />
            <input name="organizationName" value={form.organizationName} onChange={handleChange} placeholder="value" className="w-full border border-gray-300  px-4 py-2 rounded-md my-2" autoFocus />

            <label htmlFor="organizationType" className='text-xl'>Tipo de organización</label><br />
            <div className="mt-2 grid grid-cols-1">
                <select id="organizationType" name="organizationType" value={form.organizationType} onChange={handleChange} className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 px-4 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600">
                    <option value="">Selecciona una opción</option>
                    <option value="Publica">Pública</option>
                    <option value="Privada">Privada</option>
                    <option value="ONG">ONG</option>
                    <option value="Multilateral">Multilateral</option>
                    <option value="Privada y ONG">Privada y ONG</option>
                </select>
            </div>

            <label htmlFor="country" className='text-xl'>País</label><br />
            <div className="mt-2 grid grid-cols-1">
                <select id="country" name="country" value={form.country} onChange={handleChange} className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 px-4 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600">
                    <option value="">Selecciona un país</option>
                    <option value="ar">Argentina</option>
                    <option value="bo">Bolivia</option>
                    <option value="br">Brasil</option>
                    <option value="cl">Chile</option>
                    <option value="co">Colombia</option>
                    <option value="ec">Ecuador</option>
                    <option value="mx">México</option>
                    <option value="py">Paraguay</option>
                    <option value="pe">Perú</option>
                    <option value="uy">Uruguay</option>
                    <option value="ve">Venezuela</option>
                </select>
            </div>

            <label htmlFor="legalRepName" className='text-xl'>Nombre del/la representante legal</label><br />
            <input name="legalRepName" value={form.legalRepName} onChange={handleChange} placeholder="value" className="w-full border border-gray-300  px-4 py-2 rounded-md my-2" />

            <label htmlFor="legalRepPosition" className='text-xl'>Cargo</label><br />
            <input name="legalRepPosition" value={form.legalRepPosition} onChange={handleChange} placeholder="value" className="w-full border border-gray-300  px-4 py-2 rounded-md my-2" />

            <label htmlFor="email" className='text-xl'>Correo electrónico</label><br />
            <input name="email" value={form.email} onChange={handleChange} placeholder="value" type="email" className="w-full border border-gray-300  px-4 py-2 rounded-md my-2" />

            <label htmlFor="phone" className='text-xl'>Teléfono de contacto</label><br />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="value" className="w-full border border-gray-300  px-4 py-2 rounded-md my-2" />

            <label htmlFor="registrationId" className='text-xl'>RUT/NIT/CNPJ/Registro legal</label><br />
            <input name="registrationId" value={form.registrationId} onChange={handleChange} placeholder="value" className="w-full border border-gray-300  px-4 py-2 rounded-md my-2" />

            <h3 className="text-2xl font-semibold my-5 underline">Equipo responsable</h3>
            <h3 className="text-xl font-semibold my-5">Enumere los nombres de las principales personas y cargos implicados en la realización del proyecto o iniciativa* </h3>
            <div className="grid grid-cols-5 gap-2">
                <div className='col-span-2'><label>Nombre</label> </div>
                <div className='col-span-2'><label>Cargo</label> </div>
            </div>

            {form.team.map((member, index) => (
                <div key={index} className="grid grid-cols-5 gap-1">
                    <div className='col-span-2'>
                        <input name="name" value={member.name} onChange={(e) => handleTeamChange(index, e)} placeholder="nombre" className="w-full border border-gray-300  px-4 py-2 rounded-md my-2" />
                    </div>
                    <div className='col-span-2'>
                        <input name="position" value={member.position} onChange={(e) => handleTeamChange(index, e)} placeholder="cargo" className="w-full border border-gray-300  px-4 py-2 rounded-md my-2" />
                    </div>
                    <div>
                        <button type="button" onClick={() => removeTeamMember(index)} className="text-red-600 w-full py-4 hover:text-gray-400">
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}

            <button type="button" onClick={addTeamMember} className="hover:text-green-400 underline"> + Agregar responsable</button>

            <h3 className="text-xl font-semibold my-5">¿Hubo asociaciones para el desarrollo? En caso afirmativo, indique los sectores asociados* </h3>
            <div className="grid grid-cols-2 gap-2">
                {["No", "Otras Secretarías", "ONGs y Sociedad Civil", "Instituciones educativas y de investigación", "Empresas", "Organizaciones multilaterales (como el BID, el Banco Mundial y la ONU)", "Organizaciones Internacionales", "Otras organizaciones"].map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            value={option}
                            checked={form.associations.includes(option)}
                            onChange={handleAssociationChange}
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
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">Información del proyecto postulado</h2>

            <label className="block mb-2">Nombre del proyecto o iniciativa:</label>
            <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
                required
            />

            <label className="block mb-2">Ciudad de implementación del proyecto:</label>
            <input
                name="city"
                type="text"
                value={form.city}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
                required
            />

            <label className="block mb-2">Fecha de inicio de implementación:</label>
            <input
                name="startDate"
                type="date"
                value={form.startDate}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
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
                        className="mr-2"
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
                        className="mr-2"
                    />
                    No
                </label>
            </div>

            {!form.isActive && (
                <div className="mb-4">
                    <label className="block mb-2">En caso de no estar vigente, explique brevemente por qué:</label>
                    <textarea
                        name="reasonInactive"
                        value={form.reasonInactive}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        rows="3"
                    ></textarea>
                </div>
            )}
        </div>
    );
}

function Step3({ form, handleChange }) {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">Descripción del proyecto</h2>

            <label className="block mb-1">Describa la necesidad o problemática detectada.</label>
            <textarea
                name="need"
                maxLength="3000"
                value={form.need}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
                rows="4"
            />

            <label className="block mb-1">Objetivos del proyecto.</label>
            <textarea
                name="objectives"
                maxLength="3000"
                value={form.objectives}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
                rows="4"
            />

            <label className="block mb-1">Público objetivo y población beneficiaria.</label>
            <textarea
                name="targetAudience"
                maxLength="3000"
                value={form.targetAudience}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
                rows="4"
            />

            <label className="block mb-1">Principales actividades realizadas</label>
            <textarea
                name="activities"
                maxLength="3000"
                value={form.activities}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
                rows="4"
            />

            <label className="block mb-2">¿Qué tipo de categoría corresponde el proyecto?</label>
            <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full p-2 mb-6 border rounded"
            >
                <option value="Operador/Regulador">Operador/Regulador</option>
                <option value="ONG/Academia">ONG/Academia</option>
            </select>
        </div>
    );
}

function Step4({ form, handleChange }) {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">Criterios Operador/Regulador</h2>
    
          <label className="block mb-1">
            Describa qué aspectos de su iniciativa son innovadores frente a prácticas tradicionales en movilidad urbana con enfoque de género.
          </label>
          <textarea
            name="innovation"
            value={form.innovation}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            rows="4"
            maxLength={300 * 6} // Approx 300 words
          />
    
          <label className="block mb-1">
            ¿Qué cambios concretos ha generado la iniciativa en la empleabilidad, participación, seguridad o inclusión de mujeres? Incluya indicadores si es posible
          </label>
          <textarea
            name="impact"
            value={form.impact}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            rows="4"
            maxLength={300 * 6}
          />
    
          <label className="block mb-1">
            ¿Puede aplicarse la iniciativa en otras ciudades o instituciones? ¿Existen herramientas, protocolos o aprendizajes transferibles?
          </label>
          <textarea
            name="transferability"
            value={form.transferability}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            rows="4"
            maxLength={250 * 6}
          />
    
          <label className="block mb-1">
            ¿Qué mecanismos aseguran la continuidad de la iniciativa en el tiempo (ej. financiamiento, institucionalización, alianzas)?
          </label>
          <textarea
            name="sustainability"
            value={form.sustainability}
            onChange={handleChange}
            className="w-full p-2 mb-6 border rounded"
            rows="4"
            maxLength={250 * 6}
          />
        </div>
    );
}


function Step5({ form, handleInputChange, handleAddLink, handleLinkChange, handleFileChange }) {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Material de respaldo</h2>
    
          {form.links.map((link, index) => (
            <div key={index} className="mb-3">
              <label className="block mb-1">
                Link de informes, fotografías, evaluaciones, artículos u otro material que respalde los resultados:
              </label>
              <input
                type="url"
                value={link}
                onChange={(e) => handleLinkChange(index, e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddLink}
            className="text-sm text-purple-700 hover:underline mb-4"
          >
            Agregar link
          </button>
    
          <label className="block mb-1">Adjunte publicaciones, evaluaciones, informes, materiales metodológicos o registros de impacto:</label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="mb-4 w-full border p-2 rounded"
          />
    
          <label className="block mb-1">¿Desea compartir un video corto (máx. 2 minutos)?</label>
          <input
            type="url"
            name="video"
            value={form.video}
            onChange={handleInputChange}
            placeholder="Enlace a YouTube, Vimeo o archivo compartido"
            className="w-full p-2 mb-4 border rounded"
          />
    
          <label className="block mb-1">¿La iniciativa cuenta con algún reconocimiento o premio previo?</label>
          <input
            type="text"
            name="recognition"
            value={form.recognition}
            onChange={handleInputChange}
            placeholder="Indicar cuál y en qué año, si aplica"
            className="w-full p-2 mb-4 border rounded"
          />
    
          <div className="flex items-start mb-6">
            <input
              type="checkbox"
              name="accepted"
              checked={form.accepted}
              onChange={handleInputChange}
              className="mr-2 mt-1"
            />
            <label className="text-sm">
              Declaro que la información entregada en este formulario es veraz y autorizo el uso de los antecedentes y material gráfico entregado para fines de difusión del concurso SoMoS LAC.
            </label>
          </div>
    
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700"
            disabled={!form.accepted}
          >
            Enviar postulación →
          </button>
        </div>
    );
}


export default function FormWizard() {
    const navigate = useNavigate();
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
        team: [{ name: '', position: '' }],
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
        transferability: '',
        sustainability: '',
        links: [''],
        files: [],
        video: '',
        recognition: '',
        accepted: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
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
        setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    const handleBack = () => {
        navigate(-1);
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
        setForm({ ...form, files: Array.from(e.target.files) });
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
        <Step3 form={form} handleChange={handleChange} />,
        <Step4 form={form} handleChange={handleChange} />,
        <Step5 
        form={form} 
        handleInputChange={handleInputChange} 
        handleAddLink={handleAddLink}
        handleLinkChange={handleLinkChange} 
        handleFileChange={handleFileChange} 
    />,
    ];

    const progressPercentage = ((currentStep + 1) / steps.length) * 100;

    return (
        <div className="relative flex items-center justify-center min-h-screen">
            {/* Back Button */}
            <button onClick={handleBack} className="absolute top-4 left-4 hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="ml-2">Volver</span>
            </button>

            <div className="border border-gray-400 max-w-3xl w-full p-10 rounded-md">

                {/* Progress Indicator and Bar */}
                <div className="mb-6">
                    <div className="text-center text-sm  mb-1">
                        {currentStep + 1} de {steps.length}
                    </div>
                    <div className="w-full bg-[#a49fc4] rounded-full h-2.5 overflow-hidden">
                        <div
                            className="bg-[#5d5593] h-2.5"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                </div>


                <form onSubmit={handleSubmit}>
                    {steps[currentStep]}
                </form>

                {currentStep === 0 && (
                    <div className="flex justify-end mt-10">
                        <button type="button" onClick={nextStep} className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]">
                            Siguiente
                        </button>
                    </div>
                )}

                {currentStep > 0 && (
                    <div className="flex justify-between mt-6">
                        <button type="button" onClick={prevStep} className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]">
                            Anterior
                        </button>
                        {currentStep < steps.length - 1 ? (
                            <button type="button" onClick={nextStep} className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]">
                                Siguiente
                            </button>
                        ) : (
                            <button type="submit" onClick={handleSubmit} className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]">
                                Enviar Postulación →
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}