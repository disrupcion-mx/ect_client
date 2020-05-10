import React from "react";
import "./css/cards.css";

export default function ({ nombre, sitio, insumos, entregados, utilizados, donativos, informacion }) {
  return (
    <div className="city-card">
      <h4>{nombre}</h4>
      <ul>
        <li>Micrositio: {sitio ? "✅" : "❌"}</li>
        <li>Adquisición de insumos: {insumos ? "✅" : "❌"}</li>
        <li>Apoyos entregados: {entregados ? "✅" : "❌"}</li>
        <li>Apoyos utilizados: {utilizados ? "✅" : "❌"}</li>
        <li>Donativos particulares: {donativos ? "✅" : "❌"}</li>
        <li>Actualización de la información.: {informacion ? "✅" : "❌"}</li>
      </ul>
    </div>
  );
}
