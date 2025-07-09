import React, { useState } from 'react';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    startDate: '',
    isActive: true,
    reasonInactive: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'radio' ? (value === 'true') : value;
    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with axios/fetch POST request
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">Información del proyecto postulado</h2>

      <label className="block mb-2">Nombre del proyecto o iniciativa:</label>
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <label className="block mb-2">Ciudad de implementación del proyecto:</label>
      <input
        name="city"
        type="text"
        value={formData.city}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <label className="block mb-2">Fecha de inicio de implementación:</label>
      <input
        name="startDate"
        type="date"
        value={formData.startDate}
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
            checked={formData.isActive === true}
            onChange={handleChange}
            className="mr-2"
          />
          Sí
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="isActive"
            value="false"
            checked={formData.isActive === false}
            onChange={handleChange}
            className="mr-2"
          />
          No
        </label>
      </div>

      {!formData.isActive && (
        <div className="mb-4">
          <label className="block mb-2">En caso de no estar vigente, explique brevemente por qué:</label>
          <textarea
            name="reasonInactive"
            value={formData.reasonInactive}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="3"
          ></textarea>
        </div>
      )}

      <button
        type="submit"
        className="w-full py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Continuar →
      </button>
    </form>
  );
};

export default ProjectForm;