import React, { useEffect, useRef, useState } from "react";
import H from "@here/maps-api-for-javascript";
import { Link } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import { useIniciativas } from "../context/IniciativasContext";

const Map = ({ apikey, iniciativas, onCitySelect, center }) => {
  const { getIniciativasPorCiudad } = useIniciativas();
  const mapRef = useRef(null);
  const map = useRef(null);
  const platform = useRef(null);
  const [modalData, setModalData] = useState({
    visible: false,
    lat: 0,
    lng: 0,
    city: '',
    initiatives: [], // Initialize as empty array
  });

  const handlePointerEnter = (location, circle) => {
    circle.setStyle({ fillColor: "rgba(255, 165, 0, 0.5)" });
    getIniciativasPorCiudad(location.ciudad).then((data) => {
      setModalData({
        visible: true,
        lat: circle.getCenter().lat,
        lng: circle.getCenter().lng,
        city: location.ciudad,
        initiatives: data || [], // Default to empty array if no data
      });
    });
  };


  useEffect(() => {
    if (!map.current) {
      platform.current = new H.service.Platform({ apikey });
      const defaultLayers = platform.current.createDefaultLayers({
        pois: true,
      });
      map.current = new H.Map(
        mapRef.current,
        defaultLayers.vector.normal.map,
        {
          zoom: 4,
          center: center || { lat: -34.6037, lng: -58.3816 }, // Default center, e.g., Argentina
        }
      );

      new H.mapevents.Behavior(new H.mapevents.MapEvents(map.current));
      H.ui.UI.createDefault(map.current, defaultLayers);
    }

    // Update the map center when the `center` prop changes
    if (center && map.current) {
      map.current.setCenter(center);
    }

  }, [apikey, center, getIniciativasPorCiudad]);

  useEffect(() => {
    if (map.current && iniciativas) {
      map.current.removeObjects(map.current.getObjects());
      createResizableCircles(map.current, iniciativas);
    }
  }, [iniciativas]);


  function createResizableCircles(map, locations) {
    locations.forEach((location) => {
      if (!location.location) return;
      const position = {
        lat: location.location.latitud,
        lng: location.location.longitud,
        city: location.location.ciudad,
      };
      const circle = new H.map.Circle(position, 85000, {
        style: { fillColor: "rgba(158, 0, 250, 0.7)", lineWidth: 1 },
      });
      const circleOutline = new H.map.Polyline(
        circle.getGeometry().getExterior(),
        {
          style: { lineWidth: 10, strokeColor: "rgba(243, 255, 5, 0)" },
        }
      );
      const circleGroup = new H.map.Group({
        volatility: true,
        objects: [circle, circleOutline],
      });

      circleOutline.getGeometry()
        .pushPoint(circleOutline.getGeometry().extractPoint(0));

      map.addObject(circleGroup);

      circleGroup.addEventListener("tap", () => {
        if (onCitySelect) {
          onCitySelect(location.ciudad);
        }
      }, false);

      circleGroup.addEventListener("pointerenter", () => {
        handlePointerEnter(location, circle);
      }, true);

      circleGroup.addEventListener("pointerleave", () => {
        circle.setStyle({ fillColor: "rgba(158, 0, 250, 0.7)" });
        setModalData((prevData) => ({ ...prevData, visible: false }));
      }, true);

      circleGroup.addEventListener("pointermove", function (evt) {
        document.body.style.cursor =
          evt.target instanceof H.map.Polyline ? "pointer" : "default";
      }, true);
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
            left: "20px",
            padding: "25px",
            backgroundColor: "white",
            border: "1px solid black",
            borderRadius: "10px",
            boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
            zIndex: "1000",
            maxWidth: "450px"
          }}
        >
          <h3>Iniciativas en {modalData.city}</h3>
          <p className="text-sm">
            {`${modalData.initiatives.length}  encontradas`}
          </p>
          <Link
            to="#"
            onClick={() => setModalData({ visible: false, lat: 0, lng: 0, initiatives: [] })}
            className="absolute top-1 right-1 p-1 hover:text-[#a49fc4]"
          >
            <FaWindowClose className="text-xl" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Map;
