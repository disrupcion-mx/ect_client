import React from "react";
import "./css/scoreboard.css";

export default function ({ municipios, headers, column, prefixes }) {
  return (
    <div>
      <table className="ranking-table">
        <thead className="text-left">
          <tr>
            <th>{headers ? headers[0] : "Entidad"}</th>
            <th>{headers ? headers[1] : "Calificación"}</th>
          </tr>
        </thead>
        <tbody>
          {municipios.map((municipio) => (
            <tr key={municipio.nombre}>
              <td className="text-left">
                {prefixes ? prefixes[0] : ""}
                {municipio.nombre}
              </td>
              <td className="text-right">
                {prefixes ? prefixes[1] : ""}
                {municipio.calificacion
                  ? municipio.calificacion
                  : municipio[column]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
