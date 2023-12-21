import React, { useState, useRef, useEffect } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef<number>(0);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const openDropdown = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 1000);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, []);

  return (
    <nav className=" bg-white">
      <div className="relative">
        <div
          ref={dropdownRef}
          className={`group flex items-center gap-2 font-extrabold relative ${
            isDropdownOpen ? "active" : ""
          }`}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <span className="p-4">Produkter</span>
          <FontAwesomeIcon className="w-4" icon={faChevronDown} />
          <div
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } absolute mt-4 top-full w-full left-0 bg-white p-4 rounded-md shadow-md`}
          >
            <span>
              <h1 className="py-4">Grafikkort</h1>
              <h1 className="py-4">Grafikkort</h1>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
