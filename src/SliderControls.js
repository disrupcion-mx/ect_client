import React from 'react';

export default function ({ setSlider, isActive, elements, limit }) {

    function getIndex(index) {
        if(limit && limit !== null) return limit - index;
        return index;
    }

  return (
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
  );
}
