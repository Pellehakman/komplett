import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar() {
  return (
    <div className="flex grow relative">
      <input
        className="flex grow p-4 rounded-xl"
        placeholder="Sök bland 12254 produkter"
        type="text"
      />
      <FontAwesomeIcon icon={faSearch} className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" />
    </div>
  );
}

export default SearchBar;
