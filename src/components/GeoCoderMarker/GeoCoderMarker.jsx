import React, { useEffect, useState } from "react";
import { Marker, useMap, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import * as ELG from "esri-leaflet-geocoder";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
const GeoCoderMarker = ({ address }) => {
  const map = useMap();
  const [position, setPosition] = useState([31.9514, 115.8617]);
  useEffect(() => {
    ELG.geocode()
      .text(address)
      .run((error, results, response) => {
        if (results?.results?.length > 0) {
          const { lat, lng } = results?.results[0].latlng;
          setPosition([lat, lng]);
          map.flyTo([lat, lng], 5);
        }
      });
  }, [address]);
  return (
    <Marker position={position} icon={DefaultIcon}>
      <Popup />
    </Marker>
  );
};

export default GeoCoderMarker;
