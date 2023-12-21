// import { NavLink } from "react-router-dom";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfileButton() {
  return (
    <a className="gap-4 flex items-center p-4">
      <FontAwesomeIcon icon={faUser} />
      <span className="font-bold">Profil</span>
    </a>
  );
}

export default ProfileButton;
