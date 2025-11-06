import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pagina1 from "./Components/Pagina1";
import Colores from "./Components/Colores";
import { DatosProvider } from "./Components/Contexto/Contexto";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <DatosProvider>
                <div className="App">
                    <Pagina1 />
                    <Pagina1 />
                    <Pagina1 />
                </div>
                <Colores />
            </DatosProvider>
        </>
    );
}

export default App;
