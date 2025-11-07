import { useState } from "react";
import "./App.css";
import Pagina1 from "./Components/Pagina1";
import Colores from "./Components/Colores";
import { DatosProvider } from "./Components/Contexto/Contexto";
import Pagina2 from "./Components/Pagina2";
import Pagina3 from "./Components/Pagina3";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <DatosProvider>
                <div className="App">
                    <Pagina1 />
                    <Pagina2 />
                    <Pagina3 />
                </div>
                <Colores />
            </DatosProvider>
        </>
    );
}

export default App;
