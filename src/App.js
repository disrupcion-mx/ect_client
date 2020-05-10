import React from 'react';
import Header from './Header.js';
import Hero from './Hero.js';
import Intro from './Intro.js';
import Ranking from './Ranking.js';
import Downloads from './Downloads.js';
import Footer from './Footer.js';

function App() {
  return (
    <div id="app">
      <Header></Header>
      <Hero></Hero>
      <Intro></Intro>
      <Ranking></Ranking>
      <Downloads></Downloads>
      <Footer></Footer>
    </div>
  );
}

export default App;
