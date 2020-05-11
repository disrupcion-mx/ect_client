import React, { useState, useEffect, useRef } from "react";
import { rankings } from "./utils";
import "./css/downloads.css";

const ONE_SECOND = 1000;
export default function Downloads() {
  // State
  const [activeSlide, setActiveSlide] = useState(0);
  const [pause, setPause] = useState(false);

  // Refs
  const slider = useRef(null);

  // Methods
  function showSlide(index) {
    setActiveSlide(index);
  }

  function nextSlide() {
    setActiveSlide((activeSlide + 1) % 3);
  }

  // Computed Values
  function isActive(index) {
    return activeSlide === index;
  }

  function getSliderTranslation() {
    const style = { transform: `translateX(0px)` };

    if (slider.current) {
      style.transform = `translateX(${
        slider.current.clientWidth * -activeSlide
      }px)`;
    }

    return style;
  }

  // Lifecycle Hooks
  useEffect(() => {
    const interval = setInterval(() => {
      // Don't move if paused
      if (!pause) nextSlide();
    }, 10 * ONE_SECOND);
    return () => clearInterval(interval);
  });

  return (
    <div
      className="downloads"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <div ref={slider} className="slider">
        <div className="slider-wrapper" style={getSliderTranslation()}>
          <div className="slide slide1">
            <img
              alt="Fondo"
              src="img/banner-1-emergencia.jpg"
              height="auto"
              width="100%"
            />
            <div className="slide1-content">
              <h1>
                Transparencia es el primer paso para la rendición de cuentas
              </h1>
              <a href="/descarga" className="d-block">
                <button className="button">Descarga los datos</button>
              </a>
            </div>
          </div>
          <div className="slide slide2">
            <img
              alt="Fondo"
              src="img/banner-2-emergencia.jpg"
              height="auto"
              width="100%"
            />
            <div className="slide2-content">
              <h3>
                Con el objetivo de contribuír a la rendición de cuentas las
                ONGs:
              </h3>
              <h2>
                Evolución Mexicana <br />
                Colectivo Nosotros <br />
                Redes Quinto Poder IDEA <br />
                Vértebra Nuevo León <br />
              </h2>
              <h3>
                Lanzan el reto #EmergenciaConTransparencia para invitar a las
                entidades públicas de Nuevo León de los tres poderes de gobierno
                y organismos autónomos, que hayan ejercido, estén ejerciendo o
                vayan a ejercer recursos para atención del COVID-19, a que
                transparenten la información del gasto en la pandemia.
              </h3>
              <a href="/metodologia">
                <button className="button">Descarga la metodologia</button>
              </a>
            </div>
          </div>
          <div className="slide slide3">
            <img
              alt="Fondo"
              src="img/banner-3-emergencia.jpg"
              height="auto"
              width="100%"
            />
            <div className="slide3-content">
              <h2>
                A través de medios electrónicos se ha invitado a las entidades:
              </h2>
              <div className="municipios">
                {rankings.map(({ nombre }) => (
                  <span key={nombre}>{nombre}</span>
                ))}
              </div>
              <h2>
                También al poder legislativo, poder judicial y organismos
                autónomos que estén ejerciendo recursos públicos a que se sumen
                al reto
              </h2>
            </div>
          </div>
        </div>
        <div className="slider-indicators">
          <button
            className={isActive(0) ? "active" : ""}
            aria-label="Ir a diapositiva 1"
            onClick={() => showSlide(0)}
          ></button>
          <button
            className={isActive(1) ? "active" : ""}
            aria-label="Ir a diapositiva 2"
            onClick={() => showSlide(1)}
          ></button>
          <button
            className={isActive(2) ? "active" : ""}
            aria-label="Ir a diapositiva 3"
            onClick={() => showSlide(2)}
          ></button>
        </div>
      </div>
    </div>
  );
}
