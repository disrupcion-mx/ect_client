import React from "react";

export default function ({ municipios, conceptos }) {
  function renderMunicipios() {
    if (municipios && municipios !== null)
      return municipios.map((municipio) => (
        <th key={municipio.nombre}>{municipio.nombre}</th>
      ));
  }

  function renderConceptos() {
    if (conceptos && conceptos !== null) {
      return conceptos.map((concepto) => (
        <tr key={concepto.slug} className="text-center">
          <td>{concepto.nombre}</td>
          {renderCalificacion(concepto)}
        </tr>
      ));
    }
  }

  function renderCalificacion(concepto) {
    if(concepto && concepto !== null) {
      if(concepto.municipios && concepto.municipios !== null) {
        return concepto.municipios.map((municipio) => (
          <td key={`${concepto.slug}_${municipio.nombre}`}>
            {municipio[concepto.slug]
              ? municipio[concepto.slug] === 0.5
                ? "✔️"
                : "✅"
              : "❌"}
          </td>
        ));
      }
    }
  }

  return (
    <table className="text-center ranking-table">
      <thead>
        <tr>
          <th>Criterio</th>
          {renderMunicipios()}
        </tr>
      </thead>
      <tbody>{renderConceptos()}</tbody>
    </table>
  );
}
