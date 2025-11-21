import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/atanagildo">Atanagildo</NavLink> |{" "}
      <NavLink to="/ataulfo">Ataulfo</NavLink> |{" "}
      <NavLink to="/ervigio">Ervigio</NavLink> |{" "}
      <NavLink to="/leovigildo">Leovigildo</NavLink> |{" "}
      <NavLink to="/recesvinto">Recesvinto</NavLink> |{" "}
      <NavLink to="/sisebuto">Sisebuto</NavLink>
    </nav>
  );
};

export default Nav;
