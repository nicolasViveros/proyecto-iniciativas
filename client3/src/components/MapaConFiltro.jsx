import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight, FaAngleDown } from "react-icons/fa";
import { LuCircleArrowLeft } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useIniciativas } from "../context/IniciativasContext";
import { FaEye } from "react-icons/fa";
import Map from "./Map";

const regiones = {
  "Sur América": [
    "Argentina",
    "Brasil",
    "Bolivia",
    "Chile",
    "Colombia",
    "Ecuador",
    "Perú",
  ],
  "Centro América": ["Costa Rica", "El Salvador", "México"],
  Internacional: ["Internacional"],
};

const MapaConFiltro = () => {
  const [iniciativasFilter, setIniciativas] = useState([]);
  const { getIniciativasPorPais, getIniciativasPorCiudad, iniciativas, getIniciativas } =
    useIniciativas();

  const [mostrarFiltro, setMostrarFiltro] = useState(false);
  const [regionActiva, setRegionActiva] = useState(null);
  const [paisSeleccionado, setPaisSeleccionado] = useState(null);
  const [ciudadSeleccionado, setCiudadSeleccionado] = useState(null); // Usar esta variable para mostrar el mapa de la ciudad seleccionada

  const mostrarFiltroRegiones = () => {
    setMostrarFiltro(!mostrarFiltro);
  };

  const cargarIniciativas = (tipo, value) => {
    if (tipo === "pais") {
      setPaisSeleccionado(value);
      getIniciativasPorPais(value).then((data) => {
        setIniciativas(data);
        setMostrarFiltro(true);
        setCiudadSeleccionado(null); // Ensure no city is selected
      });
    } else if (tipo === "ciudad") {
      setCiudadSeleccionado(value);
      getIniciativasPorCiudad(value).then((data) => {
        setIniciativas(data);
        setMostrarFiltro(true);
        setPaisSeleccionado(null); // Ensure no country is selected
      });
    }
  };

  useEffect(() => {
    getIniciativas();
  }, []);

  const toggleFiltro = () => setMostrarFiltro(!mostrarFiltro);

  const handlePaisClick = (pais) => {
    setPaisSeleccionado(pais);
    getIniciativasPorPais(pais).then((data) => {
      setIniciativas(data);
      setMostrarFiltro(true);
    });
  };

  const handleCityClick = (city) => {
    setCiudadSeleccionado(city)
    getIniciativasPorCiudad(city).then((data) => {
      setIniciativas(data);
      setMostrarFiltro(true);
      setPaisSeleccionado(null); // To ensure no country filter is showing
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-xl shadow-md mx-auto">
      <div className="relative w-full h-150">
        {iniciativas.length > 0 && (
          <Map
            apikey={"V-p2IrxC_hM0fzfISBie3C0opnL6iu2hxmsVZC56LQY"}
            iniciativas={iniciativas}
            onCitySelect={(city) => cargarIniciativas("ciudad", city)}
          />
        )}

        {!mostrarFiltro && !paisSeleccionado && !ciudadSeleccionado && (
          <Link
            className="absolute top-0 right-0 mt-2 mr-2 bg-white border border-[#5d5593] text-[#5d5593] px-4 py-2 rounded-xl hover:bg-[#a49fc4] z-10"
            onClick={mostrarFiltroRegiones}
          >
            <FaAngleLeft className="text-xl inline" />
            <span className="ml-1">Mostrar filtro</span>
          </Link>
        )}

        {mostrarFiltro && (
          <div className="absolute top-0 right-0 h-full bg-white shadow-lg w-104 overflow-hidden z-10">
            <div className="flex justify-between items-center p-2 border-b border-[#D9D6E1]">
              <h2 className="text-xl font-semibold">Iniciativas en {ciudadSeleccionado}</h2>
              <button
                onClick={() =>{mostrarFiltroRegiones, setMostrarFiltro(false)}
                }
                
                className="border border-[#5d5593] text-[#5d5593] px-4 py-2 rounded-xl hover:bg-[#a49fc4] z-10"
              >
                Ocultar
                <FaAngleRight className="text-xl inline" />
              </button>
            </div>

            <div className="p-3 overflow-y-auto h-[calc(100%-40px)]">
              {Object.entries(regiones).map(([region, paises]) => (
                <div key={region} className="mb-4 border-b border-[#D9D6E1]">
                  <button
                    className="flex justify-between items-center w-full text-lg font-semibold hover:underline"
                    onClick={() =>
                      setRegionActiva(regionActiva === region ? null : region)
                    }
                  >
                    <span>{region}</span>
                    <FaAngleDown className="text-xl inline" />
                  </button>
                  {regionActiva === region && (
                    <ul className="pl-3 pt-2 text-base space-y-1">
                      {paises.map((pais) => (
                        <li
                          key={pais}
                          className="cursor-pointer hover:underline"
                          onClick={() => cargarIniciativas("pais", pais)}
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

      {paisSeleccionado ? (
        <div className="absolute top-0 right-0 h-full bg-white shadow-lg w-104 z-20 overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b border-[#D9D6E1]">
            <Link
              onClick={() => {
                setIniciativas([]);
                mostrarFiltroRegiones();
              }}
              className="text-xl font-semibold cursor-pointer hover:underline"
            >
              <LuCircleArrowLeft className="text-2xl inline hover:text-[#a49fc4]" />
            </Link>

            <h3 className="text-xl font-semibold">
              Iniciativas en {paisSeleccionado}
            </h3>
            <button
              onClick={() => {
                setPaisSeleccionado(null);
                setMostrarFiltro(false);
                setCiudadSeleccionado(null);

              }}
              className="border border-[#5d5593] text-[#5d5593] px-4 py-2 rounded-xl hover:bg-[#a49fc4] z-10"
            >
              Ocultar
              <FaAngleRight className="text-xl inline" />
            </button>
          </div>
          <div className="p-4 text-sm py-2 space-y-2">
            {iniciativasFilter.map((iniciativa) => (
              <div key={iniciativa._id} className="card my-2">
                <div className="card-body my-1">
                  <Link
                    className="card-title cursor-pointer text-lg hover:underline flex mb-2"
                    to={`/iniciativa/${iniciativa._id}`}
                  >
                    {iniciativa.nombreIniciativa}
                  </Link>
                  {iniciativa.ciudad ? (
                    <p className="text-sm font-bold">{iniciativa.ciudad}</p>
                  ) : (
                    <p className="text-sm font-bold">{iniciativa.alcance}</p>
                  )}
                  <span className="mt-1 mb-4 text-sm rounded truncated-text">
                    {iniciativa.descripcionIniciativa}
                  </span>
                  <Link
                    className=" bottom-1 right-1 flex justify-end hover:text-[#a49fc4] rounded-md underline"
                    to={`/iniciativa/${iniciativa._id}`}
                  >
                    <span className="ml-1">Revisar iniciativa</span>
                    <FaEye className="text-2xl ml-1 mb-1 inline" />
                  </Link>
                  <hr className="border-t-2 border-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-4 text-sm py-2 space-y-2">
          {iniciativasFilter.map((iniciativa) => (
            <div key={iniciativa._id} className="card my-2">
              <div className="card-body my-1">
                {/* Initiative display code */}
              </div>
            </div>
          ))}
        </div>
      )}

      {!paisSeleccionado && iniciativasFilter.length > 0 && (
        <div className="absolute top-0 right-0 h-full bg-white shadow-lg w-104 z-20 overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b border-[#D9D6E1]">
            <button
              onClick={() => {
                setIniciativas([]); // Clear initiatives to update state
                mostrarFiltroRegiones
              }}
              className="text-xl font-semibold cursor-pointer hover:underline"
            >
              <LuCircleArrowLeft className="text-2xl inline hover:text-[#a49fc4]" />
            </button>

            <h3 className="text-xl font-semibold">Iniciativas en {ciudadSeleccionado}</h3>
            <button
              onClick={() => {
                setMostrarFiltro(false);
                setPaisSeleccionado(null);
                setCiudadSeleccionado(null);
              }}
              className="border border-[#5d5593] text-[#5d5593] px-4 py-2 rounded-xl hover:bg-[#a49fc4] z-10"
            >
              Ocultar
              <FaAngleRight className="text-xl inline" />
            </button>
          </div>
          <div className="p-4 text-sm py-2 space-y-2">
            {iniciativasFilter.map((iniciativa) => (
              <div key={iniciativa._id} className="card my-2">
                <div className="card-body my-1">
                  <Link
                    className="card-title cursor-pointer text-lg hover:underline flex mb-2"
                    to={`/iniciativa/${iniciativa._id}`}
                  >
                    {iniciativa.nombreIniciativa}
                  </Link>
                  <p className="text-sm font-bold">{iniciativa.ciudad}</p>
                  <span className="mt-1 mb-4 text-sm rounded truncated-text">
                    {iniciativa.descripcionIniciativa}
                  </span>
                  <Link
                    className=" bottom-1 right-1 flex justify-end hover:text-[#a49fc4] rounded-md underline"
                    to={`/iniciativa/${iniciativa._id}`}
                  >
                    <span className="ml-1">Revisar iniciativa</span>
                    <FaEye className="text-2xl ml-1 mb-1 inline" />
                  </Link>
                  <hr className="border-t-2 border-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
    </div >
  );
};

export default MapaConFiltro;
