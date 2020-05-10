import React from 'react';
import './css/hero.css';
import Scoreboard from './Scoreboard';

export default function() {
  return (
    <div className="hero">
      <h1>#EmergenciaConTransparencia</h1>
      <div className="wrapper">
        <h2 className="text-center">Ranking</h2>        
        <Scoreboard />                
      </div>
      <h3>Ultima revisión: 9 de Mayo de 2020</h3>
    </div>
  );
}
