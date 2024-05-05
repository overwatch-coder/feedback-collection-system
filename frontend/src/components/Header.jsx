import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-primary py-4 w-full fixed top-0 border-b-2 border-b-light">
      <div className="container mx-auto flex justify-between items-center px-10 md:px-16">
        <div className="flex items-center">
          <h1 className="text-light text-lg font-semibold">FBF</h1>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-light focus:outline-none"
          >
            <FiMenu size={24} />
          </button>
        </div>

        <nav
          className={`md:flex md:items-center ${isOpen ? "flex" : "hidden"}`}
        >
          <ul className="md:flex md:items-center gap-5">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className={`text-light px-4 py-2 rounded hover:underline transition uppercase ${
                    location.pathname === link.path ? "bg-secondaryLight" : ""
                  }`}
                >
                  {" "}
                  {link.name}{" "}
                </Link>
              </li>
            ))}

            <li>
              <Link
                to={"/auth/login"}
                className="px-4 py-2 rounded bg-secondaryLight text-light border border-light hover:scale-105 transition uppercase"
              >
                Account
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
