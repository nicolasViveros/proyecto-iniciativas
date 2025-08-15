// src/components/Banner.jsx
import React from 'react';

const BannerIniciativas = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-xl  mx-2">
      {/* Texto */}
      <div className="md:w-1/2 text-left space-y-4 pl-10">
        <h2 className="text-2xl md:text-3xl  ">
          Conoce las <span className=" font-bold">iniciativas de género en el transporte</span> de todo el mundo
        </h2>
        <p>
          Explora el mapa, filtra por regiones y descubre qué pasa en tu país y o ciudad.<br />
          Puedes postular nuevas iniciativas del 25 de julio al 25 de agosto.
        </p>
        <div className="flex space-x-4 pt-2">
          <button className="bg-[#5d5593] text-white px-4 py-3 rounded-xl hover:bg-[#a49fc4]">
            Postular iniciativa
          </button>
          <button className="border border-[#5d5593] text-[#5d5593] px-4 py-2 rounded-xl hover:bg-[#a49fc4]">
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
