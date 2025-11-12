import React, { useContext, useState } from "react";
import Contexto from "../Contexto/Contexto";
import Provider from "../Contexto/Provider";

const Idiomas = () => {
    const { alumno } = useContext(Contexto);
    const { setAlumno } = useContext(Contexto);

    const sustitucion = (posicion) => {
        setAlumno(
            alumno.map((dato, indice) =>
                indice == 3 ? { ...dato, idioma: posicion } : { ...dato }
            )
        );
    };
    const cambio1 = () => {
        sustitucion(0);
    };
    const cambio2 = () => {
        sustitucion(1);
    };
    const cambio3 = () => {
        sustitucion(2);
    };
    return (
        <div className="idiomas">
            <div className="bandera" aria-label="Español" onClick={cambio1}>
                <img src="images/spain.jpg" alt="" />
            </div>
            <div className="bandera" aria-label="Español" onClick={cambio2}>
                <img src="images/uk.png" alt="" />
            </div>
            <div className="bandera" aria-label="Español" onClick={cambio3}>
                <img src="images/francia.png" alt="" />
            </div>
        </div>
    );
};

export default Idiomas;
