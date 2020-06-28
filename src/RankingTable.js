import React from 'react';

export default function ({ municipios, conceptos }) {
  return (
    <table className="text-center ranking-table">
      <thead>
        <tr>
          <th>Criterio</th>
          {municipios.map((municipio) => (
            <th key={municipio.nombre}>{municipio.nombre}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {conceptos.map((concepto) => (
          <tr key={concepto.slug} className="text-center">
            <td>{concepto.nombre}</td>
            {municipios.map((municipio) => (
              <td key={`${concepto.slug}_${municipio.nombre}`}>
                {municipio[concepto.slug] ? (municipio[concepto.slug] === 0.5 ? "✔️" : "✅") : "❌"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
