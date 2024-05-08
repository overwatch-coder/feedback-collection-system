import React from "react";
import { useAuth } from "../providers/AuthProvider";
import { FormCard } from "../components";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";

const CreateNewFeedback = () => {
  const { currentUser: user } = useAuth();
  return (
    <div className="md:py-10 md:px-20 flex flex-col flex-grow w-full gap-6 px-5 pt-5 pb-20">
      <h2 className="md:text-4xl text-3xl font-bold">Create New Form</h2>

      <p className="text-light font-medium">
        Select a template (not available yet) or create your own
      </p>

      <div className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid flex-wrap w-full grid-cols-1 gap-10">
        {/* form card */}
        <Link
          to={`/dashboard/create-new`}
          className="hover:scale-105 transition"
        >
          <div className="flex flex-col gap-3">
            <div className="border-light bg-secondary md:h-52 flex flex-col items-center justify-center h-64 p-5 border">
              <BsPlus className="text-light w-16 h-full" />
            </div>

            <p className="text-light font-medium">{"Create New Form"}</p>
          </div>
        </Link>

        <FormCard id={"1"} name={"Assessment Feedback"} />
        <FormCard id={"2"} name={"Customer Feedback"} />
        <FormCard id={"3"} name={"Product Feedback"} />
        <FormCard id={"4"} name={"Services Feedback"} />
        <FormCard id={"5"} name={"Food Review"} />
      </div>

      <Link to="/dashboard/submissions">
        <button className="bg-primary hover:underline text-light hover:scale-105 w-full py-3 font-medium transition rounded">
          View your submissions
        </button>
      </Link>
    </div>
  );
};

export default CreateNewFeedback;
