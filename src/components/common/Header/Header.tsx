import Navigation from "../Navigation/Navigation";
import logo from "../../../assets/logo.svg";
import SearchBar from "../SearchBar/SearchBar";

import CartButton from "../../buttons/CartButton";
import ProfileButton from "../../buttons/ProfileButton";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

function Header() {
  return (
    <header className="w-full flex-col flex gap-4 my-4">
      <div className="flex items-center justify-between gap-4">
        <a href="#">
          <img className="" src={logo} />
        </a>
        <SearchBar />
        <div className="gap-4 flex">
          <ProfileButton />
          <CartButton />
        </div>
      </div>

      <Navigation />
      <Breadcrumbs />
    </header>
  );
}

export default Header;
