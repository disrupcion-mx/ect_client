import React from "react";
import './css/header.css';

export default function () {
  return (
    <header className="header">
      <div className="logo">
        <img alt="Logo de Emergencia con Transparencia" height="auto" src="img/ect_logo.png" width="350px"></img>
      </div>
      <nav className="social">
        <a href="https://www.facebook.com/RedesQuintoPoder/">Facebook</a>
        <a href="https://twitter.com/rqpidea">Twitter</a>
        <a href="https://www.youtube.com/user/RedesQuintoPoder">Youtube</a>
        <a href="https://www.instagram.com/redesquintopoder/">Instagram</a>
        <a href="https://redesquintopoder.org.mx/">Sitio</a>
      </nav>
    </header>
  );
}
