import React from "react";

export default function ({
  nombre,
  score
}) {
  return (
    <tr>
      <td>{nombre}</td>
      <td>{score}</td>
    </tr>
  );
}
