import React from "react";
import { rankings, conceptos } from "./utils";

export default function () {
  return (
    <div className="ranking">
      <h2 className="text-center">Criterios de Evaluación</h2>
      <div className="wrapper">
        <table className="text-center ranking-table">
          <thead>
            <tr>
              <th>Criterio</th>
              {rankings.map((municipio) => (
                <th key={municipio.nombre}>{municipio.nombre}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {conceptos.map((concepto) => (
              <tr key={concepto.slug} className="text-center">
                <td>{concepto.nombre}</td>
                {rankings.map((municipio) => (
                  <td key={`${concepto.slug}_${municipio.nombre}`}>
                    {municipio[concepto.slug] ? "✅" : "❌"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
