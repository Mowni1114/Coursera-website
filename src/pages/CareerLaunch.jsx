import React, { useState } from "react";
import { careers,careerResources } from "../data/careerData";
import WhyCoursera from "../components/WhyCoursera";


const CareerLaunch = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCareers =
    activeCategory === "all"
      ? careers
      : careers.filter(
          (career) => career.category === activeCategory
        );

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
    : careerResources.filter(
        (r) => r.category === activeResourceTab
      );


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
      <div   className="
    flex gap-3 mb-10
    overflow-x-auto whitespace-nowrap
    scrollbar-hide
    md:flex-wrap md:overflow-visible
    [&::-webkit-scrollbar]:hidden
    [scrollbar-width:none]
    [-ms-overflow-style:none]
  ">
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
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition
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

      {/* Career Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCareers.map((c, i) => (
          <div
            key={i}
            className="
              border rounded-2xl bg-white
              p-3
              transition-all duration-300
              hover:shadow-2xl hover:-translate-y-1
              hover:border-gray-300

              flex items-start gap-3
              sm:block
            "
          >
            {/* TEXT CONTENT */}
            <div className="flex-1">
              <div className="text-base sm:text-xl font-semibold mb-1">
                {c.title}
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                {c.desc}
              </p>

              {/* Salary – visible everywhere */}
              <div className="flex items-center gap-[4px] text-xs sm:text-sm text-gray-500">
                <div className="font-bold text-gray-800">
                  {c.salary}
                </div>
                <div>median salary</div>
              </div>
            </div>

            {/* IMAGE */}
            <div
              className="
                w-16 h-16
                sm:w-full sm:h-[160px]
                flex-shrink-0
                rounded-xl overflow-hidden bg-gray-100
                sm:mb-3
              "
            >
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* DESKTOP / TAB EXTRA CONTENT */}
            <div className="hidden sm:block p-2">
              {c.like && (
                <div className="text-sm mb-3">
                  <div className="font-semibold">
                    If you like:
                  </div>
                  <div className="text-gray-600">
                    {c.like.join(", ")}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-[4px] text-sm text-gray-500 mb-2">
                <div className="font-bold text-gray-800">
                  {c.jobs}
                </div>
                <div>jobs available</div>
              </div>

              {c.credentials && (
                <>
                  <p className="text-sm font-semibold mb-2">
                    Credentials
                  </p>

                  <div className="space-y-2">
                    {c.credentials.slice(0, 2).map((cred, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-blue-600"
                      >
                        <img
                          src={cred.logo}
                          alt={cred.name}
                          className="w-6 h-6 object-contain"
                        />
                        <div>{cred.name}</div>
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

    {/* ================= CAREER RESOURCES ================= */}
<div className="mt-20">
  {/* Heading */}
  <h2 className="text-3xl font-semibold mb-6">
    Career resources
  </h2>

  {/* Tabs */}
  <div
    className="
      flex gap-3 mb-10
      overflow-x-auto whitespace-nowrap
      scrollbar-hide
      md:flex-wrap md:overflow-visible
    "
  >
    {resourceTabs.map((tab) => (
      <button
        key={tab.key}
        onClick={() => setActiveResourceTab(tab.key)}
        className={`px-4 py-2 rounded-full text-sm font-medium border transition
          ${
            activeResourceTab === tab.key
              ? "bg-gray-800 text-white"
              : "bg-white hover:bg-gray-100"
          }`}
      >
        {tab.label}
      </button>
    ))}
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {filteredResources.map((item, i) => (
      <div
        key={i}
        className="
          border rounded-2xl bg-white
          p-3
          transition-all duration-300
          hover:shadow-2xl hover:-translate-y-1
        "
      >
        {/* Title */}
        <div className="text-base font-semibold leading-snug mb-3">
          {item.title}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-8">
          {item.desc}
        </p>

        {/* Meta */}
        <p className="text-sm text-gray-500">
          {item.date}
          {item.readTime && ` · ${item.readTime}`}
        </p>
      </div>
    ))}
  </div>
</div>


    </div>
  );
};

export default CareerLaunch;
