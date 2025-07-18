
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFichas } from "../context/FichasContext";
import { useLanguage } from "../context/LanguageContext";
import { FaArrowCircleLeft } from "react-icons/fa";

function Step1({
  form,
  handleChange,
  handleTeamChange,
  addTeamMember,
  removeTeamMember,
  handleAssociationChange,
  translateText,
  language,
}) {
  const [organizationType, setOrganizationType] = useState(
    form.organizationType
  );
  const [otherOrganizationType, setOtherOrganizationType] = useState("");
  const [country, setCountry] = useState(form.country);
  const [otherCountry, setOtherCountry] = useState("");

  const handleOrganizationTypeChange = (e) => {
    const { value } = e.target;
    setOrganizationType(value);
    handleChange(e);

    if (value !== "Otra") {
      setOtherOrganizationType("");
    }
  };

  const handleCountryChange = (e) => {
    const { value } = e.target;
    setCountry(value);
    handleChange(e);

    if (value !== "Otro") {
      setOtherCountry("");
    }
  };

  useEffect(() => {
    if (organizationType === "Otra" && otherOrganizationType !== form.organizationType) {
      handleChange({
        target: { name: "organizationType", value: otherOrganizationType },
      });
    }
  }, [organizationType, otherOrganizationType, handleChange, form.organizationType]);

  useEffect(() => {
    if (country === "Otro" && otherCountry !== form.country) {
      handleChange({ target: { name: "country", value: otherCountry } });
    }
  }, [country, otherCountry, handleChange, form.country]);

  return (

    <div>

      <h1 className="text-3xl text-center font-bold mb-4">
        {translateText[language].organizationDetails}
      </h1>

      <label htmlFor="organizationName" className="text-xl">
        {translateText[language].organizationName}
      </label>
      <br />
      <input
        name="organizationName"
        value={form.organizationName}
        onChange={handleChange}
        className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
        autoFocus
        required
      />

      <label htmlFor="organizationType" className="text-xl">
        {translateText[language].organizationType}
      </label>
      <br />
      <div className="mt-2 grid grid-cols-1">
        <select
          id="organizationType"
          name="organizationType"
          value={organizationType}
          onChange={handleOrganizationTypeChange}
          className="col-start-1 row-start-1 w-full input-focused appearance-none rounded-md py-2 px-4 outline-1 outline-gray-300 focus:outline-2 focus:outline-[#5D5594]"
        >
          <option value="">
            {language === "es" ? "Selecciona un tipo" : "Select a type"}
          </option>
          <option value="Publica">
            {language === "es" ? "Pública" : "Public"}
          </option>
          <option value="Privada">
            {language === "es" ? "Privada" : "Private"}
          </option>
          <option value="ONG">ONG</option>
          <option value="Multilateral">
            {language === "es" ? "Multilateral" : "Multilateral"}
          </option>
          <option value="Privada y ONG">
            {language === "es" ? "Privada y ONG" : "Private and NGO"}
          </option>
          <option value="Otra">
            {language === "es" ? "Otra..." : "Other..."}
          </option>
        </select>
      </div>

      {organizationType === "Otra" && (
        <input
          name="otherOrganizationType"
          value={otherOrganizationType}
          onChange={(e) => setOtherOrganizationType(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded-md my-2 input-focused"
          placeholder={
            language === "es"
              ? "Especifica el tipo de organización"
              : "Specify organization type"
          }
          required
        />
      )}

      <label htmlFor="country" className="text-xl">
        {translateText[language].country}
      </label>
      <br />
      <div className="mt-2 grid grid-cols-1">
        <select
          id="country"
          name="country"
          value={country}
          onChange={handleCountryChange}
          className="col-start-1 row-start-1 w-full appearance-none input-focused rounded-md py-2 px-4 outline-1 outline-gray-300 focus:outline-2 focus:outline-[#5D5594]"
        >
          <option value="">
            {language === "es" ? "Selecciona un país" : "Select a country"}
          </option>
          <option value="Internacional">
            {language === "es" ? "Internacional" : "International"}
          </option>
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
          <option value="Otro">
            {language === "es" ? "Otro..." : "Other..."}
          </option>
        </select>
      </div>

      {country === "Otro" && (
        <input
          name="otherCountry"
          value={otherCountry}
          onChange={(e) => setOtherCountry(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded-md my-2 input-focused"
          placeholder={
            language === "es" ? "Especifica el país" : "Specify country"
          }
          required
        />
      )}

      <label htmlFor="legalRepName" className="text-xl">
        {translateText[language].legalRepName}
      </label>
      <br />
      <input
        name="legalRepName"
        value={form.legalRepName}
        onChange={handleChange}
        className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
        required
      />

      <label htmlFor="legalRepPosition" className="text-xl">
        {translateText[language].legalRepPosition}
      </label>
      <br />
      <input
        name="legalRepPosition"
        value={form.legalRepPosition}
        onChange={handleChange}
        className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
        required
      />

      <label htmlFor="email" className="text-xl">
        {translateText[language].email}
      </label>
      <br />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        type="email"
        className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
        required
      />

      <label htmlFor="phone" className="text-xl">
        {translateText[language].phone}
      </label>
      <br />
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
        required
      />

      <label htmlFor="registrationId" className="text-xl">
        {translateText[language].registrationId}
      </label>
      <br />
      <input
        name="registrationId"
        value={form.registrationId}
        onChange={handleChange}
        className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
        required
      />

      <h3 className="text-xl mt-5 ">
        {translateText[language].team}
      </h3>
      <h3 className="text-sm">
        {language === "es"
          ? "Enumere los nombres de las principales personas y cargos implicados en la realización del proyecto o iniciativa*"
          : "List the names of the main people and positions involved in the implementation of the project or initiative*"}{" "}
      </h3>


      {form.team.map((member, index) => (
        <div key={index} className="grid grid-cols-5 gap-1 my-1">
          <div className="col-span-2">
            <label>{language === "es" ? "Nombre*" : "Name*"}</label>
            <input
              name="name"
              value={member.name}
              onChange={(e) => handleTeamChange(index, e)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
            />
          </div>
          <div className="col-span-2">
            <label>{language === "es" ? "Cargo*" : "Position*"}</label>
            <input
              name="position"
              value={member.position}
              onChange={(e) => handleTeamChange(index, e)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
            />
          </div>
          {index > 0 && (
            <div>
              <button
                type="button"
                onClick={() => removeTeamMember(index)}
                className="text-red-600 w-full py-1 hover:underline"
              >
                {language === "es" ? "Eliminar" : "Delete"}
              </button>
            </div>
          )}
          <div className="col-span-4">
            <label>{language === "es" ? "Email*" : "Email*"}</label>
            <input
              name="email"
              type="email"
              value={member.email}
              onChange={(e) => handleTeamChange(index, e)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addTeamMember}
        className=" hover:underline"
      >
        {" "}
        {language === "es" ? "+ Agregar responsable" : "+ Add responsible"}
      </button>

      <h3 className="text-xl my-5">
        {translateText[language].associations}{" "}
      </h3>
      <div className="grid grid-cols-2 gap-2 ">
        {[
          "No",
          "Otras Secretarías",
          "ONGs y Sociedad Civil",
          "Instituciones educativas y de investigación",
          "Empresas",
          "Organizaciones multilaterales (como el BID, el Banco Mundial y la ONU)",
          "Organizaciones Internacionales",
          "Otras organizaciones",
        ].map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={option}
              checked={form.associations.includes(option)}
              onChange={handleAssociationChange}
              className="input-focused   accent-[#5d5593]"
            />
            <span>
              {language === "es" ? option : translateAssociation(option)}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

function translateAssociation(option) {
  switch (option) {
    case "No":
      return "No";
    case "Otras Secretarías":
      return "Other Secretariats";
    case "ONGs y Sociedad Civil":
      return "NGOs and Civil Society";
    case "Instituciones educativas y de investigación":
      return "Educational and Research Institutions";
    case "Empresas":
      return "Companies";
    case "Organizaciones multilaterales (como el BID, el Banco Mundial y la ONU)":
      return "Multilateral Organizations (such as IDB, World Bank, and UN)";
    case "Organizaciones Internacionales":
      return "International Organizations";
    case "Otras organizaciones":
      return "Other organizations";
    default:
      return option;
  }
}

function Step2({ form, handleChange, translateText, language }) {
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    const booleanValue = value === "true";
    handleChange({ target: { name, value: booleanValue } });
  };

  return (
    <div>
      <h2 className="text-3xl text-center font-bold mb-4">
        {translateText[language].projectInfo}
      </h2>

      <label className="text-xl">{translateText[language].projectName}</label>
      <input
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
        required
      />

      <label className="text-xl">{translateText[language].projectCity}</label>
      <input
        name="city"
        type="text"
        value={form.city}
        onChange={handleChange}
        className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
        required
      />

      <label className="text-xl">{translateText[language].startDate}</label>
      <input
        name="startDate"
        type="date"
        value={form.startDate}
        onChange={handleChange}
        className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused "
        required
      />

      <label className="block mb-2">{translateText[language].isActive}</label>
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
          {translateText[language].yes}
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
          {translateText[language].no}
        </label>
      </div>

      {!form.isActive && (
        <div className="mb-4">
          <label className="block text-xl">
            {translateText[language].reasonInactive}
          </label>
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

function Step3({ form, handleChange, translateText, language }) {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg">
      <h2 className="text-3xl text-center font-bold mb-4">
        {translateText[language].projectDescription}
      </h2>

      <label className="text-xl">{translateText[language].need}</label>
      <label className="block text-sm">
        {translateText[language].max500words}
      </label>

      <textarea
        name="need"
        maxLength="3000"
        value={form.need}
        onChange={handleChange}
        className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2"
        rows="4"
        required
      />

      <label className="text-xl">{translateText[language].objectives}</label>
      <label className="block text-sm">
        {translateText[language].max500words}
      </label>

      <textarea
        name="objectives"
        maxLength="3000"
        value={form.objectives}
        onChange={handleChange}
        className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2"
        rows="4"
        required
      />

      <label className="text-xl">
        {translateText[language].targetAudience}
      </label>
      <label className="block text-sm">
        {translateText[language].max500words}
      </label>

      <textarea
        name="targetAudience"
        maxLength="3000"
        value={form.targetAudience}
        onChange={handleChange}
        className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2"
        rows="4"
        required
      />

      <label className="text-xl">{translateText[language].activities}</label>
      <label className="block text-sm">
        {translateText[language].max500words}
      </label>

      <textarea
        name="activities"
        maxLength="3000"
        value={form.activities}
        onChange={handleChange}
        className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2"
        rows="4"
        required
      />

      <label className="text-xl">
        {translateText[language].projectCategory}
      </label>
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
      >
        <option className="accent-[#5d5593]" value="Operador/Regulador">
          {language === "es" ? "Operador/Regulador" : "Operator/Regulator"}
        </option>
        <option value="ONG/Academia">
          {language === "es" ? "ONG/Academia" : "NGO/Academy"}
        </option>
      </select>
    </div>
  );
}

function Step4({ form, handleChange, translateText, language }) {
  if (form.category === "Operador/Regulador") {
    return (
      <div className="">
        <h2 className="text-3xl text-center font-bold mb-4">
          {translateText[language].operatorRegulatorCriteria}
        </h2>

        <label className="text-xl">{translateText[language].innovation}</label>
        <label className="block text-sm">
          {translateText[language].max300words}
        </label>

        <textarea
          name="innovation"
          value={form.innovation}
          onChange={handleChange}
          className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2"
          rows="4"
          maxLength={300 * 6}
        />

        <label className="text-xl">{translateText[language].impact}</label>
        <label className="block text-sm">
          {translateText[language].max300words}
        </label>

        <textarea
          name="impact"
          value={form.impact}
          onChange={handleChange}
          className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2"
          rows="4"
          maxLength={300 * 6}
        />

        <label className="text-xl">
          {translateText[language].transferability}
        </label>
        <label className="block text-sm">
          {translateText[language].max250words}
        </label>

        <textarea
          name="transferability"
          value={form.transferability}
          onChange={handleChange}
          className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2"
          rows="4"
          maxLength={250 * 6}
          required
        />

        <label className="text-xl">
          {translateText[language].sustainability}
        </label>
        <label className="block text-sm">
          {translateText[language].max250words}
        </label>

        <textarea
          name="sustainability"
          value={form.sustainability}
          onChange={handleChange}
          className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2"
          rows="4"
          maxLength={250 * 6}
          required
        />
      </div>
    );
  }

  if (form.category === "ONG/Academia") {
    return (
      <div>
        <h2 className="text-3xl text-center font-bold mb-4">
          {translateText[language].ngoAcademyCriteria}
        </h2>

        <label className="text-xl">{translateText[language].methodology}</label>
        <label className="block text-sm">
          {translateText[language].max300characters}
        </label>

        <textarea
          name="methodology"
          value={form.methodology}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded input-focused"
          rows="4"
          maxLength={300 * 6}
        />

        <label className="text-xl">{translateText[language].outcomes}</label>
        <label className="block text-sm">
          {translateText[language].max300characters}
        </label>

        <textarea
          name="outcomes"
          value={form.outcomes}
          onChange={handleChange}
          className="w-full p-2 mb-4 border input-focused rounded"
          rows="4"
          maxLength={300 * 6}
        />

        <label className="text-xl">
          {translateText[language].transferabilityOng}
        </label>
        <label className="block text-sm">
          {translateText[language].max250characters}
        </label>

        <textarea
          name="transferability"
          value={form.transferability}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded input-focused"
          rows="4"
          maxLength={250 * 6}
        />

        <label className="text-xl">
          {translateText[language].sustainabilityOng}
        </label>
        <label className="block text-sm">
          {translateText[language].max250characters}
        </label>

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

function Step5({
  form,
  handleInputChange,
  handleAddLink,
  handleLetterChange,
  handleLinkChange,
  handleFileChange,
  translateText,
  language,
}) {
  return (
    <div>
      <h2 className="text-3xl text-center font-bold mb-4">
        {translateText[language].supportMaterial}
      </h2>

      <label className="text-xl">{translateText[language].links}</label>
      {form.links.map((link, index) => (
        <div key={index} className="mb-3 flex items-center">
          <input
            type="url"
            value={link}
            placeholder="https://"
            onChange={(e) => handleLinkChange(index, e.target.value)}
            className="w-full p-2 border rounded my-2 input-focused"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddLink}
        className=" hover:underline"
      >
        {" "}
        {language === "es" ? "+ Agregar enlace" : "+ Add link"}
      </button>

      <label className="block text-xl">
        {translateText[language].attachFiles}
      </label>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="my-4 w-full border py-7 rounded input-focused "
      />
      <div>
        {form.files.map((file, index) => (
          <div
            key={index}
            className="mt-2 p-2 border border-gray-300 rounded-md"
          >
            <p>
              {file.name} ({file.type})
            </p>
          </div>
        ))}
      </div>

      <label className="block text-xl">
        {translateText[language].videoPrompt}
      </label>
      <label className="block text-sm">
        {translateText[language].videoHint}
      </label>
      <input
        type="url"
        name="video"
        value={form.video}
        onChange={handleInputChange}
        className="w-full p-2 mb-2 border rounded input-focused"
      />

      <label className="block text-xl">
        {translateText[language].recognitionPrompt}
      </label>
      <label className="block text-sm">
        {translateText[language].recognitionHint}
      </label>

      <input
        type="text"
        name="recognition"
        value={form.recognition}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border rounded input-focused"
      />

      <label className="block text-xl">
        {translateText[language].attachLetter}
      </label>
      <input
        type="file"
        multiple
        onChange={handleLetterChange}
        className="my-4 w-full border py-7 rounded input-focused "
      />
      <div>
        {form.acceptanceLetter.map((file, index) => (
          <div
            key={index}
            className="mt-2 p-2 border border-gray-300 rounded-md"
          >
            <p>
              {file.name} ({file.type})
            </p>
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
          {translateText[language].declaration}
        </label>
      </div>
    </div>
  );
}

export default function FormWizard() {
  const navigate = useNavigate();
  const { createFicha } = useFichas();
  const { language, toggleLanguage } = useLanguage();
  const [errors, setErrors] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState({
    organizationName: "",
    organizationType: "",
    country: "",
    legalRepName: "",
    legalRepPosition: "",
    email: "",
    phone: "",
    registrationId: "",
    team: [{ name: "", position: "", email: "" }],
    associations: [],
    name: "",
    city: "",
    startDate: "",
    isActive: true,
    reasonInactive: "",
    need: "",
    objectives: "",
    targetAudience: "",
    activities: "",
    category: "Operador/Regulador",
    innovation: "",
    impact: "",
    methodology: "",
    outcomes: "",
    transferability: "",
    sustainability: "",
    links: [""],
    files: [],
    video: "",
    recognition: "",
    acceptanceLetter: [],
    accepted: false,
  });

  const translateText = {
    es: {
      organizationDetails: "Datos de la organización postulante",
      organizationName: "Nombre de la organización *",
      organizationType: "Tipo de organización *",
      country: "País",
      legalRepName: "Nombre de el/la representante legal o responsable*",
      legalRepPosition: "Cargo *",
      email: "Correo electrónico *",
      phone: "Teléfono de contacto *",
      registrationId: "RUT/NIT/CNPJ/Registro legal",
      team: "Equipo responsable",
      associations:
        "¿Hubo asociaciones para el desarrollo? En caso afirmativo, indique los sectores asociados *",
      projectInfo: "Información del proyecto postulado",
      projectName: "Nombre del proyecto o iniciativa:",
      projectCity: "Ciudad de implementación del proyecto:",
      startDate: "Fecha de inicio de implementación:",
      isActive: "¿Se encuentra vigente?",
      yes: "Sí",
      no: "No",
      reasonInactive:
        "En caso de no estar vigente, explique brevemente por qué:",
      projectDescription: "Descripción del proyecto",
      need: "Describa la necesidad o problemática detectada. *",
      objectives: "Objetivos del proyecto. *",
      targetAudience: "Público objetivo y población beneficiaria. *",
      activities: "Principales actividades realizadas. *",
      projectCategory: "¿Qué tipo de categoría corresponde el proyecto?",
      operatorRegulatorCriteria: "Criterios Operador/Regulador",
      innovation:
        "Describa qué aspectos de su iniciativa son innovadores frente a prácticas tradicionales en movilidad urbana con enfoque de género *",
      impact:
        "¿Qué cambios concretos ha generado la iniciativa en la empleabilidad, participación, seguridad o inclusión de mujeres? Incluya indicadores si es posible *",
      transferability:
        "¿Puede aplicarse la iniciativa en otras ciudades o instituciones? ¿Existen herramientas, protocolos o aprendizajes transferibles? *",
      sustainability:
        "¿Qué mecanismos aseguran la continuidad de la iniciativa en el tiempo (ej. financiamiento, institucionalización, alianzas)? *",
      ngoAcademyCriteria: "ONG / Academia",
      methodology:
        "¿Qué enfoque, herramienta o metodología nueva han desarrollado o adaptado? ¿En qué se diferencia de lo ya existente? *",
      outcomes:
        "¿Qué resultados o cambios ha generado la iniciativa en actores, políticas, conocimiento o prácticas sociales? Incluya datos si los tiene *",
      transferabilityOng:
        "¿Puede aplicarse la propuesta en otros contextos? ¿Han transferido o compartido su trabajo con otras organizaciones o instituciones? *",
      sustainabilityOng:
        "¿Qué continuidad ha tenido o tendrá la iniciativa tras su primera fase? ¿Existen redes, recursos o estructuras que la sostienen? *",
      supportMaterial: "Material de respaldo",
      links:
        "Link a publicaciones, evaluaciones, informes, materiales metodológicos o registros de impacto.",
      attachFiles:
        "Adjunte publicaciones, evaluaciones, informes, materiales metodológicos o registros de impacto.",
      videoPrompt:
        "¿Desea compartir un video corto (máx. 2 minutos) que muestre la experiencia o testimonios relevantes? (opcional)",
      videoHint: "(Enlace a YouTube, Vimeo o archivo compartido)",
      recognitionPrompt:
        "¿La iniciativa cuenta con algún reconocimiento o premio previo? (opcional)",
      recognitionHint: "(Indicar cuál y en qué año, si aplica)",
      attachLetter:
        "Adjunte carta de autorización del/de la representante legal",
      declaration:
        "Declaro que la información entregada en este formulario es veraz y autorizo el uso de los antecedentes y material gráfico entregado para fines de difusión del concurso SoMoS LAC.",
      max500words: "(máx 500 palabras)",
      max300words: "(máx 300 palabras)",
      max250words: "(máx 250 palabras)",
      max300characters: "(máx 300 carácteres)",
      max250characters: "(máx 250 carácteres)",
      next: "Siguiente",
      previous: "Anterior",
      submit: "Enviar Postulación →",
      return: "Volver",
      confirm:
        "¿Has revisado todos los datos ingresados? Una vez enviado, no podrás editar la postulación. ¿Deseas continuar?",
    },
    en: {
      organizationDetails: "Applicant Organization Details",
      organizationName: "Organization Name *",
      organizationType: "Organization Type *",
      country: "Country",
      legalRepName: "Legal Representative Name *",
      legalRepPosition: "Position *",
      email: "Email *",
      phone: "Contact Phone *",
      registrationId: "RUT/NIT/CNPJ/Legal Registration",
      team: "Responsible Team",
      associations:
        "Were there associations in the development? If yes, indicate the associated sectors *",
      projectInfo: "Project Information",
      projectName: "Project or Initiative Name:",
      projectCity: "Project Implementation City:",
      startDate: "Start Date of Implementation:",
      isActive: "Is it currently active?",
      yes: "Yes",
      no: "No",
      reasonInactive: "If not active, briefly explain why:",
      projectDescription: "Project Description",
      need: "Describe the identified need or problem. *",
      objectives: "Project objectives. *",
      targetAudience: "Target audience and beneficiary population. *",
      activities: "Main activities carried out. *",
      projectCategory: "What type of category does the project correspond to?",
      operatorRegulatorCriteria: "Operator/Regulator Criteria",
      innovation:
        "Describe what aspects of your initiative are innovative compared to traditional practices in urban mobility with a gender focus *",
      impact:
        "What concrete changes has the initiative generated in the employability, participation, safety, or inclusion of women? Include indicators if possible *",
      transferability:
        "Can the initiative be applied in other cities or institutions? Are there transferable tools, protocols, or learnings? *",
      sustainability:
        "What mechanisms ensure the continuity of the initiative over time (e.g., funding, institutionalization, alliances)? *",
      ngoAcademyCriteria: "NGO / Academy",
      methodology:
        "What new approach, tool, or methodology have you developed or adapted? How does it differ from existing ones? *",
      outcomes:
        "What results or changes has the initiative generated in actors, policies, knowledge, or social practices? Include data if available *",
      transferabilityOng:
        "Can the proposal be applied in other contexts? Have you transferred or shared your work with other organizations or institutions? *",
      sustainabilityOng:
        "What continuity has the initiative had or will it have after its first phase? Are there networks, resources, or structures that support it? *",
      supportMaterial: "Support Material",
      links:
        "Link to publications, evaluations, reports, methodological materials, or impact records.",
      attachFiles:
        "Attach publications, evaluations, reports, methodological materials, or impact records.",
      videoPrompt:
        "Do you want to share a short video (max. 2 minutes) that shows the experience or relevant testimonies? (optional)",
      videoHint: "(Link to YouTube, Vimeo or shared file)",
      recognitionPrompt:
        "Does the initiative have any previous recognition or award? (optional)",
      recognitionHint: "(Indicate which and in what year, if applicable)",
      attachLetter: "Attach authorization letter from the legal representative",
      declaration:
        "I declare that the information provided in this form is true and I authorize the use of the background and graphic material provided for dissemination purposes of the SoMoS LAC contest.",
      max500words: "(max 500 words)",
      max300words: "(max 300 words)",
      max250words: "(max 250 words)",
      max300characters: "(max 300 characters)",
      max250characters: "(max 250 characters)",
      next: "Next",
      previous: "Previous",
      submit: "Submit Application →",
      return: "Return",
      confirm:
        "Have you reviewed all entered data? Once submitted, you cannot edit the application. Do you wish to continue?",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^\+?\d{7,15}$/;
    return phoneRegex.test(phone);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateStep = () => {
    const newErrors = [];

    if (currentStep === 0) {
      if (!form.organizationName)
        newErrors.push(
          language === "es"
            ? "El nombre de la organización es requerido."
            : "Organization name is required."
        );
      if (!form.organizationType)
        newErrors.push(
          language === "es"
            ? "El tipo de organización es requerido."
            : "Organization type is required."
        );
      if (!form.country)
        newErrors.push(
          language === "es" ? "El país es requerido." : "Country is required."
        );
      if (!form.legalRepName)
        newErrors.push(
          language === "es"
            ? "El nombre del representante legal es requerido."
            : "Legal representative name is required."
        );
      if (!form.legalRepPosition)
        newErrors.push(
          language === "es"
            ? "El cargo del representante legal es requerido."
            : "Legal representative position is required."
        );
      if (!form.email) {
        newErrors.push(
          language === "es"
            ? "El correo electrónico es requerido."
            : "Email is required."
        );
      } else if (!isValidEmail(form.email)) {
        newErrors.push(
          language === "es"
            ? "El correo electrónico tiene un formato inválido."
            : "Email has an invalid format."
        );
      }
      if (!form.phone) {
        newErrors.push(
          language === "es"
            ? "El teléfono de contacto es requerido."
            : "Contact phone is required."
        );
      } else if (!isValidPhone(form.phone)) {
        newErrors.push(
          language === "es"
            ? "El teléfono de contacto tiene un formato inválido."
            : "Contact phone has an invalid format."
        );
      }
      form.team.forEach((member, index) => {
        if (!member.name)
          newErrors.push(
            language === "es"
              ? `El nombre del miembro ${index + 1} del equipo es requerido.`
              : `Team member ${index + 1} name is required.`
          );
        if (!member.position)
          newErrors.push(
            language === "es"
              ? `El cargo del miembro ${index + 1} del equipo es requerido.`
              : `Team member ${index + 1} position is required.`
          );
        if (!member.email) {
          newErrors.push(
            language === "es"
              ? `El correo electrónico del miembro ${index + 1
              } del equipo es requerido.`
              : `Team member ${index + 1} email is required.`
          );
        } else if (!isValidEmail(member.email)) {
          newErrors.push(
            language === "es"
              ? `El correo electrónico del miembro ${index + 1
              } tiene un formato inválido.`
              : `Team member ${index + 1} email has an invalid format.`
          );
        }
      });
    }
    if (currentStep === 1) {
      if (!form.name)
        newErrors.push(
          language === "es"
            ? "El nombre del proyecto es requerido."
            : "Project name is required."
        );
      if (!form.city)
        newErrors.push(
          language === "es"
            ? "La ciudad de implementación es requerida."
            : "Implementation city is required."
        );
      if (!form.startDate)
        newErrors.push(
          language === "es"
            ? "La fecha de inicio es requerida."
            : "Start date is required."
        );
    }
    if (currentStep === 2) {
      if (!form.need)
        newErrors.push(
          language === "es"
            ? "La descripción de la necesidad es requerida."
            : "Need description is required."
        );
      if (!form.objectives)
        newErrors.push(
          language === "es"
            ? "Los objetivos del proyecto son requeridos."
            : "Project objectives are required."
        );
      if (!form.targetAudience)
        newErrors.push(
          language === "es"
            ? "El público objetivo es requerido."
            : "Target audience is required."
        );
      if (!form.activities)
        newErrors.push(
          language === "es"
            ? "Las actividades principales son requeridas."
            : "Main activities are required."
        );
    }
    if (currentStep === 3 && form.category === "Operador/Regulador") {
      if (!form.innovation)
        newErrors.push(
          language === "es"
            ? "La descripción de los aspectos innovadores es requerida."
            : "Innovative aspects description is required."
        );
      if (!form.impact)
        newErrors.push(
          language === "es"
            ? "La descripción de los cambios concretos es requerida."
            : "Concrete changes description is required."
        );
      if (!form.transferability)
        newErrors.push(
          language === "es"
            ? "La información sobre transferibilidad es requerida."
            : "Transferability information is required."
        );
      if (!form.sustainability)
        newErrors.push(
          language === "es"
            ? "La información sobre sostenibilidad es requerida."
            : "Sustainability information is required."
        );
    }
    if (currentStep === 3 && form.category === "ONG/Academia") {
      if (!form.methodology)
        newErrors.push(
          language === "es"
            ? "El enfoque, herramienta o metodología es requerida."
            : "Approach, tool, or methodology is required."
        );
      if (!form.outcomes)
        newErrors.push(
          language === "es"
            ? "Los resultados o cambios generados son requeridos."
            : "Results or generated changes are required."
        );
      if (!form.transferability)
        newErrors.push(
          language === "es"
            ? "La información sobre transferibilidad es requerida."
            : "Transferability information is required."
        );
      if (!form.sustainability)
        newErrors.push(
          language === "es"
            ? "La información sobre sostenibilidad es requerida."
            : "Sustainability information is required."
        );
    }

    if (currentStep === 4) {
      form.links.forEach((link, index) => {
        if (!link) {
          newErrors.push(
            language === "es"
              ? `El campo link no debe estar vacío.`
              : `The link field cannot be empty.`
          );
        } else {
          try {
            new URL(link);
          } catch (_) {
            newErrors.push(
              language === "es"
                ? `El link ${index + 1} es inválido.`
                : `Link ${index + 1} is invalid.`
            );
          }
        }
      });

      if (form.acceptanceLetter.length === 0) {
        newErrors.push(
          language === "es"
            ? "Debe adjuntar la carta de autorización."
            : "You must attach the authorization letter."
        );
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
    setForm({
      ...form,
      team: [...form.team, { name: "", position: "", email: "" }],
    });
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

  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = () => {
    if (validateStep()) {
      const userConfirmed = window.confirm(translateText[language].confirm);

      if (userConfirmed) {
        createFicha(form)
          .then(() => {
            setSuccessMessage(
              language === "es"
                ? "Muchas gracias! Su formulario fue ingresado correctamente. Ahora será redireccionado al Inicio"
                : "Thank you very much! Your form was successfully submitted. You will now be redirected to the Home page."
            );
            setIsSubmitted(true);
            const timeoutId = setTimeout(() => {
              navigate("/");
            }, 5000);
            return () => clearTimeout(timeoutId);
          })
          .catch((error) => {
            console.error("Error al crear la ficha:", error);
          });
      }
    }
  };

  const handleBack = () => {
    if (isSubmitted) {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleLinkChange = (index, value) => {
    const newLinks = [...form.links];
    newLinks[index] = value;
    setForm({ ...form, links: newLinks });
  };

  const handleAddLink = () => {
    setForm({ ...form, links: [...form.links, ""] });
  };

  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files);

    filesArray.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64Data = reader.result;
        const fileInfo = {
          name: file.name,
          type: file.type,
          content: base64Data,
        };
        setForm((prevForm) => ({
          ...prevForm,
          files: [...prevForm.files, fileInfo],
        }));
      };
      reader.onerror = (error) => {
        console.error("Error al leer el archivo:", error);
      };
    });
  };

  const handleLetterChange = (e) => {
    const filesArray = Array.from(e.target.files);

    filesArray.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64Data = reader.result;
        const fileInfo = {
          name: file.name,
          type: file.type,
          content: base64Data,
        };
        setForm((prevForm) => ({
          ...prevForm,
          acceptanceLetter: [...prevForm.acceptanceLetter, fileInfo],
        }));
      };
      reader.onerror = (error) => {
        console.error("Error al leer el archivo:", error);
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
      translateText={translateText}
      language={language}
    />,
    <Step2
      form={form}
      handleChange={handleChange}
      translateText={translateText}
      language={language}
    />,
    <Step3
      form={form}
      handleChange={handleChange}
      translateText={translateText}
      language={language}
    />,
    <Step4
      form={form}
      handleChange={handleChange}
      translateText={translateText}
      language={language}
    />,
    <Step5
      form={form}
      handleInputChange={handleInputChange}
      handleAddLink={handleAddLink}
      handleLinkChange={handleLinkChange}
      handleFileChange={handleFileChange}
      handleLetterChange={handleLetterChange}
      handleRemoveLink={handleRemoveLink}
      translateText={translateText}
      language={language}
    />,
  ];

  const switchToSpanish = () => {
    if (language !== "es") toggleLanguage();
  };

  const switchToEnglish = () => {
    if (language !== "en") toggleLanguage();
  };
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="relative flex items-center justify-center min-h-screen">

      <button
        onClick={handleBack}
        className="absolute top-4 left-4 hover:text-[#a49fc4] rounded-md"
      >
        <FaArrowCircleLeft className="text-2xl mr-1 mb-1 inline" />
        <span className="ml-1">
          {currentStep === 0
            ? translateText[language].return
            : translateText[language].previous}
        </span>
      </button>

      <div className="absolute top-4 right-4 space-x-2">
        <span className="fi fi-es cursor-pointer" onClick={switchToSpanish}></span>
        <span className="fi fi-gb cursor-pointer" onClick={switchToEnglish}></span>
      </div>

      <div className="max-w-3xl w-full p-10 rounded-md">
        <div className="mb-6">
          <div className="text-center text-sm mb-1">
            {currentStep + 1} {language === "es" ? "de" : "of"} {steps.length}
          </div>
          <div className="w-full bg-[#a49fc4] rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-[#5d5593] h-2.5"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="max-w-2xl mx-auto p-6 bg-white rounded-lg"
        >
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

          {currentStep === 0 && (
            <div className="flex justify-end mt-10">
              <button
                type="button"
                onClick={nextStep}
                className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]"
              >
                {translateText[language].next}
              </button>
            </div>
          )}

          {currentStep > 0 && currentStep < steps.length - 1 && (
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]"
              >
                {translateText[language].previous}
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]"
              >
                {translateText[language].next}
              </button>
            </div>
          )}

          {currentStep === steps.length - 1 && (
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]"
              >
                {translateText[language].previous}
              </button>
              <button
                type="submit"
                className={`text-white px-4 py-2 rounded ${form.accepted
                  ? "bg-[#5d5593] hover:bg-[#a49fc4]"
                  : "bg-purple-300"
                  }`}
                disabled={!form.accepted || isSubmitted}
              >
                {translateText[language].submit}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
