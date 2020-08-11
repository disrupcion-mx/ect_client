import React, { useState } from "react";
import { rankings, conceptos, expenses, score } from "./utils";
import { rankingsMes, conceptosMes, gastosMes, scoreMes } from "./utils/mensual";
import Revision from "./Revision.js";
import Tabs from "./Tabs.js";

export default function () {
  const [revision, setRevision] = useState(0);
  const [tipo, setTipo] = useState(2);

  const limit = rankings.length - 1;

  const { fecha } = rankings[revision];

  const version = limit - revision;

  const municipiosMes = rankingsMes[0].municipios;

  const municipiosSemana = rankings[version].municipios;

  return (
    <>
      <Tabs tipo={tipo} setTipo={setTipo} />
      {tipo === 1 && (
        <Revision
          version={version}
          fecha={fecha}
          revision={revision}
          rankings={rankings}
          conceptos={conceptos}
          gastos={expenses}
          score={score}
          tipo={tipo}
          municipios={municipiosSemana}
          setRevision={setRevision}
        />
      )}
      {tipo !==1 && (
        <Revision
          version={version}
          fecha={gastosMes[0].fecha}
          revision={revision}
          rankings={rankingsMes}
          conceptos={conceptosMes}
          score={scoreMes}
          gastos={gastosMes}
          municipios={municipiosMes}
          setRevision={setRevision}
        />
      )}
    </>
  );
}
