import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="flex flex-col items-center justify-center w-full h-screen mx-auto">
          <div className="md:max-w-xl bg-secondary md:p-10 flex items-center justify-center w-full p-5 rounded shadow-md">
            <form className="md:px-5 flex flex-col items-center w-full gap-3">
              <h1 className="md:text-4xl py-4 text-2xl font-semibold text-center">
                FBF - LOGIN
              </h1>

              <input
                type="email"
                className="bg-primary border-light focus:border-2 w-full px-3 py-3 mb-4 text-white border rounded outline-none"
                placeholder="Email address"
                name="email"
                required
              />

              <input
                type="password"
                className="bg-primary border-light focus:border-2 w-full px-3 py-3 text-white border rounded outline-none"
                placeholder="Password"
                name="password"
                required
              />

              <Link href="#" className="hover:underline text-light text-sm">
                Forget Password?
              </Link>

              <div className="flex justify-center w-full py-3">
                <button className="bg-primary text-light hover:scale-105 w-full py-3 uppercase transition rounded">
                  Login
                </button>
              </div>

              <div className="text-sm">
                Don&apos;t have an account?
                <Link to={"/register"} className="text-white">
                  {" "}
                  <span className="hover:scale-105 text-white underline transition">
                    Register
                  </span>
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
