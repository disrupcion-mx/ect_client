import React from "react";
import CityCard from "./CityCard.js";

export default function () {
  const rankings = [
    { name: "Monterrey", website: false },
    { name: "Guadalupe", website: true },
    { name: "San Nicolás", website: false },
    { name: "Apodaca", website: true },
    { name: "Escobedo", website: true },
    { name: "Sta. Catarina", website: true },
    { name: "Juárez", website: false },
    { name: "García", website: false },
    { name: "San Pedro", website: true },
  ];

  return (
    <div className="ranking">
      <h2>Ranking:</h2>
      {rankings.map((ranking) => (
        <CityCard key={ranking.name} {...ranking}></CityCard>
      ))}
    </div>
  );
}
