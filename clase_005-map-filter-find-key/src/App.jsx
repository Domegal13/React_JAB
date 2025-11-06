import "./App.css";
import Actividad_001 from "./Components/Actividad_001/Actividad_001";
import Actividad_002 from "./Components/Actividad_002/Actividad_002.jsx";
import Actividad_003 from "./Components/Actividad_003/Actividad_003.jsx";
import reyes from "./assets/reyes/reyes.jsx";

function App() {
    return (
        <>
            {/* <Actividad_001 reyes={reyes} /> */}
            {/* <Actividad_002 reyes={reyes} /> */}
            <Actividad_003 reyes={reyes} />
            {/* <Actividad_004 reyes={reyes} /> */}
        </>
    );
}

export default App;
