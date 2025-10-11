import Atanagildo from "./assets/images/rey_atanagildo.png";
import Sisebuto from "./assets/images/rey_sisebuto.png";
import "./App.css";
import { useRef } from "react";

function App() {
    const cambio = 23.16;
    const refCaja = useRef();

    const incrementar = (e) => {
        console.log(e);
        e.target.textContent = parseInt(e.target.textContent) + 1;
        if (e.target.textContent > 9) {
            e.target.textContent = 1;
            e.target.style.backgroundColor = "#fff";
        }
        if (e.target.textContent >= 7) {
            e.target.style.backgroundColor = "red";
        }
        // e.target.textContent = Number(e.target.textContent) + 1;
        // e.target.style.backgroundColor = "red";
    };

    const convertir = (e) => {
        refCaja.current.textContent = parseInt(refCaja.current.textContent) * cambio;
    };

    const cambioImagen = (e) => {
        if (e.target.src.includes("atanagildo")) {
            e.target.src = Sisebuto;
        } else {
            e.target.src = Atanagildo;
        }
    };

    const lectura = (e) => {
        refCaja.current.textContent = e.target.value;
    };

    return (
        <>
            <div ref={refCaja} className="caja" onClick={incrementar}>
                1
            </div>
            <button onClick={convertir}>Aceptar</button>
            <div>
                <img onClick={cambioImagen} src={Atanagildo} alt="Rey-Atanagildo" />
            </div>
            <input onChange={lectura} className="campo" type="text" />
        </>
    );
}

export default App;
