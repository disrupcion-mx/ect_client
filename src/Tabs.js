import React from "react";

export default function ({ tipo, setTipo }) {
  return (
    <div className="bg-white w-100 tab-group">
      <div
        className={`w-50 tab ${tipo === 1 ? "selected" : ""}`}
        onClick={() => setTipo(1)}
      >
        Semanal
      </div>
      <div
        className={`w-50 tab ${tipo === 2 ? "selected" : ""}`}
        onClick={() => setTipo(2)}
      >
        Mensual
      </div>
    </div>
  );
}
