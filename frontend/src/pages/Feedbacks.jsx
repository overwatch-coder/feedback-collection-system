import React from "react";

const Feedbacks = () => {
  return (
    <div className="flex flex-col gap-5 p-6 rounded-md shadow-md">
      <h2 className="text-2lg mb-4 font-semibold">Manage Feedbacks</h2>

      {/* Total Feedbacks */}
      <div className="md:grid-cols-2 grid grid-cols-1 gap-10">
        <div className="bg-secondary p-5 mb-6 shadow-md">
          <h3 className="mb-2 text-sm font-semibold">Total Feedbacks</h3>
          <p className="text-gray-700">1000</p>
        </div>

        {/* Average Rating */}
        <div className="bg-secondary p-5 mb-6 shadow-md">
          <h3 className="mb-2 text-sm font-semibold">Average Rating</h3>
          <p className="text-gray-700">4.5</p>
        </div>

        {/* Most Common Issue */}
        <div className="bg-secondary p-5 mb-6 shadow-md">
          <h3 className="mb-2 text-sm font-semibold">Most Common Issue</h3>
          <p className="text-gray-700">Bug Reports</p>
        </div>

        {/* Bot Detected Feedbacks */}
        <div className="bg-secondary p-5 mb-6 shadow-md">
          <h3 className="mb-2 text-sm font-semibold">Bot Detected Feedbacks</h3>
          <p className="text-gray-700">50</p>
        </div>
      </div>

      {/* Export or Download Analytics Report Options */}
      <div className="flex justify-between">
        <button className="hover:bg-blue-600 focus:outline-none focus:bg-blue-600 px-4 py-2 text-white bg-blue-500 rounded-md">
          Export Report
        </button>
        <button className="hover:bg-blue-600 focus:outline-none focus:bg-blue-600 px-4 py-2 text-white bg-blue-500 rounded-md">
          Download Report
        </button>
      </div>
    </div>
  );
};

export default Feedbacks;
