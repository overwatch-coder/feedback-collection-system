import React from "react";
import { useAuth } from "../providers/AuthProvider";

const CreateNewFeedback = () => {
  const { currentUser: user } = useAuth();
  return (
    <div className="md:py-10 md:px-20 flex flex-col flex-grow w-full gap-6 px-5 py-5">
      <h2 className="md:text-4xl text-3xl font-bold">Create A New Feedback</h2>

      <div className="md:flex-row md:justify-around bg-secondary md:p-10 flex flex-col w-full gap-5 p-5 mx-auto">
        <div className="flex flex-col gap-5">
          <img
            src={user?.avatar || "https://source.unsplash.com/random"}
            alt="user picture"
            className="object-cover w-32 h-32 rounded-full"
            loading="lazy"
          />

          <button className="bg-primary text-light hover:scale-105 w-full py-3 font-medium transition rounded">
            Update Details
          </button>
        </div>

        {/* separator */}
        <div className="w-0.5 h-full bg-light" />

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

          <button className="bg-primary text-light hover:scale-105 w-full py-3 font-medium transition rounded">
            Update Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewFeedback;
