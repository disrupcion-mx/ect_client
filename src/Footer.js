import React from "react";
import "./css/footer.css";

export default function () {
  return (
    <div className="footer">
      <h2>Una iniciativa por</h2>
      <div className="iniciativapor">
        <a href="https://redesquintopoder.org.mx">
          <img src="img/redes_quinto_poder.png" alt="Redes Quinto Poder IDEA" width="150px" height="auto" />
        </a>
        <a href="https://www.facebook.com/EvolMex/">
          <img src="img/evolucion_mexicana.png" alt="Evolución Mexicana" width="200px" height="auto" />
        </a>
        <a href="https://www.facebook.com/colectivonosotrosNL/">
          <img src="img/colectivo_nosotros.png" alt="Colectivo Nosotros" width="100px" height="auto" />
        </a>
        <a href="https://www.facebook.com/vertebranl/">
          <img src="img/vertebra.jpg" alt="Vértebra" width="100px" height="auto" />
        </a>
      </div>
      <p>Pueden contactar a <a href="mailto:acp@redesquintopoder.org">acp@redesquintopoder.org</a>  para sumarse.</p>
      <p>Redes Quinto Poder forma parte del Hub de Periodismo de Investigación de la Frontera Norte, un proyecto del International Center for Journalists en alianza con el Border Center for Journalists and Bloggers</p>
    </div>
  );
}
