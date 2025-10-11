import "./App.css";
import "./miCss.css";
import sisebuto from "./assets/reyes/rey_sisebuto.png";
import leogivildo from "./assets/reyes/rey_leogivildo.png";
import atanagildo from "./assets/reyes/rey_atanagildo.png";
import incognito from "./assets/reyes/rey_incognito.png";

function App() {
    const images = [
        {
            nombre: "Sisebuto",
            img: sisebuto,
        },
        {
            nombre: "Leogivildo",
            img: leogivildo,
        },
        {
            nombre: "Atanagildo",
            img: atanagildo,
        },
    ];

    const cambiarImagen = (e) => {
        console.log(e);
        if (e.target.src.includes("incognito")) {
            e.target.style.visibility = "hidden";
        } else {
            e.target.src = incognito;
            e.target.parentNode.style.backgroundColor = "#fff";
        }
    };

    const cambiarTexto = (e) => {
        if (e.target.textContent == "Visto") {
            e.target.textContent = "";
        } else {
            e.target.textContent = "Visto";
        }
    };

    return (
        <>
            <div className="contenedor">
                {images.map((image, index) => (
                    <div className="card" key={index}>
                        <img
                            onClick={cambiarImagen}
                            src={image.img}
                            alt={image.nombre}
                            width="200"
                        />
                        <h2 onClick={cambiarTexto} className="nombre">
                            {image.nombre}
                        </h2>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
