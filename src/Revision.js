import React from "react";
import Hero from "./Hero.js";
import Intro from "./Intro.js";
import Ranking from "./Ranking.js";
import Downloads from "./Downloads.js";
import Links from "./Links";
import Charts from "./Charts.js";
import RankingChart from "./RankingChart.js";
import Comunicado from "./Comunicado";
import RankingChartMensual from "./RankingChartMensual.js";
import ChartMensual from "./ChartMensual.js";
import GastoEstadoMensual from "./GastoEstadoChart.js";

export default function ({
  revision,
  setRevision,
  fecha,
  rankings,
  version,
  conceptos,
  municipios,
  gastos,
  score,
  tipo,
}) {
  return (
    <>
      <div className="bg-image">
        <Hero
          revision={revision}
          setRevision={setRevision}
          fecha={fecha}
          gastos={gastos}
          score={score}
          conceptos={conceptos}
          tipo={tipo}
          rankings={rankings}
        />
        <Ranking
          revision={revision}
          setRevision={setRevision}
          municipios={municipios}
          conceptos={conceptos}
        />
        <h3 className="text-center">Fecha de Revisión: {fecha}</h3>
        <a href={`/descarga/${version + 1}`} className="d-block text-center">
          <button className="button">Descargar datos de esta revision</button>
        </a>
      </div>
      {tipo === 1 && (
        <div style={{ minHeight: 350, alignItems: "center", display: "flex" }}>
          <div style={{ margin: "auto" }}>
            <h3>Descarga los Comunicados de las Evaluaciones</h3>
            <a href="/comunicados" className="d-block text-center">
              <button className="button">Descargar Comunicados</button>
            </a>
          </div>
        </div>
      )}
      {tipo !== 1 && (
        <div style={{ minHeight: 350, alignItems: "center", display: "flex" }}>
          <div style={{ margin: "auto" }}>
            <h3>Descarga el comunicado de las Evaluaciones Mensuales</h3>
            <a href="/comunicadoMensual" className="d-block text-center">
              <button className="button">
                Descargar el comunicado mensual
              </button>
            </a>
          </div>
        </div>
      )}
      <Intro></Intro>
      <h3 className="chart-title px">Ranking por Revisión</h3>
      {tipo === 1 && (
        <>
          <RankingChart />
          <Charts />
          <Comunicado />
        </>
      )}
      {tipo !== 1 && (
        <>
          <RankingChartMensual />
          <h1>Gastos por Municipio</h1>
          <ChartMensual /> <h1>Gastos Estatales</h1> <GastoEstadoMensual />
        </>
      )}
      <Downloads revision={revision} version={version}></Downloads>
      <Links rankings={rankings} revision={revision}></Links>
      {tipo === 1 && (
        <>
          <div
            style={{
              height: 150,
              backgroundColor: "#fff",
              position: "absolute",
              width: "100%",
            }}
          >
            <h2 className="subtitle" style={{ marginTop: 75 }}>
              Relatoría Emergencia con Transparencia
            </h2>
          </div>
          <iframe
            id="relatoria"
            title="Relatoria"
            width="100%"
            height="800px"
            src="https://quesirvan.mx/2020/08/09/gasto-covid19-nuevoleon-apertura/"
          />
        </>
      )}
    </>
  );
}
