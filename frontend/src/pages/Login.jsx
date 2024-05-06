import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useAuth } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { setCurrentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, loading, submitData } = useFetch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/auth/login";
      const formdata = { email, password };
      const method = "POST";
      const data = await submitData(url, formdata, method, null);

      setEmail("");
      setPassword("");

      setCurrentUser({ ...data?.data, token: data?.access_token });
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data?.data, token: data?.access_token })
      );

      toast.success(data.message);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen mx-auto">
      <div className="md:max-w-xl bg-secondary md:p-10 flex items-center justify-center w-full p-5 rounded shadow-md">
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="md:px-5 flex flex-col items-center w-full gap-3"
        >
          <h1 className="md:text-4xl py-4 text-2xl font-semibold text-center">
            FBF - LOGIN
          </h1>

          {error && (
            <p className="w-full px-2 py-3 mb-5 text-red-600 bg-red-300 rounded">
              {error}
            </p>
          )}

          <input
            type="email"
            className="bg-primary border-light focus:border-2 w-full px-3 py-3 mb-4 text-white border rounded outline-none"
            placeholder="Email address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="bg-primary border-light focus:border-2 w-full px-3 py-3 text-white border rounded outline-none"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Link href="#" className="hover:underline text-light text-sm">
            Forget Password?
          </Link>

          <div className="flex justify-center w-full py-3">
            <button
              disabled={loading}
              className="bg-primary text-light hover:scale-105 w-full py-3 uppercase transition rounded"
            >
              {loading ? "Siging in..." : "Login"}
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
  );
};

export default Login;
