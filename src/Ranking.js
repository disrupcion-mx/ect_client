import React from "react";
import RankingTable from "./RankingTable";

export default function ({ conceptos, municipios }) {
  return (
    <div className="mt">
      <h2 className="text-center">Criterios de Evaluación</h2>
      <div className="wrapper table-container">
        <RankingTable municipios={municipios} conceptos={conceptos} />
      </div>
    </div>
  );
}
