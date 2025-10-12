import { useState } from "react";
import "./App.css";
import ListaReyes from "./assets/Components/ListaReyes/ListaReyes";

function App() {
    const [total, setTotal] = useState(0);

    return (
        <>
            <div className="container">
                <h2 className="total-pagar">Total a Pagar: {total} € </h2>
                <ListaReyes total={{ total: total, setTotal: setTotal }} />
            </div>
        </>
    );
}

export default App;
