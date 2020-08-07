import React, { useState } from "react";
import { rankings, conceptos, expenses, score } from "./utils";
import { rankingsMes, conceptosMes, gastosMes, scoreMes } from "./utils/mensual";
import Revision from "./Revision.js";
import Tabs from "./Tabs.js";

export default function () {
  const [revision, setRevision] = useState(0);
  const [tipo, setTipo] = useState(1);

  const limit = rankings.length - 1;

  const { fecha } = rankings[revision];

  const version = limit - revision;
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
          setRevision={setRevision}
        />
      )}
      {tipo === 2 && (
        <Revision
          version={version}
          fecha={fecha}
          revision={revision}
          rankings={rankingsMes}
          conceptos={conceptosMes}
          score={scoreMes}
          gastos={gastosMes}
          setRevision={setRevision}
        />
      )}
    </>
  );
}
