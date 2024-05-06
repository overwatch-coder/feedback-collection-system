import React from "react";
import { useAuth } from "../providers/AuthProvider";
import { FormCard } from "../components";
import { Link } from "react-router-dom";

const Submissions = () => {
  const { currentUser: user } = useAuth();
  return (
    <div className="md:py-10 md:px-20 flex flex-col flex-grow w-full gap-6 px-5 pt-5 pb-20">
      <h2 className="md:text-4xl text-3xl font-bold">Submissions</h2>

      <p className="text-light font-medium">
        These are your feedback submissions
      </p>
      <p className="text-light text-sm font-normal">
        NB: You cannot edit or delete submissions
      </p>

      <div className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid flex-wrap w-full grid-cols-1 gap-10">
        {/* form card */}
        <FormCard id={"1"} name={"Assessment Feedback"} />
        <FormCard id={"2"} name={"Customer Feedback"} />
      </div>

      <Link to="/dashboard/forms">
        <button className="bg-primary hover:underline text-light hover:scale-105 w-full py-3 font-medium transition rounded">
          Submit a new feedback
        </button>
      </Link>
    </div>
  );
};

export default Submissions;
