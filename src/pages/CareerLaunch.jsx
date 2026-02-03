import React, { useState, useEffect } from "react";
import { careers, careerResources } from "../data/careerData";
import WhyCoursera from "../components/WhyCoursera";

const CareerLaunch = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCareers =
    activeCategory === "all"
      ? careers
      : careers.filter((career) => career.category === activeCategory);

  const resourceTabs = [
    { key: "General", label: "General" },
    { key: "Skills", label: "Skills" },
    { key: "Career advice", label: "Career advice" },
    { key: "Career path planning", label: "Career path planning" },
  ];

  const [activeResourceTab, setActiveResourceTab] = useState("General");

  const filteredResources =
    activeResourceTab === "General"
      ? careerResources
      : careerResources.filter((r) => r.category === activeResourceTab);

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    setVisibleCount(4);
  }, [activeResourceTab]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-3xl sm:text-4xl font-semibold mb-3">
        Explore roles
      </div>

      <p className="text-gray-600 mb-6 text-sm sm:text-base">
        Advance in your career with recognized credentials across levels.
        Choose from 60 roles.
      </p>

      {/* Category Pills */}
      <div className="flex gap-3 mb-10 overflow-x-auto whitespace-nowrap md:flex-wrap">
        {[
          { key: "all", label: "All" },
          { key: "software", label: "Software Engineering & IT" },
          { key: "business", label: "Business" },
          { key: "sales", label: "Sales & Marketing" },
          { key: "data", label: "Data Science & Analytics" },
        ].map((cat) => (
          <div
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium cursor-pointer
              ${
                activeCategory === cat.key
                  ? "bg-gray-800 text-white"
                  : "border hover:bg-blue-100"
              }`}
          >
            {cat.label}
          </div>
        ))}
      </div>

      {/* ================== CAREER CARDS (RESPONSIVE FIXED) ================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {filteredCareers.map((c, i) => (
    <div
      key={i}
      className="
        border rounded-2xl bg-white
        p-3
        transition-all duration-300
        hover:shadow-xl
        flex  items-center gap-1
        sm:block
      "
    >
      {/* ================= MOBILE VIEW ================= */}
      <div className="flex-1 sm:hidden">
        <div className="text-base font-semibold mb-1 ">
          {c.title}
        </div>

        <p className="text-sm text-gray-600 ">
          {c.desc}
        </p>
      </div>

      {/* IMAGE (RIGHT SIDE IN MOBILE) */}
      <div
        className="
          w-18 h-20
          sm:w-full sm:h-[160px]
          rounded-xl overflow-hidden bg-gray-100
          flex-shrink-0
          sm:mb-3
        "
      >
        <img
          src={c.img}
          alt={c.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}
      <div className="hidden sm:block">
        <div className="text-lg font-semibold mb-2">
          {c.title}
        </div>

        <p className="text-sm text-gray-600 mb-3">
          {c.desc}
        </p>

        {c.like && (
          <div className="text-sm mb-3">
            <div className="font-semibold">If you like:</div>
            <div className="text-gray-600">
              {c.like.join(", ")}
            </div>
          </div>
        )}

        <div className="text-sm text-gray-500 mb-2">
          <span className="font-semibold text-gray-800">
            {c.salary}
          </span>{" "}
          median salary
        </div>

        <div className="text-sm text-gray-500 mb-3">
          <span className="font-semibold text-gray-800">
            {c.jobs}
          </span>{" "}
          jobs available
        </div>

        {c.credentials && (
          <>
            <p className="text-sm font-semibold mb-2">
              Credentials
            </p>
            <div className="space-y-2">
              {c.credentials.slice(0, 2).map((cred, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-blue-600"
                >
                  <img
                    src={cred.logo}
                    alt={cred.name}
                    className="w-6 h-6 object-contain"
                  />
                  <span>{cred.name}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  ))}
</div>


      <div className="mt-12">
        <WhyCoursera />
      </div>

      {/* ================= CAREER RESOURCES (UNCHANGED) ================= */}
      <div className="mt-20">
  <div className="text-3xl font-semibold mb-6">
    Career resources
  </div>

  <div className="flex gap-3 mb-10 flex-wrap">
    {resourceTabs.map((tab) => (
      <div
        key={tab.key}
        onClick={() => setActiveResourceTab(tab.key)}
        className={`px-4 py-2 rounded-full text-sm font-medium border
          ${
            activeResourceTab === tab.key
              ? "bg-gray-800 text-white"
              : "bg-white hover:bg-gray-100"
          }`}
      >
        {tab.label}
      </div>
    ))}
  </div>

  {/* CARDS GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {filteredResources.slice(0, visibleCount).map((item, i) => (
      <div
        key={i}
        className="border rounded-2xl bg-white p-3 hover:shadow-xl"
      >
        <div className="text-base font-semibold mb-3">
          {item.title}
        </div>
        <p className="text-sm text-gray-600 mb-6">
          {item.desc}
        </p>
        <p className="text-sm text-gray-500">
          {item.date}
          {item.readTime && ` · ${item.readTime}`}
        </p>
      </div>
    ))}
  </div>


{/* 👇 SHOW MORE BUTTON */}
{visibleCount < filteredResources.length && (
  <div className="mt-10">
    <span
      onClick={() => setVisibleCount(prev => prev + 8)}
      className="
        px-6 py-2.5
        border border-blue-600
        text-blue-600
        bg-white
        rounded-[50px]
        text-sm font-medium
        hover:bg-blue-150
        transition
        width-[30px]
      "
    >
      Show 8 more
    </span>
  </div>
)}

</div>

    </div> 
  );
};

export default CareerLaunch;
