import Navigation from "../Navigation/Navigation";
import logo from "../../../assets/logo.svg";
import SearchBar from "../../SearchBar/SearchBar";

function Header() {
  return (
    <header className="w-full flex-col  flex p-4 gap-4">
      <div className="flex items-center justify-between gap-4">
        <a href="#">
          <img className="h-12" src={logo} />
        </a>
        <SearchBar />
        <div className="gap-4 flex">
          <a>Profil</a>
          <a>Varukorg</a>
        </div>
      </div>

      <Navigation />
    </header>
  );
}

export default Header;
