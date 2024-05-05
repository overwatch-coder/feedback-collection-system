import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<div>Forms</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
