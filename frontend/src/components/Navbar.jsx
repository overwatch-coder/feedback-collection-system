import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <>
        <nav className="bg-primary border-b-light fixed top-0 w-full px-10 py-2 border-b-2">
          <div className="container flex items-center justify-between mx-auto">
            <div
              style={{ fontSize: "24px" }}
              className="text-3x1 text-light font-bold"
            >
              <Link to={"/"}>FBF</Link>
            </div>
            <ul className="flex p-2 space-x-6">
              <li>
                <Link
                  to={"/forms"}
                  className="hover:text-gray-300 justify-center text-white"
                >
                  Forms
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="hover:text-gray-300 justify-center text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to={"/login"}>
                  <button className="hover:bg-blue-700 px-2 py-1 font-bold text-white bg-blue-500 rounded">
                    Account
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
