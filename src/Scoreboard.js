import React from "react";
import "./css/scoreboard.css";

export default function ({ municipios, headers, column, prefixes, isMoney }) {
  if (!municipios)
    return <div>Información no disponible para este período</div>;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function renderStars(municipio) {
    if (municipio.extra) {
      if(municipio.extra === 1.5) {
        return [<i key={0} className="fa fa-star" />, <i key={1} className="fa fa-star-half-alt" />];
      }
      return new Array(municipio.extra)
        .fill(1)
        .map((one, index) => <i key={index} className="fa fa-star" />);
    }
  }

  if(column && column !== null) {
    municipios = municipios.sort((a,b) => a[column] < b[column] ? 1 : -1);
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
                {municipio.calificacion !== undefined
                  ? municipio.calificacion
                  : isMoney
                  ? numberWithCommas(municipio[column])
                  : municipio[column]}
                {renderStars(municipio)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
