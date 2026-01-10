import React from "react";


import ec1 from "../assets/ec1.png";
import ec2 from "../assets/ec2.png";
import ec3 from "../assets/ec3.png";
import ec4 from "../assets/ec4.png";

const mentorsData = [
  {
    id: 1,
    image: ec1,
    title: "Data Analyst",
    description:
      "A Data Analyst collects, cleans, and interprets data, using tools like Excel, SQL, and Python.",
    salary: "₹305,009",
    jobs: "27,098",
  },
  {
    id: 2,
    image: ec2,
    title: "Python Developer",
    description:
      "A Python Developer specializes in writing server-side web application logic.",
    salary: "₹610,107",
    jobs: "31,148",
  },
  {
    id: 3,
    image: ec3,
    title: "Data Scientist",
    description:
      "A Data Scientist analyzes large datasets to uncover insights using statistics and machine learning.",
    salary: "₹489,219",
    jobs: "23,744",
  },
  {
    id: 4,
    image: ec4,
    title: "Automation Engineer",
    description:
      "An automation engineer designs and implements systems to enhance efficiency.",
    salary: "₹966,925",
    jobs: "82,087",
  },
];



function Mentors() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-12">

      {/* ================= Explore Careers ================= */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Explore careers
          </h2>
          <button className="text-blue-600 font-medium text-sm hover:underline">
            Explore all →
          </button>
        </div>

        <div
          className="
            flex gap-4 overflow-x-auto no-scrollbar
            md:grid md:grid-cols-3 md:overflow-x-visible
            lg:grid-cols-4
          "
        >
          {mentorsData.map((item, index) => (
            <div
              key={item.id}
              className={`
                bg-white border border-slate-200 rounded-xl
                flex flex-col
                hover:shadow-lg hover:scale-[1.02] transition
                flex-shrink-0
                w-[240px] md:w-auto
                ${index === 3 ? "md:hidden lg:block" : ""}
              `}
            >
              <div className="p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-lg object-cover h-[100px] md:h-[170px]"
                />
              </div>

              <div className="p-3">
                <h3 className="font-semibold text-sm md:text-[18px] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs md:text-sm text-slate-600 line-clamp-2 mb-2">
                  {item.description}
                </p>

                <div className="text-xs md:text-sm text-slate-700">
                  <p>
                    <span className="font-semibold text-slate-900">
                      {item.salary}
                    </span>{" "}
                    median salary
                  </p>
                  <p>
                    <span className="font-bold text-slate-900">
                      {item.jobs}
                    </span>{" "}
                    jobs available
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

   
      

    </section>
  );
}

export default Mentors;
