import React from "react";
import "./css/intro.css";

export default function () {
  return (
    <div className="intro">
      <h2 className="tagline">Transparencia el primer paso para la rendición de cuentas</h2>
      <p>
        Con el objetivo de contribuir a la rendición de cuentas las ONGs Evolución Mexicana; Colectivo Nosotros; Redes
        Quinto Poder IDEA y Vertebra Nuevo León- lanzan el reto #EmergenciaConTransparencia, con el cual se invita a las
        entidades públicas de Nuevo León de los tres Poderes de gobierno y organismos autónomos, que hayan ejercido,
        estén ejerciendo o vayan a ejercer recursos para atención del COVID19, a que trasparenten la información del
        gasto en la pandemia.
      </p>
      <h3>Se evaluará que al menos contenga lo siguiente:</h3>
      <dl>
        <dt><span role="img" aria-label="Globo">🌐</span> Micrositio</dt>
        <dd>
          Se dispone de un sitio web visible en la página de inicio del ente público sobre infromación del COVID-19.
        </dd>
        <dt><span role="img" aria-label="Clips">🖇️</span> Adquisición de insumos</dt>
        <dd>
          Expresión documental de contratos, facturas, ordenes de adquisición, autorizaciones o cualquier otro documento
          que compruebe la compra y justificación del bien o servicio.
        </dd>
        <dt><span role="img" aria-label="Manos abiertas">🤲</span> Apoyos entregados</dt>
        <dd>
          Expresión documental que compruebe la entrega directa a personas físicas o morales, el monto de la entrega o
          el bien entregado.
        </dd>
        <dt><span role="img" aria-label="Recibo">🧾</span> Apoyos utilizados</dt>
        <dd>
          Expresión documental que compruebe la utilización de cualquier bien o servicio adquirido para atención de la
          pandemia.
        </dd>
        <dt><span role="img" aria-label="Bolsa de dinero">💰</span> Donativos particulares</dt>
        <dd>
          Expresión documental del registro de donativos que han realizado particulares al ente público, sea en dinero o
          en especie, así como expresión documental del uso o disposición final de los mismos.
        </dd>
        <dt><span role="img" aria-label="Listón">🎗️</span> Datos actualizados</dt>
        <dd>Fecha de la última actualización del micrositio y Fecha de la próxima actualización</dd>
      </dl>
    </div>
  );
}
