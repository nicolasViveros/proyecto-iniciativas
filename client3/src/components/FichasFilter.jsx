import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

export default function FichasFilter({ items, type = "ficha" }) {
  const [filtro, setFiltro] = useState("Todos");

  const getCountry = (item) => {
    return type === "iniciativa" ? item.pais : item.country;
  };

  const paises = useMemo(() => {
    const uniqueCountries = new Set(items.map((item) => getCountry(item)));
    return ["Todos", ...uniqueCountries];
  }, [items, type]);

  const fichasFiltradas =
    filtro === "Todos" ? items : items.filter((item) => getCountry(item) === filtro);

  return (
    <div className="flex flex-col items-center md:flex-row justify-between bg-white p-4 sm:p-8 rounded-xl shadow-md w-full max-w-6xl mx-auto">
      <div className="p-4 sm:p-6 w-full">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center md:text-left">
          Filtrar {type === "ficha" ? "Fichas" : "Iniciativas"} por País
        </h2>

        <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
          {paises.map((pais) => (
            <button
              key={pais}
              onClick={() => setFiltro(pais)}
              className={`px-4 py-2 rounded ${filtro === pais
                ? "bg-[#5d5593] text-white font-bold"
                : "bg-[#ebe9f6] font-bold hover:bg-[#5d5593] hover:text-white transition"
                }`}
            >
              {pais}
            </button>
          ))}
        </div>

        {type === "ficha" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {fichasFiltradas.map((item) => (
              <div
                key={item._id}
                className="border rounded-lg p-4 shadow hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <Link
                    to={`/ficha/${item._id}`}
                    className="text-lg hover:underline flex mb-2"
                  >
                    {item.name}
                  </Link>
                  {item.organizationName ? (
                    <p className="text-sm font-bold">{item.organizationName}</p>
                  ) : (
                    <p className="text-sm font-bold">{item.country}</p>
                  )}
                  <span className="mt-1 mb-6 text-sm rounded truncated-text">
                    {item.need}
                  </span>
                </div>
                <Link
                  to={`/ficha/${item._id}`}
                  className="absolute bottom-1 right-1 flex hover:text-[#a49fc4] rounded-md"
                >
                  <span className="ml-1">Revisar ficha</span>
                  <FaEye className="text-2xl ml-1 mb-1 inline" />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {fichasFiltradas.map((item) => (
              <div
                key={item._id}
                className="border rounded-lg p-4 shadow hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <Link
                    to={`/iniciativa/${item._id}`}
                    className="text-lg hover:underline flex mb-2"
                  >
                    {item.nombreIniciativa}
                  </Link>
                  {item.ciudad ? (
                    <p className="text-sm font-bold">{item.ciudad}</p>
                  ) : (
                    <p className="text-sm font-bold">{item.alcance}</p>
                  )}
                  <span className="mt-1 mb-6 text-sm rounded truncated-text">
                    {item.descripcionIniciativa}
                  </span>
                </div>
                <Link
                  to={`/iniciativa/${item._id}`}
                  className="absolute bottom-1 right-1 flex hover:text-[#a49fc4] rounded-md"
                >
                  <span className="ml-1">Revisar iniciativa</span>
                  <FaEye className="text-2xl ml-1 mb-1 inline" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}