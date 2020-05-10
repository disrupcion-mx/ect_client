import React from "react";
import { rankings, conceptos } from "./utils";

export default function () {
  return (
    <div className="ranking">
      <h2>Ranking:</h2>
      <table>
        <thead>
          <tr>
            {rankings.map((municipio) => (
              <th key={municipio.nombre}>{municipio.nombre}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {conceptos.map((concepto) => (
            <tr key={concepto.slug}>
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
  );
}
