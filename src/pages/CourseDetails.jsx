
import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

import Google from "../assets/Google.png";
import detail from "../assets/detail1.png";

const CourseDetail1 = () => {
  return (
    <div>

      {/* BREADCRUMB */}
      <div className="bg-gray-100">
        <div className="flex items-center gap-2 px-5 py-3 text-black text-sm">
          <Link to="/" className="cursor-pointer">
            <Home size={18} />
          </Link>

          <div>{">"}</div>

          <Link to="/ExploreCategories" className="cursor-pointer text-gray-600">
            Browse
          </Link>
        </div>
      </div>


      {/* HERO SECTION */}
      <section className="relative bg-[#eef2f7] overflow-hidden">

        <div className="max-w-7xl px-5 lg:px-4 py-10 lg:py-16 flex items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl lg:max-w-2xl z-10">

            {/* Image */}
            <img
              src={detail}
              alt="detail"
              className="w-24 lg:w-32 mb-6"
            />

            {/* Title */}
            <p className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight mb-6">
              Google UX Design Professional Certificate
            </p>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-2">
              Get on the fast track to a career in UX design.
            </p>

            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-4">
              In this certificate program, you’ll learn in-demand skills,
              and get AI training from Google experts. Learn at your own
              pace, no degree or experience required.
            </p>

            {/* Instructor */}
            <div className="flex flex-wrap items-center gap-3 mb-6">

              <img
                src={Google}
                alt="Google"
                className="w-7 h-7"
              />
                <p className="text-blue-700 ml-1 font-medium">
                  Google Career Certificates
                </p>
             

              <span className="bg-blue-100 text-blue-700 text-xs md:text-sm px-2 py-1 rounded">
                ✦ New AI skills
              </span>

            </div>

            {/* Button */}
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 lg:px-8 py-3 rounded-lg font-semibold">
              Enroll for free
            </button>

            <p className="text-sm text-gray-600 mt-2">
              1,372,196 already enrolled
            </p>

          </div>

        </div>


        {/* BACKGROUND SVG (desktop only) */}
        <svg
          className="hidden lg:block absolute right-0 top-0 h-full opacity-40"
          viewBox="0 0 600 600"
          fill="none"
        >
          <path
            d="M219.118 125.669L163.127 0.0637756C49.9173 50.5296 -15.5504 170.484 3.25344 292.998C22.0573 415.512 120.486 510.312 243.619 524.503C366.753 538.695 484.165 468.77 530.345 353.745L402.727 302.509C379.637 360.022 320.931 394.984 259.364 387.889C197.797 380.793 148.583 333.393 139.181 272.136C129.779 210.879 162.513 150.901 219.118 125.669Z"
            fill="#dbeafe"
          />
        </svg>
        {/* COURSE INFO CARD */}
<div className="max-w-10xl px-5 lg:px-5 lg:-mt-16 relative lg:z-20">

<div className="lg:bg-gray-100 lg:rounded-2xl lg:shadow-lg 
lg:grid lg:grid-cols-5 
lg:divide-x lg:divide-gray-200">

    {/* Course Series */}
    <div className="p-0 lg:p-3 m-0 lg:m-2">
  <p className="text-xl lg:text-2xl font-semibold underline cursor-pointer">
    8 course series
  </p>
  <p className="text-gray-600 text-base lg:text-base">
    Earn a career credential that demonstrates your expertise
  </p>
</div>

{/* Rating */}
<div className="p-0 lg:p-3 m-0 lg:m-2">
  <p className="text-xl lg:text-2xl font-semibold flex items-center gap-1">
    4.8 <span className="text-blue-600">★</span>
  </p>
  <p className="text-gray-600 text-base lg:text-base">
    from 97,761 reviews of courses in this program
  </p>
</div>

    {/* Beginner */}
    <div className="p-0 lg:p-3 m-0 lg:m-2">
      <p className="text-xl lg:text-2xl font-semibold">
        Beginner level
      </p>
      <p className="text-gray-600 text-base lg:text-base mt-1 flex items-center ">
        Recommended experience
        <span className="border border-gray-500 rounded-full w-4 h-4 text-xs flex items-center justify-center">
          i
        </span>
      </p>
    </div>

    {/* Flexible Schedule */}
    <div className="p-0 lg:p-3 m-0 lg:m-2">
      <p className="text-xl lg:text-2xl font-semibold">
        Flexible schedule
      </p>
      <p className="text-gray-600 text-base lg:text-base mt-1">
        6 months at 10 hours a week
      </p>
      <p className="text-gray-600 text-base">
        Learn at your own pace
      </p>
    </div>

    {/* Degree */}
    <div className="p-0 m-0 lg:p-3 lg:m-2">
      <p className="text-xl lg:text-2xl font-semibold">
        Build toward a degree
      </p>
      <p className="text-base underline cursor-pointer">
        Learn more
      </p>
    </div>

  </div>
</div>

      

      </section>

    </div>
  );
};

export default CourseDetail1;

