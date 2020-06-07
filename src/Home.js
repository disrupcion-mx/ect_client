import React, { useState } from 'react';
import Hero from "./Hero.js";
import Intro from "./Intro.js";
import Ranking from "./Ranking.js";
import Downloads from "./Downloads.js";
import Links from "./Links";
import SliderControls from "./SliderControls.js";
import Charts from "./Charts.js";
import { rankings } from "./utils";
import RankingChart from './RankingChart.js';

export default function () {
  const [revision, setRevision] = useState(0);

  const limit = rankings.length - 1;

  const { fecha } = rankings[revision];

  const version = limit - revision;
  return (
    <>
      <div className="bg-image">
        <Hero
          revision={revision}
          setRevision={setRevision}
          fecha={fecha}
        ></Hero>
        <Ranking revision={revision} setRevision={setRevision}></Ranking>
        <SliderControls
          active={revision}
          setSlider={setRevision}
          elements={rankings.length}
          limit={limit}
        />
        <h3 className="text-center">Fecha de Revisión: {fecha}</h3>
        <a href={`/descarga/${version + 1}`} className="d-block text-center">
          <button className="button">Descargar datos de esta revision</button>
        </a>
      </div>
      <Intro></Intro>
      <h3 className="chart-title px">Ranking por Revisión</h3>
      <RankingChart />
      <Charts />
      <Downloads revision={revision} version={version}></Downloads>
      <Links revision={revision}></Links>
    </>
  );
}
