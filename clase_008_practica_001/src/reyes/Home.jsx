import { Link } from "react-router-dom";

const Home = () => {
  const lista = [
    "Atanagildo",
    "Ataulfo",
    "Ervigio",
    "Leovigildo",
    "Recesvinto",
    "Sisebuto",
  ];
  return (
    <div className="reyes">
      {lista.map((rey) => (
        <div className="rey" key={rey}>
          <Link to={`/reyes/${rey.toLowerCase()}`}>
            <img
              src={`https://www.html6.es/img/rey_${rey.toLowerCase()}.png`}
              alt={`Imagen Rey ${rey}`}
            />
            <h1>{rey}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
