// Requiere instalar: react-leaflet, leaflet
// npm install react-leaflet leaflet

import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

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

  return (
    // <div className="relative w-full h-screen">
    //   {/* Mapa Interactivo */}
    //   <MapContainer center={[0, -60]} zoom={3} className="w-full h-full z-0">
    //     <TileLayer
    //       attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
    //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     />
    //   </MapContainer>

    //   {/* Filtro lateral */}
    //   <div className={`absolute top-0 right-0 h-full bg-white shadow-lg transition-all duration-300 z-10
    //     ${mostrarFiltro ? 'w-64' : 'w-12'} overflow-hidden`}>

    //     <div className="flex justify-between items-center p-2 border-b">
    //       <h2 className="text-sm font-semibold text-indigo-800">Iniciativas</h2>
    //       <button
    //         onClick={toggleFiltro}
    //         className="text-xs text-indigo-700 underline hover:text-indigo-900"
    //       >
    //         {mostrarFiltro ? "Ocultar" : "Mostrar"}
    //       </button>
    //     </div>

    //     {mostrarFiltro && (
    //       <div className="p-3 overflow-y-auto h-[calc(100%-40px)]">
    //         {Object.entries(regiones).map(([region, paises]) => (
    //           <div key={region} className="mb-4">
    //             <button
    //               className="text-sm font-semibold text-gray-800 hover:underline"
    //               onClick={() => setRegionActiva(regionActiva === region ? null : region)}
    //             >
    //               {region}
    //             </button>
    //             {regionActiva === region && (
    //               <ul className="pl-3 pt-2 text-sm text-indigo-700 space-y-1">
    //                 {paises.map((pais) => (
    //                   <li
    //                     key={pais}
    //                     className="cursor-pointer hover:underline"
    //                     onClick={() => setPaisSeleccionado(pais)}
    //                   >
    //                     {pais}
    //                   </li>
    //                 ))}
    //               </ul>
    //             )}
    //           </div>
    //         ))}
    //       </div>
    //     )}
    //   </div>

    //   {/* Sección de iniciativas por país */}
    //   {paisSeleccionado && (
    //     <div className="absolute bottom-0 left-0 w-full bg-white border-t shadow-xl z-20 max-h-[40%] overflow-y-auto">
    //       <div className="flex justify-between items-center p-4 border-b">
    //         <h3 className="text-lg font-semibold text-gray-800">
    //           Iniciativas en {paisSeleccionado}
    //         </h3>
    //         <button
    //           onClick={() => setPaisSeleccionado(null)}
    //           className="text-sm text-red-600 hover:underline"
    //         >
    //           Cerrar
    //         </button>
    //       </div>
    //       <div className="p-4 text-sm text-gray-700 space-y-2">
    //         <p>• Programa de transporte seguro para mujeres</p>
    //         <p>• Políticas de inclusión de género en movilidad urbana</p>
    //         <p>• Campañas de sensibilización en estaciones</p>
    //         {/* Aquí puedes mapear resultados dinámicos desde una API o MongoDB */}
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

export default MapaConFiltro;
