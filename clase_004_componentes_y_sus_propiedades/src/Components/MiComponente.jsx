import React from "react";

const MiComponente = ({ rey }) => {
    // const { rey, reses } = props;
    return (
        <div>
            <h1>
                Hola {rey.nombre} come {rey.reses} vacas al día.
            </h1>
        </div>
    );
};

export default MiComponente;
