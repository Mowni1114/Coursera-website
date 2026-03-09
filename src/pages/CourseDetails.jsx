import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

import Google from "../assets/Google.png";
import detail from "../assets/detail1.png";

const CourseDetail1 = () => {
  return (
    <div>

      {/* BREADCRUMB SECTION */}
      <div className="bg-gray-100">
  <div className="flex items-center gap-2 px-5 py-3 text-black">

    {/* Home icon */}
    <Link to="/" className="cursor-pointer">
      <Home size={18} />
    </Link>



    <div>{">"}</div>

    {/* Browse */}
    <Link to="/ExploreCategories" className="cursor-pointer text-gray-100">
      Browse
    </Link>

  </div>
</div>

      {/* HERO SECTION */}
      <section className="relative bg-[#eef2f7] overflow-hidden">

        <div className="max-w-7xl mx-auto px-8 py-16 flex items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl z-10">

            {/* First image - detail1 */}
            <img
              src={detail}
              alt="detail"
              className="w-32 mb-6"
            />

            {/* Title */}
            <p className="text-5xl font-semibold leading-tight mb-6">
              Google UX Design Professional Certificate
            </p>

            {/* Description */}
            <p className="text-xl text-gray-700 mb-2">
              Get on the fast track to a career in UX design.
            </p>

            <p className="text-xl text-gray-700 mb-4">
              In this certificate program, you’ll learn in-demand skills,
              and get AI training from Google experts.
              Learn at your own pace, no degree or experience required.
            </p>

            {/* Instructor */}
            <div className="flex items-center gap-3 mb-6">

              <img
                src={Google}
                alt="Google"
                className="w-8 h-8"
              />

              <p className="text-gray-700">
                Instructor:
                <span className="text-blue-700 ml-1 font-medium">
                  Google Career Certificates
                </span>
              </p>

              <span className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded">
                ✦ New AI skills
              </span>

            </div>

            {/* Button */}
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold">
              Enroll for free
            </button>

            <p className="text-sm text-gray-600 mt-2">
              Starts Mar 9
            </p>

          </div>

        </div>

        {/* BACKGROUND SVG */}
        <svg
          className="absolute right-0 top-0 h-full opacity-40"
          viewBox="0 0 600 600"
          fill="none"
        >
          <path
            d="M219.118 125.669L163.127 0.0637756C49.9173 50.5296 -15.5504 170.484 3.25344 292.998C22.0573 415.512 120.486 510.312 243.619 524.503C366.753 538.695 484.165 468.77 530.345 353.745L402.727 302.509C379.637 360.022 320.931 394.984 259.364 387.889C197.797 380.793 148.583 333.393 139.181 272.136C129.779 210.879 162.513 150.901 219.118 125.669Z"
            fill="#dbeafe"
          />
        </svg>

      </section>

    </div>
  );
};

export default CourseDetail1;