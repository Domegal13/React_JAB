import React from "react";
import "./Actividad_002.css";

const Actividad_002 = ({ reyes }) => {
    const eliminar = (e) => {
        e.target.parentElement.remove();
    };
    return (
        <>
            <h2>Actividad 002</h2>
            <section className="container">
                {reyes
                    .filter((rey) => !rey.nombre.includes("g"))
                    .map((rey, index) => (
                        <div key={index}>
                            <p>{rey.nombre}</p>
                            <button onClick={eliminar}>Eliminar</button>
                        </div>
                    ))}
            </section>
        </>
    );
};

export default Actividad_002;
