import React from "react";
import { Link, useLocation } from "react-router-dom";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  return (
    <nav className="flex items-center gap-2 px-4">
      <Link to="/" className="flex items-center gap-2 text-sm ">
        {/* <FontAwesomeIcon className="w-4" icon={faHouse} /> */}
        Home
      </Link>

      {pathSegments.map((segment, index) => (
        <React.Fragment key={segment}>
          <span className="align-middle">
            <FontAwesomeIcon className="text-xs" icon={faAngleRight} />
          </span>
          <Link
            className="flex items-center text-sm "
            to={`/${pathSegments.slice(0, index + 1).join("/")}`}
          >
            {segment}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
