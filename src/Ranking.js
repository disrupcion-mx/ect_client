import React from "react";
import { rankings, conceptos } from "./utils";
import RankingTable from "./RankingTable";

export default function ({ revision }) {
  const ranking = rankings[revision];
  const { municipios, fecha } = ranking;
  return (
    <div className="ranking">
      <h2 className="text-center">Criterios de Evaluación</h2>
      <div className="wrapper">
        <RankingTable municipios={municipios} conceptos={conceptos} />
        <h3 className="text-center">Fecha de Revisión: {fecha}</h3>
        
      </div>
    </div>
  );
}
