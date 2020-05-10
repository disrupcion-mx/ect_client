import React from "react";
import './css/header.css';

export default function () {
  return (
    <header className="header">
      <div className="logo">
        <img alt="Logo de Emergencia con Transparencia" height="auto" src="img/ect_logo.png" width="350px"></img>
      </div>
      <nav className="social">
        <a href="https://www.facebook.com/RedesQuintoPoder/"><i className="fa fa-facebook"></i></a>
        <a href="https://twitter.com/rqpidea"><i className="fa fa-twitter"></i></a>
        <a href="https://www.youtube.com/user/RedesQuintoPoder"><i className="fa fa-youtube"></i></a>
        <a href="https://www.instagram.com/redesquintopoder/"><i className="fa fa-instagram"></i></a>
        <a href="https://redesquintopoder.org.mx/"><i className="fa fa-wesbite"></i></a>
      </nav>
    </header>
  );
}
