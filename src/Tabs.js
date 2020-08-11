import React from "react";

export default function ({ tipo, setTipo }) {
  return (
    <div className="bg-white w-100 tab-group">
      <div
        className={`bg-white w-50 tab ${tipo === 1 ? "selected" : ""}`}
        onClick={() => setTipo(1)}
      >
        Consulta de Datos Semanales
      </div>
      <div
        className={`bg-white w-50 tab ${tipo === 2 ? "selected" : ""}`}
        onClick={() => setTipo(2)}
      >
        Consulta de Datos Mensuales
      </div>
    </div>
  );
}
