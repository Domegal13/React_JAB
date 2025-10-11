import { useState, useRef } from "react";

import "./App.css";

function App() {
    const [numero1, setNumero1] = useState("");
    const [numero2, setNumero2] = useState("");
    const [resultado, setResultado] = useState("");

    const refResultado = useRef();

    const handleNumero1 = (e) => {
        setNumero1(Number(e.target.value));
    };
    const handleNumero2 = (e) => {
        setNumero2(Number(e.target.value));
    };

    const sumar = () => {
        setResultado(numero1 + numero2);
    };
    return (
        <>
            <section>
                <input type="number" onChange={handleNumero1} value={numero1} /> +
                <input type="number" onChange={handleNumero2} value={numero2} /> =
                <input type="number" readOnly value={resultado} />
                <button onClick={sumar}>Sumar</button>
            </section>
        </>
    );
}

export default App;
