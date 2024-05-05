import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <>
        <nav className="bg-gray-800 p-2">
          <div className="container mx-auto flex justify-between items-center">
            <div
              style={{ fontSize: "24px" }}
              className="text-white font-bold text-x1"
            >
              <Link to={"/"}>FBF</Link>
            </div>
            <ul className="flex space-x-6 p-2">
              <li>
                <Link
                  to={"/forms"}
                  className="text-white hover:text-gray-300 justify-center"
                >
                  Forms
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="text-white hover:text-gray-300 justify-center"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to={"/login"}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
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
