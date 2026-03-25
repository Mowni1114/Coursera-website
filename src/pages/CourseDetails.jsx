import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from "../components/Footer";

import {
  Star,
  Video,
  BookOpen,
  ClipboardList,
  Puzzle,
} from "lucide-react";

import Google from "../assets/Google.png";
import detail from "../assets/detail1.png";
import Back_End from "../assets/Back_End.png";
import Certificate from "../assets/Certificate.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
  const testimonials = [
    {
      id: 1,
      name: "Sarah W.",
      image: p1,
      text:
        "Coursera's reputation for high-quality content, paired with its flexible structure, made it possible for me to dive into data analytics while managing family, health, and everyday life.",
    },
    {
      id: 2,
      name: "Noeris B.",
      image: p2,
      text:
        "Coursera rebuilt my confidence and showed me I could dream bigger.",
    },
    {
      id: 3,
      name: "Abdullahi M.",
      image: p3,
      text:
        "I now feel more prepared to take on leadership roles and have already started mentoring colleagues.",
    },
    {
      id: 4,
      name: "Anas A.",
      image: p4,
      text:
        "Learning with Coursera has expanded my professional expertise with global perspectives.",
    },
  ];
  
  const faqData = [
    {
      id: 1,
      question:
        "Is Coursera accredited, and are Coursera certificates recognized by employers?",
      answer:
       " Coursera partners with accredited universities and leading companies such as Google and IBM to offer courses, Specializations, and Professional Certificates. Employers widely recognize these credentials because they are issued directly by trusted institutions. Learners can build job-ready skills with the Google Data Analytics Professional Certificate, the IBM Data Analyst Professional Certificate, or start with accredited university content in high-demand fields like data analytics and cybersecurity"
    },
    {
      id: 2,
      question: "Is a Coursera certificate worth it?",
      answer:
        "For many learners, a Coursera certificate is worth it because it provides job-ready skills and a verifiable credential from respected universities and companies. Learners commonly transition into roles in project management, UX design, and data science through programs such as the Google Project Management Professional Certificate, the Google UX Design Professional Certificate, and the IBM Data Science Professional Certificate. Others enter technical fields by starting with beginner-friendly Python or generative AI courses.",
    },
    {
      id: 3,
      question: "What are most popular courses on Coursera?",
      answer:
        "Coursera’s best-known courses and certificates are offered by leading universities and companies in the fields of AI, data science, cybersecurity, and software engineering. Many learners begin with the Machine Learning Specialization or the Deep Learning Specialization. In contrast, others opt for job-aligned pathways, such as the Google Cybersecurity Professional Certificate or the AI Engineer Professional Certificate. You can also browse broad areas, such as artificial intelligence, SQL, or web development, to find highly rated options.",
    },
    {
      id: 4,
      question: "Does Coursera offer free online courses?",
      answer:
        "Yes. Coursera offers thousands of courses that you can preview for free, including access to the first module, allowing you to explore the content before committing. Learners who want full course access or a certificate can join with a 7-day free trial through Coursera Plus or a subscription-based program. Many learners begin with introductory topics, such as Python, digital marketing, or English speaking, and later move into job-focused programs, like the Google IT Support Professional Certificate, when they’re ready to complete a credential .",
    },
    {
      id: 5,
      question: "How can Coursera help me get a job or advance my carrer?",
      answer:
        "Coursera offers job-aligned Professional Certificates and Specializations designed in collaboration with employers and universities to help learners qualify for roles in fields such as cybersecurity, UX, data analytics, AI, and business. Programs such as the Google Cybersecurity Professional Certificate, the Data Analysis with Python Specialization, and the UI/UX Design Specialization help learners build employer-relevant skills. At the same time, many career changers explore areas such as product management or business analysis as pathways into business and technology roles. Coursera also offers online bachelor’s and master’s degrees from accredited universities, which can support long-term career advancement in business, computer science, data, and other high-growth fields. Learners exploring formal education pathways can browse online degrees or view available bachelor’s programs to find a degree aligned to their career goals.",
    },
  ];
  
  const reviews = [
    {
      id: 1,
      initials: "AG",
      name: "AG",
      rating: 5,
      date: "Reviewed on Jun 20, 2022",
      text: "thank you google for this course to know what is digital marketing , how it works , what are the definations to various tacts , various terms , types of marketing, marketing funnel and so much ...",
    },
    {
      id: 2,
      initials: "MK",
      name: "MK",
      rating: 5,
      date: "Reviewed on Oct 18, 2022",
      text: "it was a wonderful journey and super excited to learn next step. the way of teaching is too the point and simple one can easily understand the basics of digital marketing without having knowledge.",
    },
  ];
  
  const ratingBars = [
    { label: "5 stars", value: "86.16%", width: "w-[86%]" },
    { label: "4 stars", value: "11.40%", width: "w-[11%]" },
    { label: "3 stars", value: "1.43%", width: "w-[2%]" },
    { label: "2 stars", value: "0.33%", width: "w-[1%]" },
    { label: "1 star", value: "0.67%", width: "w-[1%]" },
  ];

const CourseDetail1 = () => {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [openModule, setOpenModule] = useState(null);
  const [showModuleContent, setShowModuleContent] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  
  const toggleModule = (moduleNumber) => {
    if (openModule === moduleNumber) {
      setOpenModule(null);
      setShowModuleContent(null); // ✅ change panniyachu
    } else {
      setOpenModule(moduleNumber);
      setShowModuleContent(null); // ✅ change panniyachu
    }
  };
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
            <span className="text-xl leading-none mt-1">•</span>
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
        <div
  onClick={() => toggleModule(1)}
  className={`rounded-2xl transition ${
    openModule === 1 ? "bg-white" : "hover:bg-[#eef4ff]"
  }`}
>
  <div className="flex items-center justify-between py-3 border-b border-gray-200 cursor-pointer">
    <div>
      <div className="text-base lg:text-2xl font-semibold text-black">
        Introduction to foundations of digital marketing
      </div>
      <p className="text-gray-500 text-lg mt-2">
        Module 1 &nbsp;•&nbsp; 3 hours to complete
      </p>
    </div>

    {openModule === 1 ? (
      <ChevronUp size={20} color="blue" />
    ) : (
      <ChevronDown size={20} color="blue" />
    )}
  </div>

  {openModule === 1 && (
    <div className="pt-6 pb-4">
      <p className="text-black text-[17px] leading-9">
        You’ll find out what’s in store for Course 1 and the whole certificate
        program. You’ll also learn about the Coursera platform, procedures, and
        content types, and meet other learners in the program. Then, you’ll learn
        about digital marketing and e-commerce basics, the tasks that people who
        work in these fields do, and the transferable skills you might already
        have. Finally, you’ll get some tips for embarking on careers in this field.
      </p>

      <div className="text-2xl font-semibold text-black mt-8 mb-3">
        What's included
      </div>

      <div className="flex flex-wrap gap-8 text-lg text-black">
        <div className="flex items-center gap-2">
          <Video size={20} className="text-gray-600" />
          <div>12 videos</div>
        </div>

        <div className="flex items-center gap-2">
          <BookOpen size={20} className="text-gray-600" />
          <div>7 readings</div>
        </div>

        <div className="flex items-center gap-2">
          <ClipboardList size={20} className="text-gray-600" />
          <div>3 assignments</div>
        </div>

        <div className="flex items-center gap-2">
          <Puzzle size={20} className="text-gray-600" />
          <div>1 plugin</div>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setShowModuleContent(!showModuleContent);
          }}
          className="text-black font-semibold text-lg flex items-center gap-2"
        >
          {showModuleContent
            ? "Hide info about module content"
            : "Show info about module content"}

          {showModuleContent ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </button>
      </div>

      {showModuleContent && (
        <div className="mt-8 space-y-10">
          {/* Videos */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Video size={24} className="text-gray-600" />
              <div className="text-[22px] font-semibold text-black">
                12 videos &nbsp;•&nbsp; Total 43 minutes
              </div>
            </div>

            <div className="space-y-5 text-[20px] text-black">
              <div>Welcome to the Google Digital Marketing & E-commerce Certificate &nbsp;•&nbsp; <span className="text-gray-500">8 minutes</span></div>
              <div>Introduction to Course 1 &nbsp;•&nbsp; <span className="text-gray-500">2 minutes</span></div>
              <div>Get started with your Google Digital Marketing & E-commerce Certificate &nbsp;•&nbsp; <span className="text-gray-500">2 minutes</span></div>
              <div>What are digital marketing and e-commerce? &nbsp;•&nbsp; <span className="text-gray-500">5 minutes</span></div>
              <div>What do digital marketing and e-commerce specialists do? &nbsp;•&nbsp; <span className="text-gray-500">3 minutes</span></div>
              <div>Transferable skills for digital marketing and e-commerce &nbsp;•&nbsp; <span className="text-gray-500">5 minutes</span></div>
              <div>Joi - Career Path To Digital Marketing &nbsp;•&nbsp; <span className="text-gray-500">2 minutes</span></div>
              <div>Melba - My path to working in e-commerce &nbsp;•&nbsp; <span className="text-gray-500">4 minutes</span></div>
              <div>Launching your digital marketing or e-commerce career &nbsp;•&nbsp; <span className="text-gray-500">5 minutes</span></div>
              <div>Agency roles vs. in-house roles &nbsp;•&nbsp; <span className="text-gray-500">3 minutes</span></div>
              <div>Zuri - A day in the life of an entry-level digital marketer &nbsp;•&nbsp; <span className="text-gray-500">3 minutes</span></div>
              <div>Wrap-up &nbsp;•&nbsp; <span className="text-gray-500">2 minutes</span></div>
            </div>
          </div>

          {/* Readings */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <BookOpen size={24} className="text-gray-600" />
              <div className="text-[22px] font-semibold text-black">
                7 readings &nbsp;•&nbsp; Total 46 minutes
              </div>
            </div>

            <div className="space-y-5 text-[20px] text-black">
              <div>Program and Course 1 overview &nbsp;•&nbsp; <span className="text-gray-500">8 minutes</span></div>
              <div>Helpful resources to get started &nbsp;•&nbsp; <span className="text-gray-500">8 minutes</span></div>
              <div>Core skills of digital marketing and e-commerce specialists &nbsp;•&nbsp; <span className="text-gray-500">4 minutes</span></div>
              <div>Roles and responsibilities in digital marketing and e-commerce &nbsp;•&nbsp; <span className="text-gray-500">8 minutes</span></div>
              <div>E-commerce, ecommerce, or eCommerce? &nbsp;•&nbsp; <span className="text-gray-500">8 minutes</span></div>
              <div>Digital Marketing & E-commerce Certificate glossary &nbsp;•&nbsp; <span className="text-gray-500">8 minutes</span></div>
              <div>Glossary terms from module 1 &nbsp;•&nbsp; <span className="text-gray-500">2 minutes</span></div>
            </div>
          </div>

          {/* Assignments */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <ClipboardList size={24} className="text-gray-600" />
              <div className="text-[22px] font-semibold text-black">
                3 assignments &nbsp;•&nbsp; Total 90 minutes
              </div>
            </div>

            <div className="space-y-5 text-[20px] text-black">
              <div>Reflection: Your favorite brand’s digital marketing presence &nbsp;•&nbsp; <span className="text-gray-500">30 minutes</span></div>
              <div>Test your knowledge: Careers in digital marketing and e-commerce &nbsp;•&nbsp; <span className="text-gray-500">10 minutes</span></div>
              <div>Module 1 challenge &nbsp;•&nbsp; <span className="text-gray-500">50 minutes</span></div>
            </div>
          </div>

          {/* Plugin */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Puzzle size={24} className="text-gray-600" />
              <div className="text-[22px] font-semibold text-black">
                1 plugin &nbsp;•&nbsp; Total 5 minutes
              </div>
            </div>

            <div className="space-y-5 text-[20px] text-black">
              <div>Google Digital Marketing & E-Commerce Participant Entry Survey &nbsp;•&nbsp; <span className="text-gray-500">5 minutes</span></div>
            </div>
          </div>
        </div>
      )}

      <div className="border-b border-gray-200 mt-8"></div>
    </div>
  )}
</div>
      
        {/* Module 2 */}
        <div
          onClick={() => toggleModule(2)}
          className="flex items-center justify-between py-3 border-b border-gray-200 hover:bg-[#eef4ff] cursor-pointer transition"
        >
          <div>
            <div className="text-base lg:text-2xl font-semibold text-black">
              The customer journey and the marketing funnel
            </div>
            <p className="text-gray-500 text-lg mt-2">
              Module 2 &nbsp;•&nbsp; 3 hours to complete
            </p>
          </div>
          <ChevronDown size={20} color="blue" />
        </div>
      
        {/* Module 3 */}
        <div
          onClick={() => toggleModule(3)}
          className="flex items-center justify-between py-3 border-b border-gray-200 hover:bg-[#eef4ff] cursor-pointer transition"
        >
          <div>
            <div className="text-base lg:text-2xl font-semibold text-black">
              Digital marketing and e-commerce strategy
            </div>
            <p className="text-gray-500 text-lg mt-2">
              Module 3 &nbsp;•&nbsp; 3 hours to complete
            </p>
          </div>
          <ChevronDown size={20} color="blue" />
        </div>
      
        {/* Module 4 */}
        <div
          onClick={() => toggleModule(4)}
          className="flex items-center justify-between py-3 border-gray-200 hover:bg-[#eef4ff] cursor-pointer transition"
        >
          <div>
            <div className="text-base lg:text-2xl font-semibold text-black">
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
              <img src={Certificate} alt="certificate" />
            </div>
          </div>
      
          <div>
            <div className="text-2xl font-semibold text-black mb-3">
              Earn a career certificate
            </div>
            <p className="text-base lg:text-xl text-black leading-9">
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
<div className="max-w-7xl mx-auto">
        <div className="text-2xl font-semibold mt-2">
          Why people choose Coursera
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={item.image}
                  className="w-12 h-12 rounded-full"
                />
                <p className="font-medium">{item.name}</p>
              </div>
              <p className="text-sm text-gray-700">
                “{item.text}”
              </p>
            </div>
          ))}
        </div>
      </div>





      <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <h2 className="text-[42px] font-semibold text-black mb-8">
          Reviews
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10">
          {/* LEFT SIDE */}
          <div>
            <h3 className="text-[22px] font-semibold text-black mb-10">
              Learner reviews
            </h3>

            <div className="flex items-center gap-3 mb-2">
              <Star size={26} className="fill-blue-700 text-blue-700" />
              <div className="text-[56px] font-semibold text-black leading-none">
                4.8
              </div>
            </div>

            <p className="text-[18px] text-black mb-10">31,158 reviews</p>

            <div className="space-y-6">
              {ratingBars.map((item, index) => (
                <div key={index} className="grid grid-cols-[60px_1fr_70px] items-center gap-4">
                  <div className="text-[16px] text-black font-medium">
                    {item.label}
                  </div>

                  <div className="w-full h-2 bg-[#E6ECF5] rounded-full overflow-hidden">
                    <div className={`h-full bg-blue-700 rounded-full ${item.width}`}></div>
                  </div>

                  <div className="text-[16px] text-black">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="text-center text-[18px] text-gray-600 mb-10">
              Showing 3 of 31158
            </div>

            <div className="space-y-8">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="border border-[#D9E2F0] rounded-2xl p-8 bg-white"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* avatar + name */}
                    <div className="flex items-center gap-4 min-w-[220px]">
                      <div className="w-20 h-20 rounded-full bg-blue-700 text-white flex items-center justify-center text-[28px] font-semibold">
                        {review.initials.charAt(0)}
                      </div>
                      <div className="text-[22px] text-black font-medium">
                        {review.name}
                      </div>
                    </div>

                    {/* review content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <div className="flex items-center gap-1 text-blue-700">
                          <Star size={18} className="fill-blue-700 text-blue-700" />
                          <div className="text-[18px] font-semibold text-black">
                            {review.rating}
                          </div>
                        </div>

                        <div className="text-gray-400 text-[18px]">•</div>

                        <div className="text-[18px] text-gray-700">
                          {review.date}
                        </div>
                      </div>

                      <p className="text-[20px] leading-10 text-black">
                        {review.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

      <div className="max-w-7xl p-3">
  <span className="text-2xl font-semibold mb-6 pointer-events-none">
    Frequently asked questions
  </span>

  <div className="space-y-3">
    {faqData.map((faq) => (
      <div
        key={faq.id}
        className="border-bottom bg-gray-50"
      >
        <button
          onClick={() =>
            setActiveFaq(activeFaq === faq.id ? null : faq.id)
          }
          className="w-full flex items-center gap-3 px-4 py-3 font-semibold rounded-lg hover:bg-blue-100"
        >
          {activeFaq === faq.id ? (
            <ChevronUp size={20} />   
          ) : (
            <ChevronDown size={20} /> 
          )}

          <span className="text-left bg-transparent pointer-events-none">
            {faq.question}
          </span>
        </button>

        {activeFaq === faq.id && (
          <div className="px-3 pb-4 text-sm font-medium text-gray-700">
            {faq.answer}
          </div>
        )}
      </div>
    ))}
  </div>
</div>


 <div className="mt-6">
  <p className="text-base px-3">
    ¹ Median salary and job opening data are sourced from Lightcast™ Job Postings Report <br /> 
    Content Creator, Machine Learning Engineer and Salesforce Development Representative<br /> (1/1/2024 - 31/12/2024)<br />
    All other job roles (1/1/2025 - 1/1/2026)
  </p>
</div>


<Footer />
</section>
    </div>
  );
};

export default CourseDetail1;