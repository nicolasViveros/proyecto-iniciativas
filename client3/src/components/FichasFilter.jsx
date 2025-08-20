import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

export default function FichasFilter({ items, type = "ficha" }) {
  const [filtro, setFiltro] = useState("Todos");
  const [categoryFilter, setCategoryFilter] = useState("Todos");

  const getCountry = (item) => {
    return type === "iniciativa" ? item.pais : item.country;
  };

  const paises = useMemo(() => {
    const uniqueCountries = new Set(items.map((item) => getCountry(item)));
    return ["Todos", ...uniqueCountries];
  }, [items, type]);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(items.map((item) => item.category));
    return ["Todos", ...uniqueCategories];
  }, [items]);

  const fichasFiltradas = items.filter(item =>
    (filtro === "Todos" || getCountry(item) === filtro) &&
    (categoryFilter === "Todos" || item.category === categoryFilter)
  );

  return (
    <div className="flex flex-col items-center md:flex-row justify-between bg-white p-4 sm:p-8 rounded-xl w-full max-w-6xl mx-auto">
      <div className="py-10 px-1 sm:p-6 w-full">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center md:text-left">
          Filtrar {type === "ficha" ? "Postulaciones" : "Iniciativas"} por País
        </h2>

        <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
          {paises.map((pais) => (
            <button
              key={pais}
              onClick={() => setFiltro(pais)}
              className={`px-4 py-2 rounded ${filtro === pais
                ? "bg-[#5d5593] text-white font-bold"
                : "bg-[#ebe9f6] font-bold hover:bg-[#5d5593] hover:text-white transition"
                }`}>
              {pais}
            </button>
          ))}
        </div>

        {type === "ficha" && (

          <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center md:text-left">
              Filtrar por Categoría
            </h2>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category)}
                className={`px-4 py-2 rounded ${categoryFilter === category
                  ? "bg-[#5d5593] text-white font-bold"
                  : "bg-[#ebe9f6] font-bold hover:bg-[#5d5593] hover:text-white transition"
                  }`}>
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {fichasFiltradas.map((item) => (
            <div
              key={item._id}
              className="border rounded-lg p-4 shadow hover:shadow-lg flex flex-col justify-between h-full"
            >
              <div>
                <Link
                  to={`/${type === "ficha" ? "ficha" : "iniciativa"}/${item._id}`}
                  className="text-lg hover:underline mb-2"
                >
                  {type === "ficha" ? item.name : item.nombreIniciativa}
                </Link>
                {type === "ficha" ? (
                  <p className="text-sm font-bold">
                    {item.country}
                    {item.city ? ` - ${item.city}` : ""}
                  </p>
                ) : (
                  <p className="text-sm font-bold">
                    {item.pais}
                    {item.ciudad ? ` - ${item.ciudad}` : ""}
                  </p>
                )}
                <span className="mt-1 mb-6 text-sm rounded truncated-text">
                  {type === "ficha" ? item.organizationName : item.descripcionIniciativa}
                </span>
              </div>
              <Link
                to={`/${type === "ficha" ? "ficha" : "iniciativa"}/${item._id}`}
                className="flex justify-end hover:text-[#a49fc4] rounded-md mt-4"
              >
                <span className="ml-1">Revisar {type === "ficha" ? "postulación" : "iniciativa"}</span>
                <FaEye className="text-2xl ml-1 mb-1 inline" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}