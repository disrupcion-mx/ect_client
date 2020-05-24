import React from "react";
import "./css/scoreboard.css";

export default function ({ municipios, headers, column, prefixes, isMoney }) {

  if(!municipios) return <div>Información no disponible para este período</div>;  

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

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
                  : isMoney ? numberWithCommas(municipio[column]) : municipio[column]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
