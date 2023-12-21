// import { NavLink } from "react-router-dom";

import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="p-4 bg-white">
      <NavLink className=" font-extrabold" to="/products">Produkter</NavLink>
    </nav>
  );
}

export default Navigation;
