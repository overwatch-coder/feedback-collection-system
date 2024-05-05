import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

class Login extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="flex w-full h-screen">
          <div className="flex items-center justify-center w-full">
            <form className="">
              <h1 className="font-medium text-center">LOGIN</h1>
              <br />
              <input
                type="email"
                className="border-1 w-full border-black"
                placeholder="Email address"
                name="email"
                required
              />
              <br />
              <br />
              <input
                type="password"
                className="border-1 w-full border-black"
                placeholder="Password"
                name="password"
                required
              />
              <br />
              <br />
              <div className="flex justify-center">
                <button className="hover:bg-blue-700 px-4 py-2 font-bold text-white bg-blue-500 rounded">
                  Login
                </button>
              </div>
              <br />
              <div className="flex justify-center">
                <a href="#" className="hover:text-blue-700 text-blue-500">
                  Forget Password?
                </a>
              </div>
              <br />
              <div className="">
                Don&apos;t have an account?
                <Link
                  to={"/register"}
                  className="hover:text-blue-700 text-blue-500"
                >
                  {" "}
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
