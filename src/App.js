import React, { useState } from "react";
import Header from "./Header.js";
import Hero from "./Hero.js";
import Intro from "./Intro.js";
import Ranking from "./Ranking.js";
import Downloads from "./Downloads.js";
import Footer from "./Footer.js";
import SliderControls from "./SliderControls.js";
import { rankings } from "./utils/index.js";

function App() {
  const [revision, setRevision] = useState(0);

  const limit = rankings.length - 1;

  const { fecha } = rankings[revision];

  return (
    <div id="app">
      <Header></Header>
      <div className="bg-image">
        <Hero revision={revision} setRevision={setRevision}></Hero>
        <Ranking revision={revision} setRevision={setRevision}></Ranking>
        <SliderControls
          active={revision}
          setSlider={setRevision}
          elements={rankings.length}
          limit={limit}
        />
        <h3 className="text-center">Fecha de Revisión: {fecha}</h3>
        <a href={`/descarga/${revision + 1}`} className="d-block text-center">
          <button className="button">Descargar datos de esta revision</button>
        </a>
      </div>
      <Intro></Intro>
      <Downloads revision={revision}></Downloads>
      <Footer></Footer>
    </div>
  );
}

export default App;
