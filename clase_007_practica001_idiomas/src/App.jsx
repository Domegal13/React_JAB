import "./App.css";
import Idiomas from "./Components/Idiomas/Idiomas";
import Pagina from "./Components/Pagina/Pagina";

function App() {
    return (
        <>
            <div className="banderas">
                <Idiomas />
            </div>
            <div className="contenido">
                <Pagina />
            </div>
        </>
    );
}

export default App;
