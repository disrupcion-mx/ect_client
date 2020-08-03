import React from "react";
import "./css/hero.css";
import Scoreboard from "./Scoreboard";
import { score, expenses } from "./utils";

export default function ({ revision, fecha }) {
  const currentScore = score[revision];
  const currentGasto = expenses[revision];

  return (
    <div className="hero">
      <h1>#EmergenciaConTransparencia</h1>
      <a href="#mejorespracticas" className="button my">
        Consulta las Mejores Prácticas
      </a>
      <div className="wrapper">
        <h2 className="text-center">Ranking</h2>
        <Scoreboard {...currentScore} />
        <h4 className="text-center">Ranking a {fecha}</h4>
        <h4>Estrellas Extras</h4>
        <p>Criterio extra 1. Tabla del gasto resumida</p>
        <p>Criterio extra 2. Padrón de beneficiarios</p>
      </div>
      <div className="w-90">
        <p>Este ranking solo evalúa las formas.</p>
        <p>
          La calificación no significa aprobación y/o validación de la
          información publicada en los sitios de los entes públicos.
        </p>
        <p>
          Hacemos un llamado a la ciudadanía a revisar, verificar y comparar la
          información publicada para así hacer valer el derecho humano de acceso
          a la información y la rendición de cuentas.
        </p>
      </div>
      <div className="wrapper">
        <h2 className="text-center">Gasto Total</h2>
        <Scoreboard
          {...currentGasto}
          headers={["Entidad", "Monto"]}
          column="gasto"
          prefixes={["", "$"]}
          isMoney
        />
        <h4 className="text-center">Gasto a {fecha}</h4>
      </div>
    </div>
  );
}
