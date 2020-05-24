import React from "react";

export default function () {
  return (
    <div className="text-center padding">
      <iframe
        title="Gráfica de Gasto"
        src="https://flo.uri.sh/visualisation/2535588/embed"
        frameborder="0"
        scrolling="no"
        style={{ width: "100%", height: 600 }}
      />
      <div style={{ width: "100%", marginTop: 4, textAlign: "right" }}>
        <a
          class="flourish-credit"
          href="https://public.flourish.studio/visualisation/2535588/?utm_source=embed&utm_campaign=visualisation/2535588"
          target="_top"
          style={{ textDecoration: "none" }}
        >
          <img
            alt="Made with Flourish"
            src="https://public.flourish.studio/resources/made_with_flourish.svg"
            style={{ width: 105, height: 16, border: "none", margin: 0 }}
          />
        </a>
      </div>
      <a href="/gastos"><button className="button">Descargar Datos de Gasto</button></a>
    </div>
  );
}
