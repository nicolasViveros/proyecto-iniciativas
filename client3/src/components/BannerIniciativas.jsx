// src/components/Banner.jsx
import React from 'react';

const BannerIniciativas = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-xl shadow-md max-w-6xl mx-auto">
      {/* Texto */}
      <div className="md:w-1/2 text-left space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Conoce las <span className="text-indigo-600 font-bold">iniciativas de género en el transporte</span> de todo el mundo
        </h2>
        <p className="text-gray-600">
          Explora el mapa, filtra por temas y descubre qué pasa en tu región.<br />
          Puedes postular nuevas iniciativas del 30 de junio al 15 de agosto.
        </p>
        <div className="flex space-x-4 pt-2">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Postular iniciativa
          </button>
          <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100">
            Más información
          </button>
        </div>
      </div>

      {/* Imagen */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img src="/banner.png" alt="Banner transporte género" className="w-full max-w-md" />
      </div>
    </div>
  );
};

export default BannerIniciativas;
