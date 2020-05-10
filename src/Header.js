import React from "react";
import './css/header.css';

export default function () {
  return (
    <header className="header">
      <div className="logo">
        <img alt="Logo de Emergencia con Transparencia" height="auto" src="img/ect_logo.png" width="350px"></img>
      </div>
      <nav className="social">
        <a href="https://www.facebook.com/">Facebook</a>
        <a href="https://www.twitter.com/">Twitter</a>
        <a href="https://www.youtube.com/">Youtube</a>
        <a href="https://www.instagram.com/">Instagram</a>
        <a href="https://www.linkedin.com/">LinkedIn</a>
      </nav>
    </header>
  );
}
