// import { NavLink } from "react-router-dom";

import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <header>
        <h1>Navigation</h1>
        <NavLink to="/" >home</NavLink>
        <NavLink to="/products">products</NavLink>
      </header>
    </>
  );
}

export default Navigation;
