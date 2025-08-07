import React, { useState, useEffect, useRef } from "react";
import { FaAngleLeft, FaAngleRight, FaAngleDown } from "react-icons/fa";
import { LuCircleArrowLeft } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useIniciativas } from "../context/IniciativasContext";
import { FaEye } from "react-icons/fa";
import H from "@here/maps-api-for-javascript";

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

const Map = ({ apikey, iniciativas }) => {
  const mapRef = useRef(null);
  const map = useRef(null);
  const platform = useRef(null);
  const [modalData, setModalData] = useState({
    visible: false,
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    if (!map.current) {
      platform.current = new H.service.Platform({ apikey });
      const defaultLayers = platform.current.createDefaultLayers({
        pois: true,
      });
      const newMap = new H.Map(
        mapRef.current,
        defaultLayers.vector.normal.map,
        {
          zoom: 4,
          center: { lat: -20, lng: -50 },
        }
      );

      const behavior = new H.mapevents.Behavior(
        new H.mapevents.MapEvents(newMap)
      );
      const ui = H.ui.UI.createDefault(newMap, defaultLayers);

      map.current = newMap;

      // iniciativas.map((iniciativa) => {
      //   const location = new H.geo.Point(
      //     iniciativa.location.latitud,
      //     iniciativa.location.longitud
      //   );
      //   const marker = new H.map.Marker(location);
      //   marker.setData(iniciativa);
      //   marker.setIcon(new H.map.Icon("img/marker.png"));
      //   newMap.addObject(marker);
      // });

      const locations = iniciativas.map((iniciativa) => {
        console.log("dibujar iniciativa en el mapa:", iniciativa);
        return {
          latitud: iniciativa.location.latitud,
          longitud: iniciativa.location.longitud,
          // Add any additional properties if needed
        };
      });

      createResizableCircles(map.current, locations);
    }
  }, [apikey]);

  function createResizableCircles(map, locations) {
    locations.forEach((location) => {
      const circle = new H.map.Circle(location, 85000, {
        style: { fillColor: "rgba(158, 0, 250, 0.7)", lineWidth: 0 },
      });
      const circleOutline = new H.map.Polyline(
        circle.getGeometry().getExterior(),
        {
          style: { lineWidth: 8, strokeColor: "rgba(243, 255, 5, 0)" },
        }
      );
      const circleGroup = new H.map.Group({
        volatility: true,
        objects: [circle, circleOutline],
      });

      circleOutline
        .getGeometry()
        .pushPoint(circleOutline.getGeometry().extractPoint(0));

      map.addObject(circleGroup);

      // Add an event listener for circle tap
      circleGroup.addEventListener(
        "tap",
        function () {
          const center = circle.getCenter();
          setModalData({ visible: true, lat: center.lat, lng: center.lng });
        },
        false
      );

      circleGroup.addEventListener(
        "pointerenter",
        function () {
          circleOutline.setStyle({ strokeColor: "rgb(255, 0, 0)" });
        },
        true
      );

      circleGroup.addEventListener(
        "pointerleave",
        function () {
          circleOutline.setStyle({ strokeColor: "rgba(255, 0, 0, 0)" });
          document.body.style.cursor = "default";
        },
        true
      );

      circleGroup.addEventListener(
        "pointermove",
        function (evt) {
          document.body.style.cursor =
            evt.target instanceof H.map.Polyline ? "pointer" : "default";
        },
        true
      );

      circleGroup.addEventListener(
        "drag",
        function (evt) {
          const pointer = evt.currentPointer;
          const distanceFromCenter = circle
            .getCenter()
            .distance(map.screenToGeo(pointer.viewportX, pointer.viewportY));

          if (evt.target instanceof H.map.Polyline) {
            circle.setRadius(distanceFromCenter);

            const outlineGeometry = circle.getGeometry().getExterior();
            outlineGeometry.pushPoint(outlineGeometry.extractPoint(0));
            circleOutline.setGeometry(outlineGeometry);

            evt.stopPropagation();
          }
        },
        true
      );
    });
  }

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "500px",
        }}
        ref={mapRef}
      />

      {modalData.visible && (
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            backgroundColor: "white",
            padding: "20px",
            border: "1px solid black",
            zIndex: "1000",
          }}
        >
          <h4>Location Details</h4>
          <p>Latitude: {modalData.lat}</p>
          <p>Longitude: {modalData.lng}</p>
          <button
            onClick={() => setModalData({ visible: false, lat: 0, lng: 0 })}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

const MapaConFiltro = () => {
  const [iniciativasFilter, setIniciativas] = useState([]);
  const { getIniciativasPorPais, iniciativas, getIniciativas } =
    useIniciativas();

  const [mostrarFiltro, setMostrarFiltro] = useState(true);
  const [regionActiva, setRegionActiva] = useState(null);
  const [paisSeleccionado, setPaisSeleccionado] = useState(null);

  useEffect(() => {
    getIniciativas();
  }, []);

  useEffect(() => {
    if (iniciativas.length > 0) {
      //console.log("iniciativas:", iniciativas);
    }
  }, [iniciativas]);

  const toggleFiltro = () => setMostrarFiltro(!mostrarFiltro);

  const handlePaisClick = (pais) => {
    setPaisSeleccionado(pais);
    getIniciativasPorPais(pais).then((data) => {
      setIniciativas(data);
      setMostrarFiltro(false);
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-xl shadow-md  mx-auto">
      <div className="relative w-full h-150">
        {iniciativas && (
          <Map
            apikey={"V-p2IrxC_hM0fzfISBie3C0opnL6iu2hxmsVZC56LQY"}
            iniciativas={iniciativas}
          />
        )}

        {!mostrarFiltro && !paisSeleccionado && (
          <Link
            className="absolute top-0 right-0 mt-2 mr-2 bg-white border border-[#5d5593] text-[#5d5593] px-4 py-2 rounded-xl hover:bg-[#a49fc4] z-10"
            onClick={toggleFiltro}
          >
            <FaAngleLeft className="text-xl inline" />
            <span className="ml-1">Mostrar filtro</span>
          </Link>
        )}

        {mostrarFiltro && !paisSeleccionado && (
          <div className="absolute top-0 right-0 h-full bg-white shadow-lg w-104 overflow-hidden z-10">
            <div className="flex justify-between items-center p-2 border-b border-[#D9D6E1]">
              <h2 className="text-xl font-semibold">Iniciativas</h2>
              <button
                onClick={toggleFiltro}
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

        {paisSeleccionado && (
          <div className="absolute top-0 right-0 h-full bg-white shadow-lg w-104 z-20 overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b border-[#D9D6E1]">
              <Link
                onClick={() => {
                  setPaisSeleccionado(null);
                  setMostrarFiltro(true);
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
        )}
      </div>
    </div>
  );
};

export default MapaConFiltro;
