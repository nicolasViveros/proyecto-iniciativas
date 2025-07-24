// Requiere instalar: react-leaflet, leaflet
// npm install react-leaflet leaflet

import React, { useState } from "react";
// import { MapContainer, TileLayer } from 'react-leaflet';
// // import 'leaflet/dist/leaflet.css';

const regiones = {
  "Sur América": ["Argentina", "Brasil", "Bolivia", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Perú", "Surinam", "Uruguay", "Venezuela"],
  "Centro América": ["Belice", "Costa Rica", "El Salvador", "Guatemala", "Honduras", "Nicaragua", "Panamá"],
  "Caribe": ["Cuba", "República Dominicana", "Puerto Rico", "Haití", "Jamaica"]
};

const MapaConFiltro = () => {
  const [mostrarFiltro, setMostrarFiltro] = useState(true);
  const [regionActiva, setRegionActiva] = useState(null);
  const [paisSeleccionado, setPaisSeleccionado] = useState(null);

  const toggleFiltro = () => setMostrarFiltro(!mostrarFiltro);

  const handlePaisClick = (pais) => {
    setPaisSeleccionado(pais);
    setMostrarFiltro(false);
  };

  const redirigirIniciativa = () => {
    // Implement navigation logic here
    window.location.href = "/IniciativaPage.jsx"; // Example navigation
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-xl shadow-md max-w-6xl mx-auto">
      <div className="relative w-full h-screen">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html"
          className=" container w-auto h-full"
        />

        {/* Botón para mostrar filtro */}
        {!mostrarFiltro && !paisSeleccionado && (
          <button
            className="absolute top-0 right-0 mt-2 mr-2 text-xs text-indigo-700 underline hover:text-indigo-900 z-10"
            onClick={toggleFiltro}
          >
            Mostrar
          </button>
        )}

        {/* Filtro lateral */}
        {mostrarFiltro && !paisSeleccionado && (
          <div className="absolute top-0 right-0 h-full bg-white shadow-lg w-64 overflow-hidden z-10">
            <div className="flex justify-between items-center p-2 border-b">
              <h2 className="text-sm font-semibold text-indigo-800">Iniciativas</h2>
              <button
                onClick={toggleFiltro}
                className="text-xs text-indigo-700 underline hover:text-indigo-900"
              >
                Ocultar
              </button>
            </div>

            <div className="p-3 overflow-y-auto h-[calc(100%-40px)]">
              {Object.entries(regiones).map(([region, paises]) => (
                <div key={region} className="mb-4">
                  <button
                    className="text-sm font-semibold text-gray-800 hover:underline"
                    onClick={() => setRegionActiva(regionActiva === region ? null : region)}
                  >
                    {region}
                  </button>
                  {regionActiva === region && (
                    <ul className="pl-3 pt-2 text-sm text-indigo-700 space-y-1">
                      {paises.map((pais) => (
                        <li
                          key={pais}
                          className="cursor-pointer hover:underline"
                          onClick={() => handlePaisClick(pais)}
                        >
                          {pais}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sección de iniciativas por país en lugar del filtro */}
        {paisSeleccionado && (
          <div className="absolute top-0 right-0 h-full bg-white shadow-lg w-64 z-20 overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h3
                className="text-lg font-semibold text-gray-800 cursor-pointer hover:underline"
                onClick={redirigirIniciativa}
              >
                Iniciativas en {paisSeleccionado}
              </h3>
              <button
                onClick={() => {
                  setPaisSeleccionado(null);
                  setMostrarFiltro(true);
                }}
                className="text-sm text-red-600 hover:underline"
              >
                Cerrar
              </button>
            </div>
            <div className="p-4 text-sm text-gray-700 space-y-2">
              <p>• Programa de transporte seguro para mujeres</p>
              <p>• Políticas de inclusión de género en movilidad urbana</p>
              <p>• Campañas de sensibilización en estaciones</p>
              {/* Aquí puedes mapear resultados dinámicos desde una API o MongoDB */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapaConFiltro;