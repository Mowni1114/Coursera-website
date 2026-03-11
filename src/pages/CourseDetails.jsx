import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

import Google from "../assets/Google.png";
import detail from "../assets/detail1.png";

const CourseDetail1 = () => {
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* STICKY TOP BAR */}
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-white border-b shadow-md transition-transform transition-opacity duration-500 ease-in-out ${
          showStickyBar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl  px-5 lg:px-6">
          {/* Top row */}
          <div className="flex items-center justify-between py-2 border-b border-gray-200 gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <img
                src={Google}
                alt="Google"
                className="w-10 h-10 object-contain flex-shrink-0"
              />
              <div className="text-lg lg:text-2xl font-semibold text-gray-900 truncate">
                Foundations of Digital Marketing and E-commerce
              </div>
            </div>

            <label className="bg-blue-700 hover:bg-blue-800 text-white px-5 lg:px-8 py-3 rounded-lg font-semibold text-sm lg:text-xl leading-snug flex-shrink-0">
              Enroll for free
            
            </label>
          </div>

          {/* Bottom nav */}
          <div className="flex gap-8 lg:gap-14 py-4 overflow-x-auto whitespace-nowrap text-gray-800 text-lg font-semibold">
            <button className="text-blue-600 border-b-2 border-blue-600 pb-1">
              About
            </button>
            <button>Outcomes</button>
            <button>Modules</button>
            <button>Recommendations</button>
            <button>Testimonials</button>
            <button>Reviews</button>
          </div>
        </div>
      </div>

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
            <img src={detail} alt="detail" className="w-24 lg:w-32 mb-6" />

            {/* Title */}
            <p className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight mb-6">
              Foundation of Digital Marketing and E-commerce
            </p>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-2">
              This course is a part of Google Digital Marketing and E-commerce
              professional certificate
            </p>

            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-4">
              In this certificate program, you’ll learn in-demand skills, and get
              AI training from Google experts. Learn at your own pace, no degree
              or experience required.
            </p>

            {/* Instructor */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <img src={Google} alt="Google" className="w-7 h-7" />
              <p className="text-blue-700 ml-1 font-medium">
                Google Career Certificates
              </p>

              <span className="bg-blue-100 text-blue-700 text-xs md:text-sm px-2 py-1 rounded">
                ✦ New AI skills
              </span>
            </div>

            {/* Button */}
            <label className="bg-blue-700 hover:bg-blue-800 text-white px-6 lg:px-8 py-3 rounded-lg font-semibold">
              Enroll for free
            </label>

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
          <div
            className="lg:bg-gray-100 lg:rounded-2xl lg:shadow-lg 
            lg:grid lg:grid-cols-5 lg:divide-x lg:divide-gray-200 lg:p-4"
          >
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
              <p className="text-gray-600 text-base lg:text-base mt-1 flex items-center gap-2">
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
              <p className="text-base underline cursor-pointer">Learn more</p>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE CONTENT SECTION */}
      <section className="max-w-7xl px-5 lg:px-6 py-10">
        {/* TABS */}
        <div className="flex flex-wrap gap-8 border-b border-gray-200 pb-3 text-gray-700 text-xl font-semibold">
          <button className="text-blue-600 border-b-2 border-blue-600 pb-2">
            About
          </button>
          <button>Outcomes</button>
          <button>Modules</button>
          <button>Recommendations</button>
          <button>Testimonials</button>
          <button>Reviews</button>
        </div>

        {/* WHAT YOU'LL LEARN */}
        <div className="mt-6">
          <div className="text-2xl font-semibold mb-6">What you'll learn</div>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="flex gap-3">
              <span className="text-black-800 text-lg">✔</span>
              <p className="text-black text-xl">
                Define the fields of digital marketing and e-commerce
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-black-600 text-lg">✔</span>
              <p className="text-black text-xl">
                Describe the job responsibilities of an entry-level digital
                marketer and e-commerce specialist
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-black-600 text-lg">✔</span>
              <p className="text-black text-xl">
                Explain the concept of a marketing funnel
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-black-600 text-lg">✔</span>
              <p className="text-black text-xl">
                Understand the elements and goals of a digital marketing and
                e-commerce strategy
              </p>
            </div>
          </div>
        </div>

        {/* SKILLS YOU'LL GAIN */}
        <div className="mt-2">
          <div className="text-2xl font-semibold mb-6">Skills you'll gain</div>

          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-200 px-4 py-2 rounded-full text-sm text-black">
              Branding
            </span>

            <span className="bg-gray-200 px-4 py-2 rounded-full text-sm text-black">
              Performance Measurement
            </span>

            <span className="bg-gray-200 px-4 py-2 rounded-full text-sm text-black">
              Email Marketing
            </span>

            <span className="bg-gray-200 px-4 py-2 rounded-full text-sm text-black">
              Digital Marketing
            </span>

            <span className="bg-gray-200 px-4 py-2 rounded-full text-sm text-black">
              Content Performance Analysis
            </span>

            <span className="bg-gray-200 px-4 py-2 rounded-full text-sm text-black">
              Marketing Strategy and Techniques
            </span>

            <span className="bg-gray-200 px-4 py-2 rounded-full text-sm text-black">
              Data Storytelling
            </span>

            <span className="bg-gray-200 px-4 py-2 rounded-full text-sm text-black">
              E-Commerce
            </span>

            <span className="bg-gray-200 px-4 py-2 rounded-full text-sm text-black">
              Marketing Analytics
            </span>
          </div>
        </div>

        {/* DETAILS TO KNOW */}
        <div className="max-w-7xl py-12">
          <div className="text-2xl font-semibold mb-5">Details to know</div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Shareable certificate */}
            <div className="flex gap-3">
              <div className="bg-blue-600 text-white font-bold w-10 h-10 flex items-center justify-center rounded">
                in
              </div>

              <div>
                <div className="text-lg font-semibold">
                  Shareable certificate
                </div>

                <div className="text-gray-600">
                  Add to your LinkedIn profile
                </div>
              </div>
            </div>

            {/* Assessments */}
            <div className="flex gap-3">
              <div className="text-2xl">📋</div>

              <div>
                <div className="text-lg font-semibold">Assessments</div>

                <div className="text-gray-600">17 assignments</div>

                <div className="text-blue-600 cursor-pointer">
                  AI Graded see disclaimer
                </div>
              </div>
            </div>

            {/* Language */}
            <div className="flex gap-3">
              <div className="text-2xl">💬</div>

              <div>
                <div className="text-lg font-semibold">Taught in English</div>

                <div className="text-blue-600 cursor-pointer">
                  11 languages available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail1;