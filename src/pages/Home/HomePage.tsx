import { NavLink } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import Bar from "../../components/common/Info/Bar";

function HomePage() {
  return (
    <>
      <Bar />
      <h1>HomePage</h1>
      <Header />
      <NavLink to={"/products"}>product</NavLink>
    </>
  );
}

export default HomePage;
