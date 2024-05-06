import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen mx-auto">
      <div className="md:max-w-xl bg-secondary md:p-10 flex items-center justify-center w-full p-5 rounded shadow-md">
        <form className="md:px-5 flex flex-col items-center w-full gap-3">
          <h1 className="md:text-4xl py-4 text-2xl font-semibold text-center">
            FBF - REGISTER
          </h1>

          <input
            type="text"
            className="bg-primary border-light focus:border-2 w-full px-3 py-3 mb-4 text-white border rounded outline-none"
            placeholder="Username"
            name="username"
            required
          />

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

          <div className="flex justify-center w-full py-3">
            <button className="bg-primary text-light hover:scale-105 w-full py-3 uppercase transition rounded">
              Register
            </button>
          </div>

          <div className="text-sm">
            Already have an account?
            <Link to={"/login"} className="text-white">
              {" "}
              <span className="hover:scale-105 text-white underline transition">
                Login
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
