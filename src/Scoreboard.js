import React from "react";
import "./css/scoreboard.css";

export default function ({ municipios }) {
  return (
    <div>
      <table className="ranking-table">
        <thead className="text-left">
          <tr>
            <th>Entidad</th>
            <th>Calificación</th>
          </tr>
        </thead>
        <tbody>
          {municipios.map((municipio) => (
            <tr key={municipio.nombre}>
              <td className="text-left">{municipio.nombre}</td>
              <td className="text-right">{municipio.calificacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
