import React from "react";

export default function ({ name, website }) {
  return (
    <div className="city-card">
      <h4>{name}</h4>
      <ul>
        <li>Micrositio: {website ? "✅" : "❌"}</li>
        <li>Adquisición de insumos: {website ? "✅" : "❌"}</li>
        <li>Apoyos entregados: {website ? "✅" : "❌"}</li>
        <li>Apoyos utilizados: {website ? "✅" : "❌"}</li>
        <li>Donativos particulares: {website ? "✅" : "❌"}</li>
        <li>Actualización de la información.: {website ? "✅" : "❌"}</li>
      </ul>
    </div>
  );
}
