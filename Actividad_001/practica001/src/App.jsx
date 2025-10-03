import { useState } from "react";
import "./App.css";
import "./miCss.css";
import imgSisebuto from "./assets/reyes/rey_sisebuto.png";
import imgLeogivildo from "./assets/reyes/rey_leogivildo.png";
import imgAtanagildo from "./assets/reyes/rey_atanagildo.png";

function App() {
    const [count, setCount] = useState(0);
    const images = [
        {
            nombre: "Sisebuto",
            img: imgSisebuto,
        },
        {
            nombre: "Leogivildo",
            img: imgLeogivildo,
        },
        {
            nombre: "Atanagildo",
            img: imgAtanagildo,
        },
    ];
    return (
        <>
            <div className="contenedor">
                {images.map((image, index) => (
                    <div className="card" key={index}>
                        <img src={image.img} alt={image.nombre} width="200" />
                        <h2>{image.nombre}</h2>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
