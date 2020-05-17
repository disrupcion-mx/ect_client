import React from "react";
import "./css/hero.css";
import Scoreboard from "./Scoreboard";
import SliderControls from "./SliderControls";
import { score } from "./utils";

export default function ({ revision, setRevision }) {
  function isActive(index) {
    return revision === index;
  }

  const currentScore = score[revision];

  const limit = score.length - 1;

  return (
    <div className="hero">
      <h1>#EmergenciaConTransparencia</h1>
      <div className="wrapper">
        <h2 className="text-center">Ranking</h2>
        <Scoreboard {...currentScore} />
        <SliderControls
          isActive={isActive}
          setSlider={setRevision}
          elements={score.length}
          limit={limit}
        />
      </div>
    </div>
  );
}
