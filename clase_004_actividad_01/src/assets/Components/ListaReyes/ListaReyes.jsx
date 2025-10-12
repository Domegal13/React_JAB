import React from "react";
import "./ListaReyes.css";

const ListaReyes = ({ total }) => {
    const agregarCompra = (precio) => {
        total.setTotal(total.total + precio);
    };
    const reyes = [
        {
            nombre: "Atanagildo",
            color: "darkolivegreen",
            precio: 178,
            imagen: "https://www.html6.es/img/rey_atanagildo.png",
        },
        {
            nombre: "Ervigio",
            color: "crimson",
            precio: 169,
            imagen: "https://www.html6.es/img/rey_ervigio.png",
        },
        {
            nombre: "Ataúlfo",
            color: "peru",
            precio: 81,
            imagen: "https://www.html6.es/img/rey_ataulfo.png",
        },
        {
            nombre: "Leogivildo",
            color: "darkmagenta",
            precio: 126,
            imagen: "https://www.html6.es/img/rey_leogivildo.png",
        },
        {
            nombre: "Recesvinto",
            color: "royalblue",
            precio: 141,
            imagen: "https://www.html6.es/img/rey_recesvinto.png",
        },
        {
            nombre: "Sisebuto",
            color: "teal",
            precio: 69,
            imagen: "https://www.html6.es/img/rey_sisebuto.png",
        },
    ];
    return (
        <>
            <section className="cards">
                {reyes.map((rey, index) => (
                    <div className="card" key={index} style={{ backgroundColor: rey.color }}>
                        <h2>{rey.nombre}</h2>
                        <img src={rey.imagen} alt={rey.nombre} />
                        <p>Precio: {rey.precio} €</p>
                        <button className="comprar" onClick={() => agregarCompra(rey.precio)}>
                            Comprar
                        </button>
                    </div>
                ))}
            </section>
        </>
    );
};

export default ListaReyes;
