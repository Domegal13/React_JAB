import { useState } from "react";
import "./App.css";
import MiComponente from "./Components/MiComponente";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Reyes Godos:</h2>
            <MiComponente rey={{ nombre: "Atanagildo", reses: 12 }} /> {/* con objeto */}
            <MiComponente rey={{ nombre: "Ataúlfo", reses: 18 }} />
            {/* <MiComponente rey={["Ataúlfo", 18]} />   */} {/* con Array */}
            {/* <MiComponente rey="Ervigio" vivo={true} /> */}
            {/* <MiComponente /> */}
            {/* <MiComponente rey="Atanagildo" reses={5} vivo={true} /> */}
        </>
    );
}

export default App;
