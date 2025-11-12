import "./App.css";
import Provider from "./Components/Contexto/Provider";
import Idiomas from "./Components/Idiomas/Idiomas";
import Pagina from "./Components/Pagina/Pagina";

function App() {
    return (
        <Provider>
            <div className="banderas">
                <Idiomas />
            </div>
            <div className="contenido">
                <Pagina />
            </div>
        </Provider>
    );
}

export default App;
