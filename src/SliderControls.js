import React from "react";

export default function ({ setSlider, active, elements, limit }) {
  function getIndex(index) {
    if (limit && limit !== null) return limit - index;
    return index;
  }

  function isActive(index) {
    return active === index;
  }

  return (
    <>
      <h4>Navega por las Revisiones</h4>
      <div className="slider-indicators">
        {new Array(elements).fill(1).map((one, index) => (
          <button
            key={index}
            className={isActive(getIndex(index)) ? "active" : ""}
            aria-label="Ir a diapositiva 1"
            onClick={() => setSlider(getIndex(index))}
          />
        ))}
      </div>
      <p>Consulta el Ranking, Gasto y Criterios de Evaluación por Revision</p>
    </>
  );
}
