import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import {
  dashboardAdminSidebarItems,
  dashboardUserSidebarItems,
} from "../constants";
import { MdClose } from "react-icons/md";

const SideNav = ({ open, onClose, isMdScreen }) => {
  const { currentUser, logout } = useAuth();
  const location = useLocation();

  return (
    <section
      className={`${
        open || isMdScreen ? "block" : "hidden"
      } flex flex-col gap-5 min-h-screen fixed top-0 left-0 w-full md:w-[200px] pt-10 pb-5 bg-secondary overflow-y-scroll z-50 transition scrollbar-hide`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="right-3 border-light hover:scale-105 top-3 md:hidden absolute p-1 transition border rounded-full"
      >
        <MdClose className="text-light" size={32} />
      </button>

      <div className="flex flex-col items-center gap-4">
        <h2 className="md:text-2xl text-light text-4xl font-bold text-center">
          FBF Dashboard
        </h2>

        <img
          src={currentUser?.avatar || "https://source.unsplash.com/random"}
          alt="user picture"
          className="md:w-16 md:h-16 object-cover w-24 h-24 mx-auto rounded-full"
          loading="lazy"
        />

        <p className="text-light md:hidden my-3 text-2xl font-medium text-center">
          {currentUser?.username || "Guest"}
        </p>
      </div>

      <nav className="flex flex-col w-full gap-5 px-2 mb-auto">
        {currentUser?.role === "admin"
          ? dashboardAdminSidebarItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  className={`text-light hover:text-white hover:bg-primary hover:scale-105 flex items-center gap-4 rounded px-2 py-3 md:py-2 transition ${
                    isActive ? "bg-primary" : ""
                  }`}
                  key={item.path}
                  to={item.path}
                >
                  <item.icon size={25} className="text-light" />
                  <span>{item.name}</span>
                </Link>
              );
            })
          : dashboardUserSidebarItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  className={`text-light hover:text-white hover:bg-primary hover:scale-105 flex items-center gap-4 rounded px-2 py-3 md:py-2 transition ${
                    isActive ? "bg-primary" : ""
                  }`}
                  key={item.path}
                  to={item.path}
                >
                  <item.icon size={25} className="text-light" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
      </nav>

      <div className="px-2">
        <button
          onClick={logout}
          className="bg-primary text-light hover:scale-105 md:py-2 w-full py-3 font-medium transition rounded"
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default SideNav;
