import React, { useState } from "react";

const MapaConFiltro = () => {
  const [mostrarFiltro, setMostrarFiltro] = useState(true);

  const toggleFiltro = () => {
    setMostrarFiltro(!mostrarFiltro);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Mapa base (puedes reemplazar esto con un componente de mapa real como react-leaflet o Mapbox) */}
      <img
         src="https://www.openstreetmap.org/export/embed.html"// reemplázalo por la ruta del mapa real o un iframe si usas un mapa dinámico
        alt="mapa"
        className="w-full h-full object-cover"
      />

      {/* Panel de filtro */}
      <div className={`absolute top-0 right-0 h-full bg-white shadow-xl transition-all duration-300 
        ${mostrarFiltro ? 'w-64' : 'w-12'} overflow-hidden border-l border-gray-200`}>

        <div className="flex justify-between items-center p-2 border-b">
          <h2 className="text-sm font-semibold text-indigo-800">Iniciativas</h2>
          <button
            onClick={toggleFiltro}
            className="text-xs text-indigo-700 underline hover:text-indigo-900"
          >
            {mostrarFiltro ? "Ocultar" : "Mostrar"}
          </button>
        </div>

        {mostrarFiltro && (
          <div className="p-4 overflow-y-auto h-[calc(100%-50px)]">
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Sur América</h3>
              <ul className="text-sm space-y-1 text-indigo-700">
                {[
                  "Argentina", "Brasil", "Bolivia", "Chile", "Colombia", "Ecuador",
                  "Guyana", "Paraguay", "Perú", "Surinam", "Uruguay", "Venezuela"
                ].map(pais => (
                  <li key={pais} className="cursor-pointer hover:underline">
                    {pais}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Caribe</h3>
              {/* Lista de países del Caribe */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapaConFiltro;
