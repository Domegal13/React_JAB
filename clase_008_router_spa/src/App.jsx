import "./App.css";
import A from "./Paginas/A";
import B from "./Paginas/B";
import C from "./Paginas/C";
import Error404 from "./Paginas/Error404";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Nav";
import D from "./Paginas/D";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<A />} />
        <Route path="/pagina1" element={<Navigate to={"/"}></Navigate>} />
        <Route path="/pagina2" element={<B />} />
        <Route path="/pagina3" element={<C />} />
        <Route path="/pagina4/:letra" element={<D />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
