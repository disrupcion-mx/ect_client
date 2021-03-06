import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Descargables from "./Descargables";
import Home from "./Home";
import Foto from "./Foto";
import { Router } from "@reach/router";
import Relatoria from "./Relatoria.js";

function App() {
  return (
    <div id="app">
      <Header></Header>
      <Router>
        <Home path="/" />
        <Descargables path="/propuesta_tabla_gasto" />
        <Foto path="/monterrey_junio2020" />
        <Relatoria path="/relatoria" />
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
