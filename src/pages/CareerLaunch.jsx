import React from "react";

const CareerLaunch = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-4xl font-semibold mb-3">
        Explore roles
      </div>

      {/* Sub text */}
      <p className="text-gray-600 mb-6">
        Advance in your career with recognized credentials across levels.
        Choose from 60 roles.
      </p>

      {/* Category Pills ONLY */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="bg-gray-800 text-white px-3 py-2 rounded-[50px] hover:bg-blue-700">
          All
        </div>

        <div className="border border-gray-300 px-3 py-2 rounded-full hover:bg-blue-100">
          Software Engineering & IT
        </div>

        <div className="border border-gray-300 px-3  py-2 rounded-full hover:bg-blue-100">
          Business
        </div>

        <div className="border border-gray-300 px-3  py-2 rounded-full hover:bg-blue-100">
          Sales & Marketing
        </div>

        <div className="border border-gray-300 px-3  py-2 rounded-full hover:bg-blue-100">
          Data Science & Analytics
        </div>

        <div className="border border-gray-300 px-3  py-2 rounded-full hover:bg-blue-100">
          Healthcare
        </div>
      </div>
    </div>
  );
};

export default CareerLaunch;

