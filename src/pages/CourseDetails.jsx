import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";

import Google from "../assets/Google.png";
import detail from "../assets/detail1.png";
import Back_End from "../assets/Back_End.png";
import Certificate from "../assets/Certificate.png";


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

  const [showMore, setShowMore] = useState(false);



  return (
    <div>
      {/* STICKY TOP BAR */}
      <div
        className={` hidden lg:block fixed top-0 left-0 w-full z-50 bg-white border-b shadow-md transition-transform transition-opacity duration-500 ease-in-out ${
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
{/* TABS - desktop only */}
<div className="hidden lg:flex flex-wrap gap-8 border-b border-gray-200 pb-3 text-gray-700 text-xl font-semibold">
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
<div className="mt-2 lg:mt-6">
  <div className="text-2xl font-semibold mb-6">What you'll learn</div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 text-gray-700">
    <div className="flex items-start gap-3">
      <span className="text-black text-base lg:text-lg ">✔</span>
      <p className="text-black text-base sm:text-lg lg:text-xl leading-7">
        Define the fields of digital marketing and e-commerce
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="text-black text-base lg:text-lg ">✔</span>
      <p className="text-black text-base sm:text-lg lg:text-xl leading-7">
        Describe the job responsibilities of an entry-level digital marketer
        and e-commerce specialist
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="text-black text-base lg:text-lg ">✔</span>
      <p className="text-black text-base sm:text-lg lg:text-xl leading-7">
        Explain the concept of a marketing funnel
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="text-black text-base lg:text-lg ">✔</span>
      <p className="text-black text-base sm:text-lg lg:text-xl leading-7">
        Understand the elements and goals of a digital marketing and
        e-commerce strategy
      </p>
    </div>
  </div>
</div>

{/* SKILLS YOU'LL GAIN */}
<div className="mt-3 lg:mt-4">
  <div className="text-2xl font-semibold mb-3">Skills you'll gain</div>

  <div className="flex flex-wrap gap-3">
    <span className="bg-[#eef2f7] px-4 py-2 rounded-full text-sm sm:text-base text-black">
      Branding
    </span>

    <span className="bg-[#eef2f7] px-4 py-2 rounded-full text-sm sm:text-base text-black">
      Performance Measurement
    </span>

    <span className="bg-[#eef2f7] px-4 py-2 rounded-full text-sm sm:text-base text-black">
      Email Marketing
    </span>

    <span className="bg-[#eef2f7] px-4 py-2 rounded-full text-sm sm:text-base text-black">
      Digital Marketing
    </span>

    <span className="bg-[#eef2f7] px-4 py-2 rounded-full text-sm sm:text-base text-black">
      Content Performance Analysis
    </span>

    <span className="hidden sm:inline-block bg-[#eef2f7] px-4 py-2 rounded-full text-sm sm:text-base text-black">
      Marketing Strategy and Techniques
    </span>

    <span className="hidden sm:inline-block bg-[#eef2f7] px-4 py-2 rounded-full text-sm sm:text-base text-black">
      Data Storytelling
    </span>

    <span className="hidden sm:inline-block bg-[#eef2f7] px-4 py-2 rounded-full text-sm sm:text-base text-black">
      E-Commerce
    </span>

    <span className="hidden sm:inline-block bg-[#eef2f7] px-4 py-2 rounded-full text-sm sm:text-base text-black">
      Marketing Analytics
    </span>

    <span className="text-black underline font-medium text-sm sm:text-base self-center cursor-pointer">
      Show all
    </span>
  </div>
</div>

{/* DETAILS TO KNOW */}
<div className="max-w-7xl py-5">
  <div className="text-2xl font-semibold mb-3">Details to know</div>

  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
    {/* Shareable certificate */}
    <div className="flex gap-3">
      <div className="bg-blue-600 text-white font-bold w-10 h-10 flex items-center justify-center rounded shrink-0">
        in
      </div>

      <div>
        <div className="text-lg font-semibold">Shareable certificate</div>
        <div className="text-gray-600 text-sm sm:text-base">
          Add to your LinkedIn profile
        </div>
      </div>
    </div>

    {/* Assessments */}
    <div className="flex gap-3">
      <div className="text-2xl shrink-0">📋</div>

      <div>
        <div className="text-lg font-semibold">Assessments</div>
        <div className="text-gray-600 text-sm sm:text-base">
          17 assignments
        </div>
        <div className="text-blue-600 cursor-pointer text-sm sm:text-base">
          AI Graded see disclaimer
        </div>
      </div>
    </div>

    {/* Language */}
    <div className="flex gap-3">
      <div className="text-2xl shrink-0">💬</div>

      <div>
        <div className="text-lg font-semibold">Taught in English</div>
        <div className="text-blue-600 cursor-pointer text-sm sm:text-base">
          11 languages available
        </div>
      </div>
    </div>
  </div>
</div>

{/* BUILD YOUR MARKETING EXPERTISE */}

<section className="w-full py-6">
<div className="max-w-7xl ">
  <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-8 lg:gap-16">
    
    {/* CONTENT */}
    <div className="flex justify-start">
      <div className="max-w-[700px]">
        <h2 className="text-3xl lg:text-[54px] font-bold text-black leading-tight mb-6">
          Build your Marketing expertise
        </h2>

        <p className="text-lg lg:text-[20px] text-black leading-9 mb-2">
          This course is part of the{" "}
          <span className="text-blue-700 font-semibold cursor-pointer hover:underline">
            Google Digital Marketing &amp; E-commerce Professional Certificate
          </span>
        </p>

        <p className="text-lg lg:text-[20px] text-black leading-9 mb-8">
          When you enroll in this course, you'll also be enrolled in this
          Professional Certificate.
        </p>

        <ul className="space-y-5 text-lg lg:text-[20px] text-black">
          <li className="flex items-start gap-4">
            <span className="text-2xl leading-none mt-1">•</span>
            <span>Learn new concepts from industry experts</span>
          </li>

          <li className="flex items-start gap-4">
            <span className="text-2xl leading-none mt-1">•</span>
            <span>Gain a foundational understanding of a subject or tool</span>
          </li>

          <li className="flex items-start gap-4">
            <span className="text-2xl leading-none mt-1">•</span>
            <span>Develop job-relevant skills with hands-on projects</span>
          </li>

          <li className="flex items-start gap-4">
            <span className="text-2xl leading-none mt-1">•</span>
            <span>Earn a shareable career certificate from Google</span>
          </li>
        </ul>
      </div>
    </div>

    {/* IMAGE */}
    <div className="w-full">
      <img
        src={Back_End}
        alt="Marketing course"
        className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[360px] object-cover rounded-2xl"
      />
    </div>
  </div>
</div>
</section>


<div className="w-full lg:w-[60%]">

<h2 className="text-3xl lg:text-5xl font-semibold mb-6">
  There are 4 modules in this course
</h2>

  <p className="text-lg leading-8 mb-4">
    This is the first of eight courses in the Google Digital Marketing &
    E-commerce Certificate, which will equip you with the skills you need
    to apply to entry-level roles in these fields. People who work in
    digital marketing and e-commerce help their organizations attract new
    customers, engage customers through various digital channels, and drive
    transactions like purchases and customer loyalty.
  </p>

  {showMore && (
    <>
      <p className="text-lg leading-8 mb-4">
        Google employees who currently work in the field will guide you,
        providing hands-on activities and examples that simulate common
        digital marketing and e-commerce tasks, and helping you build your
        skills and prepare for the job.
      </p>

      <ul className="space-y-2 text-lg leading-8 mb-4">
        <li>- Define the fields of digital marketing and e-commerce</li>
        <li>- Describe job responsibilities of entry-level roles</li>
        <li>- Summarize how this program prepares your career</li>
        <li>- Identify roles and functions in an organization</li>
        <li>- Understand the customer journey</li>
        <li>- Explain the marketing funnel</li>
        <li>- Understand digital marketing strategy</li>
      </ul>
    </>
  )}

</div>

{!showMore ? (
  <button
    onClick={() => setShowMore(true)}
    className="text-blue-600 font-semibold mt-2 hover:underline"
  >
    Read more
  </button>
) : (
  <button
    onClick={() => setShowMore(false)}
    className="text-blue-600 font-semibold mt-2 hover:underline"
  >
    Read less
  </button>
)}




<section className="w-full py-10">
  <div className="max-w-7xl ">
    <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-8 items-start">
      
      {/* LEFT SIDE */}
      <div className="border border-gray-200 rounded-2xl p-6 lg:p-8 bg-white">
        
        {/* Module 1 */}
        <div className="flex items-center justify-between py-3 border-b border-gray-200 hover:bg-[#eef4ff]  cursor-pointer transition">
          <div>
            <div className="text-2xl font-semibold text-black">
              Introduction to foundations of digital marketing
            </div>
            <p className="text-gray-500 text-lg mt-2">
              Module 1 &nbsp;•&nbsp; 3 hours to complete
            </p>
          </div>
          <ChevronDown size={20}  color="blue"/>
        </div>

        {/* Module 2 */}
        <div className="flex items-center justify-between py-3 border-b border-gray-200 hover:bg-[#eef4ff]  cursor-pointer transition">
          <div>
            <div className="text-2xl font-semibold text-black">
              The customer journey and the marketing funnel
            </div>
            <p className="text-gray-500 text-lg mt-2">
              Module 2 &nbsp;•&nbsp; 3 hours to complete
            </p>
          </div>
          <ChevronDown size={20} color="blue"/>
        </div>

        {/* Module 3 */}
        <div className="flex items-center justify-between py-3 border-b border-gray-200 hover:bg-[#eef4ff]  cursor-pointer transition">
          <div>
            <div className="text-2xl font-semibold text-black">
              Digital marketing and e-commerce strategy
            </div>
            <p className="text-gray-500 text-lg mt-2">
              Module 3 &nbsp;•&nbsp; 3 hours to complete
            </p>
          </div>
          <ChevronDown size={20} color="blue" />
        </div>

        {/* Module 4 highlighted */}
        <div className="flex items-center justify-between py-3  border-gray-200 hover:bg-[#eef4ff]  cursor-pointer transition">
          <div>
            <div className="text-2xl font-semibold text-black">
              Measure performance success
            </div>
            <p className="text-gray-500 text-lg mt-2">
              Module 4 &nbsp;•&nbsp; 2 hours to complete
            </p>
          </div>

          <ChevronDown size={20} color="blue" />

          
        </div>

        {/* Divider */}
        <div className="border-b border-gray-200 my-3"></div>

        {/* Earn certificate section */}
        <div className="flex items-start gap-6 pt-2">
          <div className="w-12 h-12 rounded-2xl bg-[#eef2f7] flex items-center justify-center shrink-0">
            <div className="text-4xl text-blue-700">
              <img src={Certificate} alt = "certificate" ></img>
            </div>
          </div>

          <div>
            <div className="text-3xl font-semibold text-black mb-3">
              Earn a career certificate
            </div>
            <p className="text-xl text-black leading-9">
              Add this credential to your LinkedIn profile, resume, or CV.
              Share it on social media and in your performance review.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="border border-gray-200 rounded-2xl p-6 lg:p-8 bg-white">
        <div className="text-3xl font-semibold text-black mb-3">Instructor</div>

        <div className="flex items-center gap-3 text-lg mb-6">
          <span className="text-gray-700">Instructor ratings</span>
          <span className="text-blue-700">ℹ</span>
          <span className="font-semibold">4.8 ★</span>
          <span className="text-gray-500">(10,390 ratings)</span>
        </div>

        <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
          <img src={Google} alt="Google" className="w-16 h-16 rounded-full" />

          <div>
            <div className="text-2xl font-semibold underline cursor-pointer">
              Google Career Certificates
            </div>
            <p className="text-xl mt-1">Google</p>
            <p className="text-lg text-gray-700 mt-2">
              386 Courses &nbsp;•&nbsp; 15,807,696 learners
            </p>
          </div>
        </div>

        <div className="pt-6">
          <div className="text-3xl font-semibold text-black mb-5">Offered by</div>

          <div className="flex items-start gap-4">
            <img src={Google} alt="Google" className="w-16 h-16 rounded-2xl border" />

            <div>
              <div className="text-2xl font-semibold underline cursor-pointer">
                Google
              </div>
              <p className="text-blue-700 text-xl mt-3 cursor-pointer hover:underline">
                Learn more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


</section>
    </div>
  );
};

export default CourseDetail1;