import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFichas } from "../context/FichasContext";
import { useLanguage } from "../context/LanguageContext";
import { FaArrowCircleLeft } from "react-icons/fa";
import LoadingSpinner from "../context/LoadingSpinner";

function translateAssociation(option, language) {
  const translations = {
    es: {
      No: "No",
      "Entidades públicas": "Entidades públicas",
      "Empresa privada": "Empresa privada",
      ONG: "ONG",
      "Sociedad Civil": "Sociedad Civil",
      "Instituciones educativas y de investigación":
        "Instituciones educativas y de investigación",
      "Organizaciones multilaterales (como BID, Banco Mundial, ONU, CAF, GIZ, KfW, etc.)":
        "Organizaciones multilaterales (como BID, Banco Mundial, ONU, CAF, GIZ, KfW, etc.)",
      "Organizaciones Internacionales": "Organizaciones Internacionales",
      "Otras organizaciones": "Otras organizaciones",
    },
    en: {
      No: "No",
      "Entidades públicas": "Public institution",
      "Empresa privada": "Private Companies",
      ONG: "NGO",
      "Sociedad Civil": "Civil Organizations",
      "Instituciones educativas y de investigación":
        "Educational and Research Institutions",
      "Organizaciones multilaterales (como BID, Banco Mundial, ONU, CAF, GIZ, KfW, etc.)":
        "Multilateral organisations (e.g. IDB, World Bank, UN, CAF, GIZ, KfW, etc.)",
      "Organizaciones Internacionales": "International Organisations",
      "Otras organizaciones": "Other organisations",
    },
    pt: {
      No: "Não",
      "Entidades públicas": "Entidades públicas",
      "Empresa privada": "Empresa privada",
      ONG: "ONGS",
      "Sociedad Civil": "Sociedade civil",
      "Instituciones educativas y de investigación":
        "Instituições de ensino e pesquis",
      "Organizaciones multilaterales (como BID, Banco Mundial, ONU, CAF, GIZ, KfW, etc.)":
        "Organizações multilaterais (ex: BID, Banco Mundial, ONU, CAF, GIZ, KfW, etc.)",
      "Organizaciones Internacionales": "Organizações Internacionais",
      "Otras organizaciones": "Outras organizações",
    },
  };
  return translations[language][option] || option;
}

function Step1({ form, handleChange, translateText, language }) {
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
        autoFocus
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

function Step2({ form, handleChange, translateText, language }) {
  const [wordCount, setWordCount] = useState({
    need: 0,
    objectives: 0,
    targetAudience: 0,
    activities: 0,
    resultsObtained: 0,
  });

  const handleTextAreaChange = (e) => {
    const { name, value } = e.target;
    const words = value.split(/\s+/g).filter((word) => word.length > 0);

    if (words.length <= 500) {
      setWordCount((prev) => ({ ...prev, [name]: words.length }));
      handleChange(e); // Update the form state
    }
  };
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
        value={form.need}
        autoFocus
        maxLength={500 * 6} // A crude way to limit characters based on a rough word-to-char ratio. Better to use on-the-fly word counting.
        onChange={handleTextAreaChange}
        className="w-full border border-gray-300 px-4 py-2 input-focused rounded-md my-2"
        rows="4"
        required
      />
      <div className="text-xs text-right text-gray-500">
        {wordCount.need} / 500 {translateText[language].words}
      </div>

      <label className="text-xl">{translateText[language].objectives}</label>
      <label className="block text-sm">
        {translateText[language].max500words}
      </label>

      <textarea
        name="objectives"
        value={form.objectives}
        maxLength={500 * 6}
        onChange={handleTextAreaChange}
        className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2"
        rows="4"
        required
      />
      <div className="text-xs text-right text-gray-500">
        {wordCount.objectives} / 500 {translateText[language].words}
      </div>

      <label className="text-xl">
        {translateText[language].targetAudience}
      </label>
      <label className="block text-sm">
        {translateText[language].max500words}
      </label>

      <textarea
        name="targetAudience"
        onChange={handleTextAreaChange}
        value={form.targetAudience}
        maxLength={500 * 6}
        className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2"
        rows="4"
        required
      />
      <div className="text-xs text-right text-gray-500">
        {wordCount.targetAudience} / 500 {translateText[language].words}
      </div>

      <label className="text-xl">{translateText[language].activities}</label>
      <label className="block text-sm">
        {translateText[language].max500words}
      </label>

      <textarea
        name="activities"
        value={form.activities}
        maxLength={500 * 6}
        onChange={handleTextAreaChange}
        className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2"
        rows="4"
        required
      />
      <div className="text-xs text-right text-gray-500">
        {wordCount.activities} / 500 {translateText[language].words}
      </div>

      <label className="text-xl">
        {translateText[language].resultsObtained}
      </label>
      <label className="block text-sm">
        {translateText[language].max500words}
      </label>

      <textarea
        name="resultsObtained"
        value={form.resultsObtained}
        maxLength={500 * 6}
        onChange={handleTextAreaChange}
        className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2"
        rows="4"
        required
      />
      <div className="text-xs text-right text-gray-500">
        {wordCount.resultsObtained} / 500 {translateText[language].words}
      </div>

      <label className="text-xl">
        {translateText[language].projectCategory}
      </label>
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
      >
        <option
          className="accent-[#5d5593]"
          value="Instituciones públicas y Empresas privadas"
        >
          {translateText[language].operatorRegulatorOption}
        </option>
        <option value="Organizaciones de la sociedad civil y Entidades académicas">
          {translateText[language].ngoAcademyOption}
        </option>
      </select>
    </div>
  );
}

function Step3({ form, handleChange, translateText, language }) {
  const [wordCount, setWordCount] = useState({
    innovation: 0,
    impact: 0,
    transferability: 0,
    sustainability: 0,
    methodology: 0,
    outcomes: 0,
  });

  const handleTextAreaChange = (e) => {
    const { name, value } = e.target;
    const words = value.split(/\s+/g).filter((word) => word.length > 0);

    if (words.length <= 500) {
      // Max 500 words for textareas
      setWordCount((prev) => ({ ...prev, [name]: words.length }));
      handleChange(e); // Update the form state
    }
  };

  if (form.category === "Instituciones públicas y Empresas privadas") {
    return (
      <div className="">
        <h2 className="text-3xl text-center font-bold mb-6">
          {translateText[language].operatorRegulatorCriteria}
        </h2>

        <h2 className="text-xl font-bold ">
          {translateText[language].innovationLabel}
        </h2>
        <label className="text-base">
          {translateText[language].innovation}
        </label>
        <label className="block text-sm">
          {translateText[language].max300words}
        </label>

        <textarea
          name="innovation"
          value={form.innovation}
          onChange={handleTextAreaChange}
          autoFocus
          className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2"
          rows="4"
          maxLength={300 * 6}
        />
        <div className="text-xs text-right text-gray-500">
          {wordCount.innovation} / 300 {translateText[language].words}
        </div>

        <h2 className="text-xl font-bold ">
          {translateText[language].impactLabel}
        </h2>
        <label className="text-base">{translateText[language].impact}</label>
        <label className="block text-sm">
          {translateText[language].max300words}
        </label>

        <textarea
          name="impact"
          value={form.impact}
          onChange={handleTextAreaChange}
          className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2"
          rows="4"
          maxLength={300 * 6}
        />
        <div className="text-xs text-right text-gray-500">
          {wordCount.impact} / 300 {translateText[language].words}
        </div>

        <h2 className="text-xl font-bold ">
          {translateText[language].transferabilityLabel}
        </h2>
        <label className="text-base">
          {translateText[language].transferability}
        </label>
        <label className="block text-sm">
          {translateText[language].max250words}
        </label>

        <textarea
          name="transferability"
          value={form.transferability}
          onChange={handleTextAreaChange}
          className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2"
          rows="4"
          maxLength={250 * 6}
          required
        />
        <div className="text-xs text-right text-gray-500">
          {wordCount.transferability} / 250 {translateText[language].words}
        </div>

        <h2 className="text-xl font-bold ">
          {translateText[language].sustainabilityLabel}
        </h2>
        <label className="text-base">
          {translateText[language].sustainability}
        </label>
        <label className="block text-sm">
          {translateText[language].max250words}
        </label>

        <textarea
          name="sustainability"
          value={form.sustainability}
          onChange={handleTextAreaChange}
          className="w-full border border-gray-300  px-4 py-2 input-focused rounded-md my-2"
          rows="4"
          maxLength={250 * 6}
          required
        />
        <div className="text-xs text-right text-gray-500">
          {wordCount.sustainability} / 250 {translateText[language].words}
        </div>
      </div>
    );
  }

  if (
    form.category ===
    "Organizaciones de la sociedad civil y Entidades académicas"
  ) {
    return (
      <div>
        <h2 className="text-3xl text-center font-bold mb-4">
          {translateText[language].ngoAcademyCriteria}
        </h2>

        <h2 className="text-xl font-bold ">
          {translateText[language].innovationLabel}
        </h2>
        <label className="text-base">
          {translateText[language].methodology}
        </label>
        <label className="block text-sm">
          {translateText[language].max300words}{" "}
          {/* Changed from characters to words */}
        </label>

        <textarea
          name="methodology"
          value={form.methodology}
          onChange={handleTextAreaChange}
          className="w-full p-2 mb-4 border rounded input-focused"
          rows="4"
          maxLength={300 * 6}
        />
        <div className="text-xs text-right text-gray-500">
          {wordCount.methodology} / 300 {translateText[language].words}
        </div>

        <h2 className="text-xl font-bold ">
          {translateText[language].impactLabel}
        </h2>
        <label className="text-base">{translateText[language].outcomes}</label>
        <label className="block text-sm">
          {translateText[language].max300words}{" "}
          {/* Changed from characters to words */}
        </label>

        <textarea
          name="outcomes"
          value={form.outcomes}
          onChange={handleTextAreaChange}
          className="w-full p-2 mb-4 border input-focused rounded"
          rows="4"
          maxLength={300 * 6}
        />
        <div className="text-xs text-right text-gray-500">
          {wordCount.outcomes} / 300 {translateText[language].words}
        </div>

        <h2 className="text-xl font-bold ">
          {translateText[language].transferabilityLabel}
        </h2>
        <label className="text-base">
          {translateText[language].transferabilityOng}
        </label>
        <label className="block text-sm">
          {translateText[language].max250words}{" "}
          {/* Changed from characters to words */}
        </label>

        <textarea
          name="transferability"
          value={form.transferability}
          onChange={handleTextAreaChange}
          className="w-full p-2 mb-4 border rounded input-focused"
          rows="4"
          maxLength={250 * 6}
        />
        <div className="text-xs text-right text-gray-500">
          {wordCount.transferability} / 250 {translateText[language].words}
        </div>

        <h2 className="text-xl font-bold ">
          {translateText[language].sustainabilityLabel}
        </h2>
        <label className="text-base">
          {translateText[language].sustainabilityOng}
        </label>
        <label className="block text-sm">
          {translateText[language].max250words}{" "}
          {/* Changed from characters to words */}
        </label>

        <textarea
          name="sustainability"
          value={form.sustainability}
          onChange={handleTextAreaChange}
          className="w-full p-2 mb-6 border rounded input-focused"
          rows="4"
          maxLength={250 * 6}
        />
        <div className="text-xs text-right text-gray-500">
          {wordCount.sustainability} / 250 {translateText[language].words}
        </div>
      </div>
    );
  }
}

function Step4({
  form,
  handleRemoveFile2,
  handleRemoveAcceptanceLetter,
  handleAddLink,
  handleLetterChange,
  handleRemoveLink,
  handleLinkChange,
  handleInputChange,
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
        <div key={index}>
          <div className="flex items-center">
            <input
              type="url"
              value={link}
              placeholder="https://"
              onChange={(e) => handleLinkChange(index, e.target.value)}
              className="w-full p-2 border rounded my-2 input-focused"
              autoFocus
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() => handleRemoveLink(index)}
                className="text-red-600  text-xs px-2 hover:underline ml-2"
              >
                {translateText[language].delete}
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
        {translateText[language].addLink}
      </button>

      <label className="block text-xl pt-2">
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
            <div className="flex items-center justify-between">
              <p>
                {file.name}
                {/* ({file.type}) */}
              </p>

              <button
                type="button"
                onClick={() => handleRemoveFile2(index)}
                className="text-red-600 text-xs px-2 hover:underline ml-2 "
              >
                {translateText[language].delete}
              </button>
            </div>
          </div>
        ))}
      </div>

      <label className="block text-xl pt-2">
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
            <div className="flex items-center justify-between">
              <p>
                {file.name}
                {/* ({file.type}) */}
              </p>
              <button
                type="button"
                onClick={() => handleRemoveAcceptanceLetter(index)}
                className="text-red-600 text-xs px-2 hover:underline ml-2 "
              >
                {translateText[language].delete}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Step5({
  form,
  handleChange,
  handleTeamChange,
  addTeamMember,
  handleInputChange,
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

    if (value !== "Otra" && value !== "Outra") {
      // Added "Outra" for PT
      setOtherOrganizationType("");
    }
  };

  const handleCountryChange = (e) => {
    const { value } = e.target;
    setCountry(value);
    handleChange(e);

    if (value !== "Otro" && value !== "Outro") {
      // Added "Outro" for PT
      setOtherCountry("");
    }
  };

  useEffect(() => {
    if (
      (organizationType === "Otra" || organizationType === "Outra") && // Added "Outra" for PT
      otherOrganizationType !== form.organizationType
    ) {
      handleChange({
        target: { name: "organizationType", value: otherOrganizationType },
      });
    }
  }, [
    organizationType,
    otherOrganizationType,
    handleChange,
    form.organizationType,
  ]);

  useEffect(() => {
    if (
      (country === "Otro" || country === "Outro") &&
      otherCountry !== form.country
    ) {
      // Added "Outro" for PT
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
          className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
        >
          <option value="">{translateText[language].selectAType}</option>
          <option value="Publica">{translateText[language].public}</option>
          <option value="Privada">{translateText[language].private}</option>
          <option value="ONG">ONG</option>
          <option value="Otra">{translateText[language].otherOption}</option>
        </select>
      </div>

      {(organizationType === "Otra" || organizationType === "Outra") && ( // Added "Outra" for PT
        <input
          name="otherOrganizationType"
          value={otherOrganizationType}
          onChange={(e) => setOtherOrganizationType(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded-md my-2 input-focused"
          placeholder={translateText[language].specifyOrgType}
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
          className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
        >
          <option value="">{translateText[language].selectACountry}</option>
          <option value="Internacional">
            {translateText[language].international}
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
            {translateText[language].otherOptionCountry}
          </option>
        </select>
      </div>

      {(country === "Otro" || country === "Outro") && ( // Added "Outro" for PT
        <input
          name="otherCountry"
          value={otherCountry}
          onChange={(e) => setOtherCountry(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded-md my-2 input-focused"
          placeholder={translateText[language].specifyCountry}
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
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2 rounded-md my-2 input-focused"
        required
        maxLength="13" // Limit to 13 characters
        pattern="^\+?[0-9]*$" // Regex pattern to allow only numbers and the '+' symbol
        title={
          language === "es"
            ? "Solo se permiten números y el símbolo '+'"
            : language === "en"
              ? "Only numbers and the '+' symbol are allowed"
              : "Apenas números e o símbolo '+' são permitidos"
        }
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
      />

      <h3 className="text-xl mt-5 ">{translateText[language].team}</h3>
      <h3 className="text-sm">{translateText[language].teamInstructions}</h3>

      {form.team.map((member, index) => (
        <div key={index} className="grid grid-cols-5 gap-1 my-1">
          <div className="col-span-2">
            <label>{translateText[language].nameLabel}</label>
            <input
              name="name"
              value={member.name}
              onChange={(e) => handleTeamChange(index, e)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md mb-1 input-focused"
            />
          </div>
          <div className="col-span-2">
            <label>{translateText[language].positionLabel}</label>
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
                className="text-red-600 text-xs w-full py-1 hover:underline"
              >
                {translateText[language].delete}
              </button>
            </div>
          )}
          <div className="col-span-4">
            <label>{translateText[language].emailLabel}</label>
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
        {translateText[language].addResponsible}
      </button>

      <h3 className="text-xl my-5">{translateText[language].associations} </h3>
      <div className="grid grid-cols-2 gap-2 border-b border-[#D9D6E1] pb-1">
        {[
          "No",
          "Entidades públicas",
          "Empresa privada",
          "ONG",
          "Sociedad Civil",
          "Instituciones educativas y de investigación",
          "Organizaciones multilaterales (como BID, Banco Mundial, ONU, CAF, GIZ, KfW, etc.)",
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
            <span>{translateAssociation(option, language)}</span>
          </label>
        ))}
      </div>

      <div className="flex items-start my-6">
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
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

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
    resultsObtained: "",
    category: "Instituciones públicas y Empresas privadas",
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
    language: language,
  });

  useEffect(() => {
    setForm((prevForm) => ({ ...prevForm, language }));
  }, [language]);

  const translateText = {
    es: {
      organizationDetails: "DATOS DE LA ORGANIZACIÓN POSTULANTE",
      organizationName: "Nombre de la organización *",
      organizationType: "Tipo de organización *",
      country: "País",
      selectAType: "Selecciona un tipo",
      public: "Pública",
      private: "Privada",
      otherOption: "Otra...",
      specifyOrgType: "Especifica el tipo de organización",
      selectACountry: "Selecciona un país",
      international: "Internacional",
      otherOptionCountry: "Otro...",
      specifyCountry: "Especifica el país",
      legalRepName:
        "Nombre de el/la representante legal o Lider de la iniciativa*",
      legalRepPosition: "Cargo *",
      email: "Correo electrónico *",
      phone: "Teléfono de contacto *",
      registrationId:
        "RUT/NIT/CNPJ/Registro legal de la organización (Si aplica)",
      team: "Equipo responsable",
      teamInstructions:
        "Ingrese acá los nombres, cargos y correos de contacto de las principales personas implicados en la realización del proyecto o iniciativa. (puede ingresar más de una persona). *",
      nameLabel: "Nombre*",
      positionLabel: "Cargo*",
      emailLabel: "Email*",
      addResponsible: "+ Agregar responsable",
      associations:
        "¿Hubo asociaciones para el desarrollo? Indique todos los sectores asociados*",
      projectInfo: "INFORMACIÓN DE LA INICIATIVA POSTULADA",
      projectName: "Nombre del proyecto o iniciativa:",
      projectCity: "Ciudad de implementación del proyecto",
      startDate: "Fecha de inicio de implementación:",
      isActive: "¿Se encuentra vigente?",
      yes: "Sí",
      no: "No",
      reasonInactive:
        "En caso de no estar vigente, explique brevemente por qué:",
      projectDescription: "DESCRIPCIÓN DEL PROYECTO",
      need: "Describa la necesidad o problemática detectada. *",
      objectives: "Objetivos del proyecto. *",
      targetAudience: "Público objetivo y población beneficiaria. *",
      activities: "Principales actividades realizadas. *",
      resultsObtained: "Resultados obtenidos o esperados. *",
      projectCategory: "¿A cuál categoría postula el proyecto?",
      operatorRegulatorCriteria:
        "Criterios para la categoría Instituciones públicas y Empresas privadas",
      operatorRegulatorOption: "Instituciones públicas y Empresas privadas",
      ngoAcademyOption:
        "Organizaciones de la sociedad civil y Entidades académicas",
      innovationLabel: "Innovación",
      innovation:
        "Describa qué aspectos de su iniciativa son innovadores frente a prácticas tradicionales en movilidad urbana con enfoque de género *",
      impactLabel: "Impacto",
      impact:
        "¿Qué cambios concretos ha generado la iniciativa en la empleabilidad, participación, seguridad o inclusión de mujeres? Incluya indicadores si es posible *",
      transferabilityLabel: "Replicabilidad",
      transferability:
        "¿Puede aplicarse la iniciativa en otras ciudades o instituciones? ¿Existen herramientas, protocolos o aprendizajes transferibles? *",
      sustainabilityLabel: "Sostenibilidad",
      sustainability:
        "¿Qué mecanismos aseguran la continuidad de la iniciativa en el tiempo (ej. financiamiento, institucionalización, alianzas)? *",
      ngoAcademyCriteria:
        "Criterios para la categoría Organizaciones de la sociedad civil y Entidades académicas",
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
      addLink: "+ Agregar enlace",
      attachFiles:
        "Adjunte publicaciones, evaluaciones, informes, materiales metodológicos o registros de impacto.",
      delete: "Eliminar",
      videoPrompt:
        "¿Desea compartir un video corto (máx. 2 minutos) que muestre la experiencia o testimonios relevantes? (opcional)",
      videoHint: "(Enlace a YouTube, Vimeo o archivo compartido)",
      recognitionPrompt:
        "¿La iniciativa cuenta con algún reconocimiento o premio previo? (opcional)",
      recognitionHint: "(Indicar cuál y en qué año, si aplica)",
      attachLetter:
        "Adjunte carta de autorización del/de la representante legal (para la categoría Instituciones públicas y Empresas privadas) o del líder/lideresa de la iniciativa (para la categoría Organizaciones de la sociedad civil y Entidades académicas)",
      declaration:
        "Declaro que la información entregada en esta ficha es veraz y autorizo el uso, tratamiento y publicación de datos, antecedentes y material gráfico entregado en el marco de este concurso para fines de difusión de SoMoS LAC o de sus organizadores. No se publicarán datos personales.* ",
      max500words: "(máx 500 palabras)",
      max300words: "(máx 300 palabras)",
      max250words: "(máx 250 palabras)",
      words: "palabras",
      next: "Siguiente",
      previous: "Anterior",
      submit: "Enviar Postulación →",
      return: "Volver",
      confirm:
        "¿Has revisado todos los datos ingresados? Una vez enviado, no podrás editar la postulación. ¿Deseas continuar?",
      requiredOrgName: "El nombre de la organización es requerido.",
      requiredOrgType: "El tipo de organización es requerido.",
      requiredCountry: "El país es requerido.",
      requiredLegalRepName: "El nombre del representante legal es requerido.",
      requiredLegalRepPosition:
        "El cargo del representante legal es requerido.",
      requiredEmail: "El correo electrónico es requerido.",
      invalidEmailFormat: "El correo electrónico tiene un formato inválido.",
      requiredPhone: "El teléfono de contacto es requerido.",
      invalidPhoneFormat: "El teléfono de contacto tiene un formato inválido.",
      requiredTeamMemberName: (index) =>
        `El nombre del miembro ${index} del equipo es requerido.`,
      requiredTeamMemberPosition: (index) =>
        `El cargo del miembro ${index} del equipo es requerido.`,
      requiredTeamMemberEmail: (index) =>
        `El correo electrónico del miembro ${index} del equipo es requerido.`,
      invalidTeamMemberEmailFormat: (index) =>
        `El correo electrónico del miembro ${index} tiene un formato inválido.`,
      requiredProjectName: "El nombre del proyecto es requerido.",
      requiredCity: "La ciudad de implementación es requerida.",
      requiredStartDate: "La fecha de inicio es requerida.",
      requiredNeed: "La descripción de la necesidad es requerida.",
      requiredObjectives: "Los objetivos del proyecto son requeridos.",
      requiredTargetAudience: "El público objetivo es requerido.",
      requiredActivities: "Las actividades principales son requeridas.",
      requiredResultsObtained:
        "Los resultados obtenidos o esperados son requeridos.",
      requiredInnovation: "La información sobre innovación es requerida.",
      requiredImpact: "La información sobre impacto es requerida.",
      requiredTransferability:
        "La información sobre replicabilidad es requerida.",
      requiredSustainability:
        "La información sobre sostenibilidad es requerida.",
      requiredMethodology: "La información sobre metodología es requerida.",
      requiredOutcomes: "La información sobre resultados es requerida.",
      requiredAcceptanceLetter: "Debe adjuntar la carta de autorización.",
    },
    en: {
      organizationDetails: "Applicant Organization Information",
      organizationName: "Organization Name *",
      organizationType: "Organization Type *",
      country: "Country",
      selectAType: "Select a type",
      public: "Public",
      private: "Private",
      otherOption: "Other...",
      specifyOrgType: "Specify organization type",
      selectACountry: "Select a country",
      international: "International",
      otherOptionCountry: "Other...",
      specifyCountry: "Specify country",
      legalRepName:
        "Name of legal representative or the leader of the initiative. *",
      legalRepPosition: "Position *",
      email: "Email *",
      phone: "Contact Phone *",
      registrationId: "RUT/NIT/CNPJ/Legal registration (if applicable):",
      team: "Project team",
      teamInstructions:
        "List the names of the main people and positions involved in the implementation of the project or initiative*",
      nameLabel: "Name*",
      positionLabel: "Position*",
      emailLabel: "Email*",
      addResponsible: "+ Add responsible",
      associations:
        "Partnerships for development? (specify all applicable sectors) *",
      projectInfo: "Initiative Information",
      projectName: "Project/initiative name:",
      projectCity: "City of implementation:",
      startDate: "Start Date:",
      isActive: "Is it still active?",
      yes: "Yes",
      no: "No",
      reasonInactive: "If not active, briefly explain why:",
      projectDescription: "Project Description",
      need: "Identified need or problem. *",
      objectives: "Project objectives. *",
      targetAudience: "Target audience and beneficiaries. *",
      activities: "Main activities. *",
      resultsObtained: "Results achieved or expected *",
      projectCategory: "Which category is the project applying for?",
      operatorRegulatorCriteria: "For Public Institutions and Private Companies category",
      operatorRegulatorOption: "Public Institutions and Private Companies",
      ngoAcademyOption: "Civil Society Organizations and Academic Entities",
      innovationLabel: "Innovation",
      innovation:
        "Describe what aspects of your initiative are innovative compared to traditional practices in gender-sensitive urban mobility. *",
      impactLabel: "Impact",
      impact:
        "What concrete changes has the initiative brought about in terms of women's employability, participation, safety or inclusion? Include indicators if possible. *",
      transferabilityLabel: "Replicability",
      transferability:
        "Can the initiative be applied in other cities or institutions, and are there transferable tools, protocols or learning? *",
      sustainabilityLabel: "Sustainability",
      sustainability:
        "What mechanisms ensure the continuity of the initiative over time (e.g., funding, institutionalization, alliances)? *",
      ngoAcademyCriteria: "For Civil Society Organizations and Academic Entities category",
      methodology:
        "What new approach, tool or methodology have you developed or adapted, and how does it differ from what already exists? *",
      outcomes:
        "What results or changes has the initiative generated in actors, policies, knowledge or social practices? Include data if available. *",
      transferabilityOng:
        "Can the proposal be applied in other contexts? Have you transferred or shared your work with other organizations or institutions? *",
      sustainabilityOng:
        "What continuity has there been or will there be after the first phase of the initiative? Are there networks, resources or structures to sustain it? *",
      supportMaterial: "Supporting Material",
      links:
        "Links to publications, evaluations, reports, or impact records.",
      addLink: "+ Add link",
      attachFiles:
        "Attach publications, evaluations, reports, methodological materials or impact records.",
      delete: "Delete",
      videoPrompt:
        "Would you like to share a short video (max. 2 minutes) showing the experience or relevant testimonials (optional)?",
      videoHint: "(Link to YouTube, Vimeo or shared file)",
      recognitionPrompt:
        "Does the initiative have any previous recognition or award? (optional)",
      recognitionHint: "(Indicate which one and in which year, if applicable)",
      attachLetter: "Attach a letter of authorisation from the legal representative (for the category Public Institutions and Private Companies) or the leader of the initiative (for the category Civil Society Organisations and Academic Entities).",
      declaration:
        "I declare that the information provided in this form is true and I authorise the use, processing and publication of data, background information and graphic material submitted in the framework of this competition for the purposes of knowledge dissemination of SoMoS LAC or its organisers. No personal data will be published.",
      max500words: "(max 500 words)",
      max300words: "(max 300 words)",
      max250words: "(max 250 words)",
      words: "words",
      next: "Next",
      previous: "Previous",
      submit: "Submit Application →",
      return: "Return",
      confirm:
        "Have you reviewed all entered data? Once submitted, you cannot edit the application. Do you wish to continue?",
      requiredOrgName: "Organization name is required.",
      requiredOrgType: "Organization type is required.",
      requiredCountry: "Country is required.",
      requiredLegalRepName: "Legal representative name is required.",
      requiredLegalRepPosition: "Legal representative position is required.",
      requiredEmail: "Email is required.",
      invalidEmailFormat: "Email has an invalid format.",
      requiredPhone: "Contact phone is required.",
      invalidPhoneFormat: "Contact phone has an invalid format.",
      requiredTeamMemberName: (index) =>
        `Team member ${index} name is required.`,
      requiredTeamMemberPosition: (index) =>
        `Team member ${index} position is required.`,
      requiredTeamMemberEmail: (index) =>
        `Team member ${index} email is required.`,
      invalidTeamMemberEmailFormat: (index) =>
        `Team member ${index} email has an invalid format.`,
      requiredProjectName: "Project name is required.",
      requiredCity: "Implementation city is required.",
      requiredStartDate: "Start date is required.",
      requiredNeed: "Need description is required.",
      requiredObjectives: "Project objectives are required.",
      requiredTargetAudience: "Target audience is required.",
      requiredActivities: "Main activities are required.",
      requiredResultsObtained: "Results achieved or expected are required.",
      requiredInnovation: "Innovation information is required.",
      requiredImpact: "Impact information is required.",
      requiredTransferability: "Transferability information is required.",
      requiredSustainability: "Sustainability information is required.",
      requiredMethodology: "Methodology information is required.",
      requiredOutcomes: "Outcomes information is required.",
      requiredAcceptanceLetter: "You must attach the authorization letter.",
    },
    pt: {
      organizationDetails: "DADOS DA ORGANIZAÇÃO CANDIDATA",
      organizationName: "Nome da organização *",
      organizationType: "Tipo de organização *",
      country: "País:",
      selectAType: "Selecione um tipo",
      public: "Pública",
      private: "Privada",
      otherOption: "Outra...",
      specifyOrgType: "Especifique o tipo de organização",
      selectACountry: "Selecione um país",
      international: "Internacional",
      otherOptionCountry: "Outro...",
      specifyCountry: "Especifique o país",
      legalRepName: "Nome do(a) representante legal ou do líder da iniciativa *",
      legalRepPosition: "Cargo *",
      email: "Email *",
      phone: "Número de telefone de contato:*",
      registrationId:
        "RUT/NIT/CNPJ/Registro legal da organização (Se aplicável)",
      team: "Equipe responsável",
      teamInstructions:
        "Insira aqui os nomes, cargos e emails de contato das principais pessoas envolvidas na realização do projeto ou iniciativa) (mais de uma pessoa pode entrar). *",
      nameLabel: "Nome*",
      positionLabel: "Cargo*",
      emailLabel: "Email*",
      addResponsible: "+ Adicione responsável",
      associations:
        "Houve parcerias para o desenvolvimento? Indique os setores associados *",
      projectInfo: "INFORMAÇÕES SOBRE  A INICITIVA CANDIDATA",
      projectName: "Nome do projeto ou iniciativa:",
      projectCity: "Cidade de implementação do projeto",
      startDate: "Data de início da implementação:",
      isActive: "Está em período de vigência? ",
      yes: "Sim",
      no: "Não",
      reasonInactive: "Se não estiver atualizado, explique brevemente o porquê:",
      projectDescription: "DESCRIÇÃO DO PROJETO",
      need: "Descreva a necessidade ou o problema detectado. *",
      objectives: "Objetivos do projeto. *",
      targetAudience: "Público-alvo e população beneficiária. *",
      activities: "Principais atividades realizadas. *",
      resultsObtained: "Resultados alcançados ou esperados. *",
      projectCategory: "A qual categoria o projeto está se candidatando ",
      operatorRegulatorCriteria:
        "Critérios para a categoria Instituições públicas e Empresas privadas",
      operatorRegulatorOption: "Instituições públicas e Empresas privadas",
      ngoAcademyOption:
        "Organizações da sociedade civil e Entidades acadêmicas",
      innovationLabel: "Inovação",
      innovation:
        "Descreva quais aspectos de sua iniciativa são inovadores em comparação com as práticas tradicionais de mobilidade urbana com abordagem de gênero. *",
      impactLabel: "Impacto",
      impact:
        "Que mudanças concretas a iniciativa gerou na empregabilidade, participação, segurança ou inclusão das mulheres? Inclua indicadores, se possível. *",
      transferabilityLabel: "Replicabilidade",
      transferability:
        "A iniciativa pode ser aplicada em outras cidades ou instituições? Existem ferramentas, protocolos ou aprendizado transferíveis? *",
      sustainabilityLabel: "Sustentabilidade",
      sustainability:
        "Que mecanismos garantem a continuidade da iniciativa ao longo do tempo (por exemplo, financiamento, institucionalização, parcerias)? *",
      ngoAcademyCriteria:
        "Critérios para a categoria Organizações da sociedade civil e Entidades acadêmicas",
      methodology:
        "Que nova abordagem, ferramenta ou metodologia você desenvolveu ou adaptou? Como é diferente do que já existe? *",
      outcomes:
        " Que resultados ou mudanças a iniciativa gerou em atores, políticas, conhecimentos ou práticas sociais? Inclua dados, se você os tiver. *",
      transferabilityOng:
        "A proposta pode ser aplicada em outros contextos? Transferiram ou partilharam o seu trabalho com outras organizações ou instituições? *",
      sustainabilityOng:
        "Que continuidade teve ou terá a iniciativa após a sua primeira fase? Existem redes, recursos ou estruturas que a apoiem? *",
      supportMaterial: "Material de apoio",
      links:
        "Link para publicações, avaliações, relatórios, materiais metodológicos ou registros de impacto.",
      addLink: "+ Adicionar link",
      attachFiles:
        "Anexar publicações, avaliações, relatórios, materiais metodológicos ou registros de impacto.",
      delete: "Excluir",
      videoPrompt:
        "Deseja compartilhar um pequeno vídeo (máx. 2 minutos) que mostre a experiência ou depoimentos relevantes? (opcional)",
      videoHint: "(Link para YouTube, Vimeo ou arquivo compartilhado)",
      recognitionPrompt:
        "A iniciativa tem algum reconhecimento ou premiação anterior? (opcional)",
      recognitionHint: "(Indicar qual e em que ano, se aplicável)",
      attachLetter:
        "Anexar uma carta de autorização do representante legal (para a categoria Instituições Públicas e Empresas Privadas) ou do líder da iniciativa (para a categoria Organizações da Sociedade Civil e Entidades Acadêmicas).",
      declaration:
        "Declaro que as informações fornecidas neste arquivo são verdadeiras e autorizo o uso e processamento de dados, informações básicas e material gráfico entregues no âmbito deste concurso para fins de divulgação da SoMoS LAC ou de seus organizadores. Nenhum dado pessoal será publicado.*  ",
      max500words: "(máx 500 palavras)",
      max300words: "(máx 300 palavras)",
      max250words: "(máx 250 palavras)",
      words: "palavras",
      next: "Próximo",
      previous: "Anterior",
      submit: "Enviar Candidatura →",
      return: "Voltar",
      confirm:
        "Você revisou todos os dados inseridos? Uma vez enviado, você não poderá editar a candidatura. Deseja continuar?",
      requiredOrgName: "O nome da organização é obrigatório.",
      requiredOrgType: "O tipo de organização é obrigatório.",
      requiredCountry: "O país é obrigatório.",
      requiredLegalRepName: "O nome do representante legal é obrigatório.",
      requiredLegalRepPosition: "O cargo do representante legal é obrigatório.",
      requiredEmail: "O e-mail é obrigatório.",
      invalidEmailFormat: "O e-mail possui um formato inválido.",
      requiredPhone: "O telefone de contato é obrigatório.",
      invalidPhoneFormat: "O telefone de contato possui um formato inválido.",
      requiredTeamMemberName: (index) =>
        `O nome do membro ${index} da equipe é obrigatório.`,
      requiredTeamMemberPosition: (index) =>
        `O cargo do membro ${index} da equipe é obrigatório.`,
      requiredTeamMemberEmail: (index) =>
        `O e-mail do membro ${index} da equipe é obrigatório.`,
      invalidTeamMemberEmailFormat: (index) =>
        `O e-mail do membro ${index} possui um formato inválido.`,
      requiredProjectName: "O nome do projeto é obrigatório.",
      requiredCity: "A cidade de implementação é obrigatória.",
      requiredStartDate: "A data de início é obrigatória.",
      requiredNeed: "A descrição da necessidade é obrigatória.",
      requiredObjectives: "Os objetivos do projeto são obrigatórios.",
      requiredTargetAudience: "O público-alvo é obrigatório.",
      requiredActivities: "As atividades principais são obrigatórias.",
      requiredResultsObtained:
        "Os resultados obtidos ou esperados são obrigatórios.",
      requiredInnovation: "As informações sobre inovação são obrigatórias.",
      requiredImpact: "As informações sobre impacto são obrigatórias.",
      requiredTransferability:
        "As informações sobre replicabilidade são obrigatórias.",
      requiredSustainability:
        "As informações sobre sustentabilidade são obrigatórias.",
      requiredMethodology: "As informações sobre metodologia são obrigatórias.",
      requiredOutcomes: "As informações sobre resultados são obrigatórias.",
      requiredAcceptanceLetter: "Você deve anexar a carta de autorização.",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const isValidPhone = (phone) => {
    // Basic phone number validation (allows + and numbers, 7 to 15 digits)
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    return phoneRegex.test(phone);
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateStep = () => {
    const newErrors = [];

    if (currentStep === 4) {
      if (!form.organizationName)
        newErrors.push(translateText[language].requiredOrgName);
      if (
        !form.organizationType ||
        form.organizationType === "Otra" ||
        (form.organizationType === "Outra" && !form.otherOrganizationType)
      )
        // Check for 'Otra' or 'Outra' and its specific input
        newErrors.push(translateText[language].requiredOrgType);
      if (
        !form.country ||
        form.country === "Otro" ||
        (form.country === "Outro" && !form.otherCountry)
      )
        // Check for 'Otro' or 'Outro' and its specific input
        newErrors.push(translateText[language].requiredCountry);
      if (!form.legalRepName)
        newErrors.push(translateText[language].requiredLegalRepName);
      if (!form.legalRepPosition)
        newErrors.push(translateText[language].requiredLegalRepPosition);
      if (!form.email) {
        newErrors.push(translateText[language].requiredEmail);
      } else if (!isValidEmail(form.email)) {
        newErrors.push(translateText[language].invalidEmailFormat);
      }
      if (!form.phone) {
        newErrors.push(translateText[language].requiredPhone);
      } else if (!isValidPhone(form.phone)) {
        newErrors.push(translateText[language].invalidPhoneFormat);
      }
      form.team.forEach((member, index) => {
        if (!member.name)
          newErrors.push(
            translateText[language].requiredTeamMemberName(index + 1)
          );
        if (!member.position)
          newErrors.push(
            translateText[language].requiredTeamMemberPosition(index + 1)
          );
        if (!member.email) {
          newErrors.push(
            translateText[language].requiredTeamMemberEmail(index + 1)
          );
        } else if (!isValidEmail(member.email)) {
          newErrors.push(
            translateText[language].invalidTeamMemberEmailFormat(index + 1)
          );
        }
      });
    }
    if (currentStep === 0) {
      if (!form.name)
        newErrors.push(translateText[language].requiredProjectName);
      if (!form.city) newErrors.push(translateText[language].requiredCity);
      if (!form.startDate)
        newErrors.push(translateText[language].requiredStartDate);
    }
    if (currentStep === 1) {
      if (!form.need) newErrors.push(translateText[language].requiredNeed);
      if (!form.objectives)
        newErrors.push(translateText[language].requiredObjectives);
      if (!form.targetAudience)
        newErrors.push(translateText[language].requiredTargetAudience);
      if (!form.activities)
        newErrors.push(translateText[language].requiredActivities);
      if (!form.resultsObtained) {
        newErrors.push(translateText[language].requiredResultsObtained);
      }
    }
    if (
      currentStep === 2 &&
      form.category === "Instituciones públicas y Empresas privadas"
    ) {
      if (!form.innovation)
        newErrors.push(translateText[language].requiredInnovation);
      if (!form.impact) newErrors.push(translateText[language].requiredImpact);
      if (!form.transferability)
        newErrors.push(translateText[language].requiredTransferability);
      if (!form.sustainability)
        newErrors.push(translateText[language].requiredSustainability);
    }
    if (
      currentStep === 2 &&
      form.category ===
      "Organizaciones de la sociedad civil y Entidades académicas"
    ) {
      if (!form.methodology)
        newErrors.push(translateText[language].requiredMethodology);
      if (!form.outcomes)
        newErrors.push(translateText[language].requiredOutcomes);
      if (!form.transferability)
        newErrors.push(translateText[language].requiredTransferability); // Replicability for ONG/Academy
      if (!form.sustainability)
        newErrors.push(translateText[language].requiredSustainability); // Sustainability for ONG/Academy
    }

    if (currentStep === 3) {
      if (form.acceptanceLetter.length === 0) {
        newErrors.push(translateText[language].requiredAcceptanceLetter);
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

  if (isSaving) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {/* <div className="max-w-3xl w-full rounded-md justify-center items-center"> */}
        {/* {language === "es"
            ? "Guardando postulación..."
            : language === "en"
              ? "Saving application..."
              : "Salvando candidatura..."} */}
        <LoadingSpinner />
        {/* </div> */}
      </div>
    );
  }

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const onSubmit = async () => {
    if (validateStep()) {
      const userConfirmed = window.confirm(translateText[language].confirm);

      if (userConfirmed) {
        setIsSaving(true);

        try {
          await createFicha(form);
          navigate("/");
          setIsSubmitted(true);
        } catch (error) {
          console.error("Error al guardar la ficha:", error);
        } finally {
          setIsSaving(false);
        }
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

  const handleRemoveFile2 = (index) => {
    const updatedFiles = form.files.filter((_, i) => i !== index);
    setForm({ ...form, files: updatedFiles });
  };

  const handleRemoveAcceptanceLetter = (index) => {
    const updatedFiles = form.acceptanceLetter.filter((_, i) => i !== index);
    setForm({ ...form, acceptanceLetter: updatedFiles });
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
      handleAddLink={handleAddLink}
      handleLinkChange={handleLinkChange}
      handleFileChange={handleFileChange}
      handleLetterChange={handleLetterChange}
      handleRemoveFile2={handleRemoveFile2}
      handleRemoveAcceptanceLetter={handleRemoveAcceptanceLetter}
      handleRemoveLink={handleRemoveLink}
      handleInputChange={handleInputChange}
      translateText={translateText}
      language={language}
    />,
    <Step5
      form={form}
      handleChange={handleChange}
      handleTeamChange={handleTeamChange}
      handleInputChange={handleInputChange}
      addTeamMember={addTeamMember}
      removeTeamMember={removeTeamMember}
      handleAssociationChange={handleAssociationChange}
      translateText={translateText}
      language={language}
    />,
  ];

  const switchToSpanish = () => {
    toggleLanguage("es"); // Pass 'es' to toggleLanguage
  };

  const switchToEnglish = () => {
    toggleLanguage("en"); // Pass 'en' to toggleLanguage
  };

  const switchToPortuguese = () => {
    toggleLanguage("pt"); // Pass 'pt' to toggleLanguage
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
        {/* <div className="flex justify-end p-4 space-x-2"> */}
        <div className="bg-white text-sm   inline-block px-1 pt-3  rounded-sm">
          {language === "es"
            ? "Cambiar idioma >"
            : language === "en"
              ? "Change language >"
              : "Alterar idioma >"}
        </div>
        <button
          className={`rounded-full p-0.5 border ${language === "es" ? "bg-[#a49fc4]" : "bg-white hover:bg-[#a49fc4]"
            }`}
          onClick={switchToSpanish}
        >
          ES
        </button>
        <button
          className={`rounded-full p-0.5 border ${language === "en" ? "bg-[#a49fc4]" : "bg-white hover:bg-[#a49fc4]"
            }`}
          onClick={switchToEnglish}
        >
          EN
        </button>
        <button
          className={`rounded-full p-0.5 border ${language === "pt" ? "bg-[#a49fc4]" : "bg-white hover:bg-[#a49fc4]"
            }`}
          onClick={switchToPortuguese}
        >
          PT
        </button>
      </div>

      <div className="max-w-3xl w-full py-10 px-2 sm:p-10 rounded-md">
        <div className="mb-6">
          <div className="text-center text-sm mb-1">
            {currentStep + 1}{" "}
            {language === "en" ? "of" : language === "es" ? "de" : "de"}{" "}
            {steps.length}
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
            <div className="flex justify-between  mt-6">
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
                  : "bg-[#6c6a77] hover:bg-[#6c6a77]"
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
