import React, { useState } from "react";
import Contexto from "./Contexto";
import valores from "../../../../lista_idiomas";

// const valores = valores;

const Provider = ({ children }) => {
    const [alumno, setAlumno] = useState(valores);
    return <Contexto.Provider value={{ alumno, setAlumno }}> {children} </Contexto.Provider>;
};

export default Provider;
