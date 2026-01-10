import React from "react";
import {
  Rocket,
  RefreshCcw,
  TrendingUp,
  Compass,
} from "lucide-react";

const data = [
  { id: 1, title: "Start my career", icon: Rocket },
  { id: 2, title: "Change my career", icon: RefreshCcw },
  { id: 3, title: "Grow in my curent role", icon: TrendingUp },
  { id: 4, title: "Explore topics  out of work", icon: Compass },
];

const WhyCoursera = () => {
  return (
    <section className="w-full py-13">
      <div className="max-w-7xl mx-auto px-4">

        {/* Rounded Background Container */}
        <div className="bg-[#e3eeff] rounded-[22px] py-5 px-4 md:px-10 sm:px-12">

          {/* Heading */}
          <p className="text-2xl md:text-3xl font-semibold text-center mb-6 ">
            What brings you to Coursera today?
          </p>

{/* Cards */}
<div
  className="
    grid
    grid-cols-1
    md:grid-cols-3
    gap-4
    md:gap-3

    px-1
    sm:px-2
    md:px-2
    lg:px-0

    lg:flex
    lg:items-center
    lg:justify-center
    lg:gap-x-3
  "
>


            {data.map((item, index) => {
              const Icon = item.icon;
              return (
               <div
  key={item.id}
  className={`
    bg-white
    rounded-2xl
    px-6 py-2
    flex items-center gap-1

    w-full
    md:max-w-[220px]
    lg:max-w-[240px]

    shadow-sm
    transition-all duration-300
    hover:shadow-lg
    hover:-translate-y-1

    cursor-pointer

    ${index === 3 ? "md:col-span-3 md:justify-self-center" : ""}
  `}
>



                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-blue-600 
                                  flex items-center justify-center mx-1">
                    <Icon className="text-white w-5 h-5" />
                  </div>

                  {/* Text */}
                  <p className="text-base font-semibold text-gray-900 mb-1">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyCoursera;
