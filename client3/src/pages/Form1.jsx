import React, { useState } from 'react';

const ProjectForm = () => {
    const [form, setForm] = useState({
        methodology: '',
        outcomes: '',
        transferability: '',
        sustainability: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form); // replace with your API call or data handling logic
      };
    
      return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">ONG/Academia</h2>
    
          <label className="block mb-1">
            ¿Qué enfoque, herramienta o metodología nueva han desarrollado o adaptado? ¿En qué se diferencia de lo ya existente?
          </label>
          <textarea
            name="methodology"
            value={form.methodology}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            rows="4"
            maxLength={300 * 6}
          />
    
          <label className="block mb-1">
            ¿Qué resultados o cambios ha generado la iniciativa en actores, políticas, conocimiento o prácticas sociales? Incluya datos si los tiene.
          </label>
          <textarea
            name="outcomes"
            value={form.outcomes}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            rows="4"
            maxLength={300 * 6}
          />
    
          <label className="block mb-1">
            ¿Puede aplicarse la propuesta en otros contextos? ¿Han transferido o compartido su trabajo con otras organizaciones o instituciones?
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
            ¿Qué continuidad ha tenido o tendrá la iniciativa tras su primera fase? ¿Existen redes, recursos o estructuras que la sostienen?
          </label>
          <textarea
            name="sustainability"
            value={form.sustainability}
            onChange={handleChange}
            className="w-full p-2 mb-6 border rounded"
            rows="4"
            maxLength={250 * 6}
          />
    
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