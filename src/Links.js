import React, { useState, useRef } from "react";
import "./css/micrositios.css";

export default function ({ revision, rankings }) {
  let { municipios, fecha } = rankings[revision];

  const [municipio, setMunicipio] = useState(municipios[0]);

  const select = useRef(null);

  function handleChange() {
    const { value } = select.current;
    const selected = municipios.find((municipio) => municipio.nombre === value);
    if (selected) setMunicipio(selected);
  }

  function renderEnlaces(municipio) {
    if (municipio.urls && municipio.urls !== null) {
      if (municipio.urls.length > 0)
      return municipio.urls.map((url, index) => (
        <a key={`url-${index}`} href={url} className="d-block">
          {url}
        </a>
      ));
    }
    return "No hay enlaces disponibles por ahora.";
  }

  function renderDocumentos(municipio) {
    if(municipio.documentos && municipio.documentos !== null) {
      if(municipio.documentos.length > 0)
      return municipio.documentos.map((url, index) => (
        <a key={`doc-${index}`} href={url} className="d-block">
          {url}
        </a>
      ));
    }
    return "No hay documentos disponibles.";
  }

  return (
    <div className="micrositios">
      <div className="w-50 h-100 padding">
        <h2>Consulta los Micrositios</h2>
        Municipio:
        <select onChange={handleChange} ref={select}>
          {municipios.map(({ nombre }) => (
            <option key={nombre} value={nombre}>
              {nombre}
            </option>
          ))}
        </select>
        <h3>Enlaces</h3>
        {renderEnlaces(municipio)}
        <h3>Documentos</h3>
        {renderDocumentos(municipio)}
        <p className="revision">
          <b>Fecha de Revision:</b> {fecha}
        </p>
      </div>
      <div className="w-50 h-100 padding">
        <img
          alt="Video Conferencia Redes Quinto Poder"
          src="img/conferencia.jpeg"
          className="mw-100 w-100"
        />
      </div>
    </div>
  );
}
