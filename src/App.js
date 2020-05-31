import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Descargables from "./Descargables";
import Home from "./Home";
import { Router } from "@reach/router";

function App() {

  return (
    <div id="app">
      <Header></Header>
      <Router>
        <Home path="/" />
        <Descargables path="/propuesta_tabla_gasto" />
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
