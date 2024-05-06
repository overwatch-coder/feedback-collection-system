import React from "react";
import { useAuth } from "../providers/AuthProvider";

const Account = () => {
  const { currentUser: user } = useAuth();
  return (
    <div className="md:py-10 md:px-20 flex flex-col flex-grow w-full gap-6 px-5 py-5">
      <h2 className="md:text-4xl text-3xl font-bold">Manage Account</h2>

      <div className="md:flex-row md:justify-around bg-secondary md:p-10 flex flex-col w-full gap-5 p-5 mx-auto">
        <div className="flex flex-col items-center gap-5">
          <img
            src={user?.avatar || "https://source.unsplash.com/random"}
            alt="user picture"
            className="object-cover w-32 h-32 rounded-full"
            loading="lazy"
          />

          <button className="bg-primary text-light hover:scale-105 w-full px-5 py-2 font-medium text-center transition rounded">
            Change
          </button>
        </div>

        {/* separators (mobile and desktop) */}
        <div className="bg-light w-0.5 min-h-full hidden md:block" />
        <div className="bg-light h-0.5 min-w-full my-5 md:hidden" />

        <div className="flex flex-col gap-5">
          <p className="text-light">
            <span className="font-semibold text-white">Name:</span> {user?.name}
          </p>

          <p className="text-light">
            <span className="font-semibold text-white">Username:</span>{" "}
            {user?.username}
          </p>

          <p className="text-light">
            <span className="font-semibold text-white">Email:</span>{" "}
            {user?.email}
          </p>

          <p className="text-light">
            <span className="font-semibold text-white">Created:</span>{" "}
            {user?.createdAt}
          </p>

          <button className="bg-primary text-light hover:scale-105 w-full px-5 py-2 font-medium text-center transition rounded">
            Update Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
