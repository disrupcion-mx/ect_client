import React from "react";
import { score } from "./utils";

export default function() {
    return (
        <table>
            <thead>
                <th>Entidad</th>
                <th>Calificación</th>
            </thead>
            {score.map(municipio => (
                <tr key={municipio.nombre}>
                    <td>{municipio.nombre}</td>
                    <td>{municipio.calificacion}</td>
                </tr>
            ))}
        </table>
    )
}