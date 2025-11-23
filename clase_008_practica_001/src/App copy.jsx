import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Atanagildo from "./reyes/Modelo";
import Ataulfo from "./reyes/cards/Ataulfo";
import Ervigio from "./reyes/cards/Ervigio";
import Leovigildo from "./reyes/cards/Leovigildo";
import Recesvinto from "./reyes/cards/Recesvinto";
import Sisebuto from "./reyes/cards/Sisebuto";
import Nav from "./Nav";
import Error404 from "./reyes/Error404";
import Home from "./reyes/Home";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atanagildo" element={<Atanagildo />} />
        <Route path="/ataulfo" element={<Ataulfo />} />
        <Route path="/ervigio" element={<Ervigio />} />
        <Route path="/leovigildo" element={<Leovigildo />} />
        <Route path="/leogivildo" element={<Navigate to={"/leovigildo"} />} />
        <Route path="/recesvinto" element={<Recesvinto />} />
        <Route path="/sisebuto" element={<Sisebuto />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
