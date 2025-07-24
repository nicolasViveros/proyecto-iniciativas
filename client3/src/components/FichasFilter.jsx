// FichasFilter.jsx
import { useState } from "react";

const paises = ["Todos", "México", "Colombia", "Argentina", "Chile"];

const fichas = [
  {
    id: 1,
    pais: "México",
    titulo: "Movilidad Inclusiva en CDMX",
    descripcion: "Iniciativa para transporte inclusivo en la Ciudad de México.",
  },
  {
    id: 2,
    pais: "Colombia",
    titulo: "Ruta Segura para Mujeres",
    descripcion: "Mejoras de seguridad en transporte público en Bogotá.",
  },
  {
    id: 3,
    pais: "Argentina",
    titulo: "Transporte Verde",
    descripcion: "Promoción de movilidad eléctrica en Buenos Aires.",
  },
  {
    id: 4,
    pais: "Chile",
    titulo: "Red de Ciclovías Equitativa",
    descripcion: "Expansión de ciclovías con enfoque de género.",
  },
];

export default function FichasFilter() {
  const [filtro, setFiltro] = useState("Todos");

  const fichasFiltradas =
    filtro === "Todos" ? fichas : fichas.filter((ficha) => ficha.pais === filtro);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-xl shadow-md max-w-6xl mx-auto">

    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Filtrar Fichas por País</h2>

      {/* Botones de filtro */}
      <div className="flex flex-wrap gap-2 mb-6">
        {paises.map((pais) => (
          <button
            key={pais}
            onClick={() => setFiltro(pais)}
            className={`px-4 py-2 rounded border ${
              filtro === pais
                ? "bg-indigo-600 text-white"
                : "bg-white text-indigo-600 border-indigo-600"
            } hover:bg-indigo-500 hover:text-white transition`}
          >
            {pais}
          </button>
        ))}
      </div>

      {/* Lista de fichas */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {fichasFiltradas.map((ficha) => (
          <div key={ficha.id} className="border rounded-lg p-4 shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold text-indigo-700">{ficha.titulo}</h3>
            <p className="text-sm text-gray-600">{ficha.descripcion}</p>
            <span className="mt-2 inline-block text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
              {ficha.pais}
            </span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
