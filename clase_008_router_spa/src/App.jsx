import { useState } from "react";
import "./App.css";
import A from "./Paginas/A";
import B from "./Paginas/B";
import C from "./Paginas/C";
import Error404 from "./Paginas/Error404";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<A />} />
                <Route path="/pagina2" element={<B />} />
                <Route path="/pagina3" element={<C />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
