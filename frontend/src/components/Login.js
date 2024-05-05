import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

class Login extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div className="flex w-full h-screen">
          <div className="w-full flex items-center justify-center">
            <form className="">
              <h1 className="font-medium text-center">LOGIN</h1>
              <br />
              <input
                type="email"
                className="w-full border-1 border-black"
                placeholder="Email address"
                name="email"
                required
              />
              <br />
              <br />
              <input
                type="password"
                className="w-full border-1 border-black"
                placeholder="Password"
                name="password"
                required
              />
              <br />
              <br />
              <div class="flex justify-center">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Login
                </button>
              </div>
              <br />
              <div className="flex justify-center">
                <a href="#" className="text-blue-500 hover:text-blue-700 ">
                  Forget Password?
                </a>
              </div>
              <br />
              <div className="">
                Don' have an account?
                <Link
                  to={"/register"}
                  className="text-blue-500 hover:text-blue-700 "
                >
                  <space> </space>Register
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
