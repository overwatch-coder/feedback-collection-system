import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { toast } from "react-toastify";
import { useAuth } from "../providers/AuthProvider";

const Register = () => {
  const { setCurrentUser } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, loading, submitData } = useFetch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/auth/register";
      const formdata = { username, email, password };
      const method = "POST";
      const data = await submitData(url, formdata, method, null);

      setCurrentUser({ ...data?.data, token: data?.access_token });

      localStorage.setItem(
        "user",
        JSON.stringify({ ...data?.data, token: data?.access_token })
      );

      setUsername("");
      setEmail("");
      setPassword("");

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
            FBF - REGISTER
          </h1>

          {error && (
            <p className="w-full px-2 py-3 mb-5 text-red-600 bg-red-300 rounded">
              {error}
            </p>
          )}

          <input
            type="text"
            className="bg-primary border-light focus:border-2 w-full px-3 py-3 mb-4 text-white border rounded outline-none"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

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

          <div className="flex justify-center w-full py-3">
            <button
              disabled={loading}
              className="bg-primary text-light hover:scale-105 w-full py-3 uppercase transition rounded"
            >
              {loading ? "Registering..." : "Register"}
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
