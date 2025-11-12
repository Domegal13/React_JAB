import React, { useContext } from "react";

import Ubicacion from "../Ubicacion/Ubicacion";
import Profesora from "../Profesora/Profesora";
import Contexto from "../Contexto/Contexto";

const Pagina = () => {
    const { alumno } = useContext(Contexto);
    console.log(alumno);
    const idioma = alumno[3].idioma;
    return (
        <>
            <h1>{alumno[idioma].titulo}</h1>
            <h2>{alumno[idioma].texto}</h2>
            <div className="botones">
                <button>{alumno[idioma].boton1}</button>
                <button>{alumno[idioma].boton2}</button>
            </div>
            <Profesora />
            <Ubicacion />
        </>
    );
};

export default Pagina;
