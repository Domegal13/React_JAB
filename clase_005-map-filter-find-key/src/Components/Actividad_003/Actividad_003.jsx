import React from "react";
import "./Actividad_003.css";

const Actividad_003 = ({ reyes }) => {
    let buscarLetra = "l";
    const reyBuscado = reyes.find(
        (rey) =>
            rey.nombre.startsWith(buscarLetra.toUpperCase()) ||
            rey.nombre.startsWith(buscarLetra.toLowerCase())
    );
    return (
        <>
            <h2>Actividad 003</h2>
            {reyBuscado
                ? reyBuscado.nombre
                : `No se ha encontrado ningún rey con la letra ${buscarLetra.toUpperCase()}`}
        </>
    );
};

export default Actividad_003;
