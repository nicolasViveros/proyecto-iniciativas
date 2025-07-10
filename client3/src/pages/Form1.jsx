import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) return alert("Selecciona un archivo");

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:4000/uploads", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Archivo subido con éxito");
    } catch (error) {
      console.error("Error al subir archivo", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded-lg mt-10">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium text-gray-700">
          Subir archivo (.pdf o .doc):
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="mb-4 block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
            file:rounded file:border-0 file:text-sm file:font-semibold
            file:bg-purple-100 file:text-purple-700 hover:file:bg-purple-200"
        />
        <button
          type="submit"
          className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
        >
          Subir
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
