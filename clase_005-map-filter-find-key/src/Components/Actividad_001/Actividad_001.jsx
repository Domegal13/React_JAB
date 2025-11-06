import React from "react";
import "./Actividad_001.css";
// import reyes from "../../assets/reyes/reyes.jsx";

const Actividad_001 = ({ reyes }) => {
    // const reyes = reyData;
    return (
        <>
            <h1>Actividad 001 - Reyes Visigodos</h1>
            <section className="reyes-container">
                {reyes.map((rey, index) => (
                    <div key={index} className="caja-rey">
                        <p>
                            <span className="verde">{rey.nombre.toUpperCase()}</span> ha comido{" "}
                            <span className="rojo">{rey.vacasComidas * 365 * rey.reinado}</span>{" "}
                            vacas durante su reinado de {rey.reinado} años.
                        </p>
                        <img src={rey.imagen} alt={rey.nombre} />
                    </div>
                ))}
            </section>
        </>
    );
};

export default Actividad_001;
