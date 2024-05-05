import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

class Register extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div className="flex w-full h-screen">
          <div className="w-full flex items-center justify-center">
            <form>
              <h1 className="font-medium text-center">REGISTER</h1>
              <br />
              <input
                type="text"
                className="w-full border-1 border-black"
                placeholder="Username"
                name="username"
                required
              />
              <br />
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
                  Register
                </button>
              </div>
              <br />
              <div>
                Already have an account?
                <Link
                  to={"/login"}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <space> </space>Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
