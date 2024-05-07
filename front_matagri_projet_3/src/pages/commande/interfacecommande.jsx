import React, { useState } from "react";
import { GoogleMap, DistanceMatrixService } from "@react-google-maps/api";

const GoogleMapsDistance = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState("");

  const calculateDistance = () => {
    if (!window.google || !window.google.maps) {
      console.error("L'API Google Maps n'est pas encore chargée.");
      return;
    }

    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: "DRIVING",
        unitSystem: window.google.maps.UnitSystem.METRIC,
      },
      (response, status) => {
        if (status === "OK") {
          const distanceValue = response.rows[0].elements[0].distance.value;
          const distanceInKm = distanceValue / 1000;
          setDistance(distanceInKm);
        } else {
          console.error(
            "Une erreur est survenue lors du calcul de la distance : ",
            status
          );
        }
      }
    );
  };

  return (
    <div>
      <h1>Calcul de Distance</h1>
      <div>
        <label htmlFor="origin">Origine :</label>
        <input
          type="text"
          id="origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="destination">Destination :</label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <button onClick={calculateDistance}>Calculer</button>
      {distance !== "" && <p>Distance : {distance} km</p>}
    </div>
  );
};

export default GoogleMapsDistance;
