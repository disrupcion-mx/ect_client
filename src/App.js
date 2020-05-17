import React, { useState } from "react";
import Header from "./Header.js";
import Hero from "./Hero.js";
import Intro from "./Intro.js";
import Ranking from "./Ranking.js";
import Downloads from "./Downloads.js";
import Footer from "./Footer.js";

function App() {
  const [revision, setRevision] = useState(0);

  return (
    <div id="app">
      <Header></Header>
      <Hero revision={revision} setRevision={setRevision}></Hero>
      <Intro></Intro>
      <Ranking revision={revision} setRevision={setRevision}></Ranking>
      <Downloads></Downloads>
      <Footer></Footer>
    </div>
  );
}

export default App;
