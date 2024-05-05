import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-primary flex flex-col min-h-screen">
      <Navbar />
      <main className="text-light mt-16 mb-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
