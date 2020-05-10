import React from "react";
import "./css/intro.css";

export default function () {
  return (
    <div className="intro">
      <h2 className="intro-title">Criterios que tomamos en cuenta para evaluar el ranking</h2>
      <div className="criterios">
        <div className="criterio">
          <img alt="Micrositio" src="img/laptop.png" height="auto" width="90px" />
          <h3>Micrositio</h3>
          <p>
            Se dispone de un sitio web visible en la página de inicio del ente público sobre infromación del COVID-19.
          </p>
        </div>
        <div className="criterio">
          <img alt="Adquisición de Insumos" src="img/hammer.png" height="auto" width="90px" />
          <h3>Adquisición de Insumos</h3>
          <p>
            Expresión documental de contratos, facturas, ordenes de adquisición, autorizaciones o cualquier otro
            documento que compruebe la compra y justificación del bien o servicio.
          </p>
        </div>
        <div className="criterio">
          <img alt="Apoyos Entregados" src="img/ambulance.png" height="auto" width="90px" />
          <h3>Apoyos Entregados</h3>
          <p>
            Expresión documental que compruebe la entrega directa a personas físicas o morales, el monto de la entrega o
            el bien entregado.
          </p>
        </div>
        <div className="criterio">
          <img alt="Apoyos Utilizados" src="img/bag.png" height="auto" width="90px" />
          <h3>Apoyos Utilizados</h3>
          <p>
            Expresión documental que compruebe la utilización de cualquier bien o servicio adquirido para atención de la
            pandemia.
          </p>
        </div>
        <div className="criterio">
          <img alt="Donativos Particulares" src="img/hands.png" height="auto" width="90px" />
          <h3>Donativos Particulares</h3>
          <p>
            Expresión documental del registro de donativos que han realizado particulares al ente público, sea en dinero
            o en especie, así como expresión documental del uso o disposición final de los mismos.
          </p>
        </div>
        <div className="criterio">
          <img alt="Actualización de la Información" src="img/info.png" height="auto" width="90px" />
          <h3>Actualización de la Información</h3>
          <p>Fecha de la última actualización del micrositio y Fecha de la próxima actualización</p>
        </div>
      </div>
    </div>
  );
}
