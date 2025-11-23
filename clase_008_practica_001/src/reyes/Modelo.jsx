import { useParams } from "react-router-dom";

const Modelo = () => {
  const { rey } = useParams();

  return (
    <div>
      <img
        src={`https://www.html6.es/img/rey_${rey.toLowerCase()}.png`}
        alt={`Imagen Rey ${rey}`}
      />
      <h1>{rey}</h1>
    </div>
  );
};

export default Modelo;
