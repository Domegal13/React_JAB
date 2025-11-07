import React, { useContext } from "react";
import { Contexto } from "./Contexto/Contexto";

const Pagina1 = () => {
    const { color } = useContext(Contexto);
    return (
        <div className="hijo" style={{ background: color }}>
            Pagina1
        </div>
    );
};

export default Pagina1;
