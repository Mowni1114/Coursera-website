import React from "react";
import ExploreCategories from "../components/ExploreCategories";
import { riskManagementData } from "../data/careerskill";

const CareerSkills = () => {
  // -------------------------------
  // SHOW MORE BUTTON LOGIC
  // -------------------------------
  const [visibleCount, setVisibleCount] = React.useState(8);

  const showMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className="mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-8">
      <ExploreCategories />

      {/* Title Responsive */}
      <div className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 leading-snug">
        Risk Management in Financial Engineering: Key Strategies
      </div>

      {/* Responsive Grid */}
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-4 sm:gap-6
      "
      >
        {riskManagementData.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-sm border rounded-2xl overflow-hidden hover:shadow-md transition"
          >
            {/* MOBILE LAYOUT: Content Left + Image Right */}
            <div className="flex sm:hidden p-3 gap-3 items-center">
              {/* Left Side Text */}
              <div className="flex-1">
                {/* Free Trial */}
                <div className="bg-white inline-block px-2 py-1 rounded-full text-[10px] font-semibold shadow mb-2">
                  Free Trial
                </div>

                {/* Logo + University */}
                <div className="flex items-center gap-2 mb-1">
                  <img src={item.logo} className="w-5 h-5 rounded" />
                  <span className="text-gray-700 font-medium text-xs">
                    {item.university}
                  </span>
                </div>

                {/* Title */}
                <div className="text-[13px] font-semibold leading-snug mb-1">
                  {item.title}
                </div>

                {/* Type */}
                <p className="text-gray-500 text-[11px]">{item.type}</p>
              </div>

              {/* Right Side Image */}
              <img src={item.image} className="w-20 h-20 object-cover rounded-xl" />
            </div>

            {/* DESKTOP/TABLET LAYOUT */}
            <div className="hidden sm:block">
              {/* Image Top */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />

                {/* Badge */}
                <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                  Free Trial
                </div>
              </div>

              {/* Content Bottom */}
              <div className="p-4">
                {/* Logo + University */}
                <div className="flex items-center gap-2 mb-3">
                  <img src={item.logo} className="w-6 h-6 rounded" />
                  <span className="text-gray-700 font-medium text-sm">
                    {item.university}
                  </span>
                </div>

                {/* Title */}
                <div className="text-[16px] font-semibold leading-snug mb-2">
                  {item.title}
                </div>

                {/* Type */}
                <p className="text-gray-500 text-sm">{item.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SHOW MORE BUTTON (LEFT SIDE) */}
      {visibleCount < riskManagementData.length && (
        <div className="flex justify-start mt-6">
          <button
            onClick={showMore}
            className="px-5 py-2 border rounded-lg text-blue-700 font-medium hover:bg-blue-50 transition"
          >
            Show 8 More
          </button>
        </div>
      )}
    </div>
  );
};

export default CareerSkills;
