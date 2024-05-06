import React from "react";
import { VscPreview } from "react-icons/vsc";
import { Link } from "react-router-dom";

const FormCard = ({ name, id }) => {
  return (
    <Link to={`dashboard/forms/${id}`} className="hover:scale-105 transition">
      <div className="flex flex-col gap-3">
        <div className="border-light bg-secondary md:h-52 flex flex-col items-center justify-center h-64 p-5 border">
          <VscPreview className="text-light w-16 h-full" />
        </div>

        <p className="text-light font-medium">{name}</p>
      </div>
    </Link>
  );
};

export default FormCard;
