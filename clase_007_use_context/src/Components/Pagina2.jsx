import React, { useContext } from "react";
import { Contexto } from "./Contexto/Contexto";

const Pagina2 = () => {
    const { color } = useContext(Contexto);
    return (
        <div className="hijo" style={{ background: color }}>
            Pagina2
        </div>
    );
};

export default Pagina2;
