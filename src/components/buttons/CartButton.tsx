// import { NavLink } from "react-router-dom";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartButton() {
  return (
    <a className="gap-4 flex items-center p-4">
      <FontAwesomeIcon icon={faCartShopping} />
      <span className="font-bold">Varukorg</span>
    </a>
  );
}

export default CartButton;
