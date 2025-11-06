import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        try {
            const url = "https://randomuser.me/api/?results=3";
            const peticion = fetch(url);
            peticion
                .then((respuesta) => {
                    return respuesta.json();
                })
                .then((data) => {
                    data.results.map((empleado, index) => {
                        setDatos((datos) => [
                            ...datos,
                            <div key={empleado.email}>
                                <div>
                                    {empleado.name.first} {empleado.name.last}{" "}
                                </div>
                                <div>
                                    <img src={empleado.picture.large} alt={empleado.name.first} />
                                </div>
                            </div>,
                        ]);
                    });
                });
        } catch (error) {
            console.log("Ha ocurrido un error: ", error);
        }
    }, []);
    return (
        <>
            <h1>Empleados del mes:</h1>
            {datos}
        </>
    );
}

export default App;

// function App() {
//     const [datos, setDatos] = useState([]);

//     useEffect(() => {
//         try {
//             const url = "https://randomuser.me/api/?results=3";
//             const peticion = fetch(url);
//             peticion
//                 .then((respuesta) => {
//                     return respuesta.json();
//                 })
//                 .then((datos) => {
//                     setDatos(datos.results);
//                     console.log(datos);
//                 });
//         } catch (error) {
//             console.log("Ha ocurrido un error: ", error);
//         }
//     }, []);
//     return (
//         <>
//             <h1>Empleados del mes:</h1>
//             {datos.map((empleado, index) => (
//                 <div key={index}>
//                     <h2>
//                         {empleado.name.first} {empleado.name.last}
//                     </h2>
//                     <div>
//                         <img src={empleado.picture.large} alt={empleado.name.first} />
//                     </div>
//                 </div>
//             ))}
//         </>
//     );
// }

// export default App;

// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//     const [nombre, setNombre] = useState("");
//     const [foto, setFoto] = useState();
//     useEffect(() => {
//         const url = "https://randomuser.me/api/";
//         const peticion = fetch(url);
//         peticion
//             .then((respuesta) => {
//                 return respuesta.json();
//             })
//             .then((datos) => {
//                 setNombre(`${datos.results[0].name.first} ${datos.results[0].name.last}`);
//                 setFoto(datos.results[0].picture.large);
//             });
//     }, []);
//     return (
//         <>
//             <h1>Empleado/a del mes:</h1>
//             <h2>{nombre}</h2>
//             <div>
//                 <img src={foto} alt="" />
//             </div>
//         </>
//     );
// }

// export default App;
