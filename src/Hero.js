import React from "react";
import "./css/hero.css";
import Scoreboard from "./Scoreboard";
import { score } from "./utils";

export default function ({ revision }) {

  const currentScore = score[revision];

  return (
    <div className="hero">
      <h1>#EmergenciaConTransparencia</h1>
      <div className="wrapper">
        <h2 className="text-center">Ranking</h2>
        <Scoreboard {...currentScore} />
      </div>
    </div>
  );
}
