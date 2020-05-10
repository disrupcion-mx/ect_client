import React from "react";
import { score } from "./utils";
import "./css/scoreboard.css";

export default function() {
    return (
        <table className="ranking-table">
            <thead className="text-left">
                <tr>
                    <th>Entidad</th>
                    <th>Calificación</th>
                </tr>
            </thead>
            <tbody>
                {score.map(municipio => (
                    <tr key={municipio.nombre}>
                        <td className="text-left">{municipio.nombre}</td>
                        <td className="text-right">{municipio.calificacion}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}