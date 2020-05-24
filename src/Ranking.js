import React from "react";
import { rankings, conceptos } from "./utils";
import RankingTable from "./RankingTable";

export default function ({ revision }) {
  const ranking = rankings[revision];
  const { municipios } = ranking;

  return (
    <div className="mt">
      <h2 className="text-center">Criterios de Evaluación</h2>
      <div className="wrapper table-container">
        <RankingTable municipios={municipios} conceptos={conceptos} />
      </div>
    </div>
  );
}
