import React, { useEffect, useRef, useState } from "react";
import H from "@here/maps-api-for-javascript";

const Map = ({ apikey, iniciativas }) => {
  console.log("iniciativas: ", iniciativas);
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

      const locations = [
        { lat: -34.6037, lng: -58.3816 }, // Buenos Aires, Argentina
        { lat: -12.0464, lng: -77.0428 }, // Lima, Peru
        { lat: -33.4489, lng: -70.6693 }, // Santiago, Chile
        { lat: -19.9167, lng: -43.9345 }, // Belo Horizonte, Brazil
        { lat: -34.9011, lng: -56.1645 }, // Montevideo, Uruguay
        { lat: 4.711, lng: -74.0721 }, // Bogota, Colombia
        { lat: 6.2442, lng: -75.5812 }, // Medellin, Colombia
        { lat: -23.5505, lng: -46.6333 }, // São Paulo, Brazil
        { lat: -22.9068, lng: -43.1729 }, // Rio de Janeiro, Brazil
        { lat: -0.2299, lng: -78.5249 }, // Quito, Ecuador
        { lat: -12.0464, lng: -77.0428 }, // Lima, Peru
        { lat: -15.8267, lng: -47.9218 }, // Brasilia, Brazil
        { lat: -3.119, lng: -60.0217 }, // Manaus, Brazil
        { lat: -16.5, lng: -68.15 }, // La Paz, Bolivia
        { lat: -16.3988, lng: -71.5369 }, // Arequipa, Peru
        { lat: -2.1704, lng: -79.9224 }, // Guayaquil, Ecuador
        { lat: -0.1807, lng: -78.4678 }, // Quito, Ecuador
        { lat: -3.7135, lng: -38.53 }, // Fortaleza, Brazil
        { lat: -31.7613, lng: -70.5263 }, // Santiago, Chile
        // Add other locations as needed
      ];
      const newlocations = iniciativas.map((iniciativa) => ({
        lat: iniciativa?.position?.latitud || 0,
        lng: iniciativa?.position?.longitud || 0,
      }));

      console.log("newlocations: ", newlocations);

      setTimeout(() => {
        createResizableCircles(map.current, locations);
      }, 3000);
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

export default Map;
