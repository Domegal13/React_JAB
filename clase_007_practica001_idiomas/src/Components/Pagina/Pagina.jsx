import React from "react";
import Profesora from "../Profesora/Profesora";
import Ubicacion from "../Ubicacion/Ubicacion";

const Pagina = () => {
    return (
        <>
            <h1>Titulo</h1>
            <h2>Subttitulo</h2>
            <div className="botones">
                <button>Boton 1</button>
                <button>Boton 2</button>
            </div>
            <Profesora />
            <Ubicacion />
        </>
    );
};

export default Pagina;
