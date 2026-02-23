import { useState } from "react";
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ExploreCategories from "../components/ExploreCategories";
import { riskManagementData, mostPopularData,trendingNowData } from "../data/careerskill";
import Google  from "../assets/Google.png";
import  IBM from "../assets/IBM.png";
import duke from "../assets/duke.png";
import Michigan from "../assets/Michigan.png";
import illi from "../assets/illi.png";
import penn from "../assets/penn.png";
import MS from "../assets/MS.png";
import NYIF_Logo from "../assets/NYIF_Logo.jpg";
import Footer from "../components/Footer";


const CareerSkills = () => {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeFaq, setActiveFaq] = useState(null);
  
  const filteredCards =
  selectedCategory === "All"
    ? mostPopularData
    : mostPopularData.filter(
        (item) => item.category === selectedCategory
      );

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

const [visibleTrending, setVisibleTrending] = useState(8);
  return (
   
    <div className="mx-auto px-5 sm:px-6 md:px-10 py-7 sm:py-8">
      <ExploreCategories />
    
      {/* Title Responsive */}
      <div className="text-2xl sm:text-3xl font-semibold my-6 sm:mb-8 leading-snug">
        Risk Management in Financial Engineering: Key Strategies
      </div>
    
      {/* Responsive Grid */}
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-3 sm:gap-6
        px-2
      "
      >
        {riskManagementData.map((item) => (
          <div
          key={item.id}
          className="
            bg-white border rounded-2xl shadow-sm 
            hover:shadow-lg 
            transition-all duration-300 
            transform hover:-translate-y-1 hover:scale-[1.02]
          "
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
              <img src={item.image} className="w-16 h-20 object-cover rounded-xl" />
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
    
      {/* ============================
     MOST POPULAR SECTION 
=============================== */}
<div className="mt-7">
  {/* Title */}
  <div className="text-2xl sm:text-3xl font-semibold mb-1">
    Most popular
  </div>

  {/* CARD GRID */}
<div className="mt-3">
{/* CATEGORY BUTTONS */}
<div className="flex flex-wrap gap-3 mb-3">
  {["All", "Business", "Data Science", "Information Technology", "Computer Science"].map(
    (cat, index) => (
      <p
        key={index}
        onClick={() => {
          setSelectedCategory(cat);
          setVisibleCount(8); // reset when switching category
        }}
        className={`
          px-4 py-2 rounded-full border text-sm cursor-pointer
          ${selectedCategory === cat
            ? "bg-black text-white border-black"
            : "bg-white text-black border-gray-400"}
        `}
      >
        {cat}
      </p>
    )
  )}
</div>

{/* CARD GRID */}
{/* CARD GRID */}
<div className="
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-4 
  gap-3 sm:gap-6
">
  {filteredCards.slice(0, visibleCount).map((item) => (

    <div
      key={item.id}
      className="
        bg-white border rounded-2xl shadow-sm 
        hover:shadow-lg 
        transition-all duration-300 
        transform hover:-translate-y-1 hover:scale-[1.02]
      "
    >

      {/* -------- MOBILE VIEW (Left content + Right image) ------- */}
      <div className="flex sm:hidden p-2 gap-2 items-start">

        {/* LEFT CONTENT */}
        <div className="flex-1">

          {/* Tag */}
          <div className="bg-white inline-block px-2 py-1 rounded-full text-[13px] font-semibold shadow mb-2">
            {item.tag}
          </div>

          {/* Logo + Univ */}
          <div className="flex items-center gap-2 mb-1">
            <img src={item.logo} className="w-5 h-5 rounded" />
            <span className="text-gray-700 font-medium text-xs">{item.university}</span>
          </div>

          {/* Title */}
          <div className="text-[17px] font-semibold leading-snug mb-1">
            {item.title}
          </div>

          {/* Degree Label */}
          {item.degree && (
            <p className="text-blue-700 text-[10px] font-semibold">
              Build toward a degree
            </p>
          )}

          {/* Type → ALWAYS bottom */}
          <p className="text-gray-500 text-[11px] mt-1">
            {item.type}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <img src={item.image} className="w-16 h-20 object-cover rounded-xl" />
      </div>


      {/* -------- DESKTOP/TABLET VIEW ------- */}
      <div className="hidden sm:block">

        {/* IMAGE TOP */}
        <div className="relative">
          <img
            src={item.image}
            className="w-full h-44 object-cover rounded-t-2xl"
          />

          {/* Tag */}
          <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-xs font-semibold shadow">
            {item.tag}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-4 flex flex-col h-full">

          {/* Logo + Univ */}
          <div className="flex items-center gap-2 mb-3">
            <img src={item.logo} className="w-6 h-6 rounded" />
            <span className="text-gray-700 font-medium text-sm">{item.university}</span>
          </div>

          {/* Title */}
          <div className="text-[16px] font-semibold leading-snug mb-2">
            {item.title}
          </div>

          {/* Degree */}
          {item.degree && (
            <div className="flex items-center gap-2 mb-2">
              <img src={item.degreeLogo} className="w-4 h-4" />
              <span className="text-xs font-semibold text-blue-700">Build toward a degree</span>
            </div>
          )}

          {/* Type → Stick to bottom */}
          <p className="text-gray-500 text-sm mt-auto">{item.type}</p>
        </div>
      </div>

    </div>
  ))}
</div>


{/* SHOW MORE BUTTON (ONLY FOR ALL CATEGORY) */}
{/* Only show this section in "All" category */}
{selectedCategory === "All" && (
  <div className="flex mt-6">

    {/* If visibleCount < total → show 'Show 8 more' */}
    {visibleCount < filteredCards.length ? (
      <button
        onClick={() => setVisibleCount(prev => prev + 8)}
        className="px-5 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-700 transition"
      >
        Show 8 more
      </button>
    ) : (
      /* If all cards are shown → show 'Show fewer' */
      
      
      <button
        onClick={() => setVisibleCount(4)}
        className="px-3 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-gray-800 transition"
      >
        Show fewer
      </button>
    )}
  </div>
)}
</div>
</div>
{/* ============================
     TRENDING NOW SECTION 
=============================== */}
<div className="mt-10">

  {/* Title */}
  <div className="text-2xl sm:text-3xl font-semibold mb-1">
    Trending now
  </div>

  {/* CARD GRID */}
  <div className="mt-3 grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4 
      gap-3 sm:gap-6"
  >
    {trendingNowData.slice(0, visibleTrending).map((item) => (

      <div
        key={item.id}
        className="
          bg-white border rounded-2xl shadow-sm 
          hover:shadow-lg 
          transition-all duration-300 
          transform hover:-translate-y-1 hover:scale-[1.02]
        "
      >
        {/* -------- MOBILE VIEW -------- */}
        <div className="flex sm:hidden p-2 gap-2 items-start">
          <div className="flex-1">

            <div className="bg-white inline-block px-2 py-1 rounded-full text-[13px] font-semibold shadow mb-2">
              {item.tag}
            </div>
            <div className="flex items-center gap-2 mb-1">
              <img src={item.logo} className="w-5 h-5 rounded" />
              <span className="text-gray-700 font-medium text-xs">
                {item.university}
              </span>
            </div>

            <div className="text-[17px] font-semibold leading-snug mb-1">
              {item.title}
            </div>

            {item.degree && (
              <p className="text-blue-700 text-[10px] font-semibold">
                Build toward a degree
              </p>
            )}

            <p className="text-gray-500 text-[11px] mt-1">
              {item.type}
            </p>
          </div>

          <img src={item.image} className="w-16 h-20 object-cover rounded-xl" />
        </div>

        {/* -------- DESKTOP VIEW -------- */}
        <div className="hidden sm:block">
          <div className="relative">
            <img
              src={item.image}
              className="w-full h-44 object-cover rounded-t-2xl"
            />

            <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-xs font-semibold shadow">
              {item.tag}
            </div>
          </div>

          <div className="p-4 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-3">
              <img src={item.logo} className="w-6 h-6 rounded" />
              <span className="text-gray-700 font-medium text-sm">
                {item.university}
              </span>
            </div>

            <div className="text-[16px] font-semibold leading-snug mb-2">
              {item.title}
            </div>

            {item.degree && (
              <div className="flex items-center gap-2 mb-2">
                <img src={item.degreeLogo} className="w-4 h-4" />
                <span className="text-xs font-semibold text-blue-700">
                  Build toward a degree
                </span>
              </div>
            )}

           <p className="text-gray-500 text-sm mt-auto">{item.type}</p>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* SHOW MORE / FEWER BUTTON */}
  <div className="flex mt-6">
    {visibleTrending < trendingNowData.length ? (
      <button
        onClick={() => setVisibleTrending(prev => prev + 8)}
        className="px-5 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-700 transition"
      >
        Show 8 more
      </button>
    ) : (
      <button
        onClick={() => setVisibleTrending(8)}
        className="px-3 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-gray-800 transition"
      >
        Show fewer
      </button>
    )}
  </div>
</div>
{/* ============================
     LEADING PARTNERS SECTION
=============================== */}
<div className="mt-10">
  <div className="text-2xl sm:text-3xl font-semibold mb-6">
    Leading partners
  </div>

  <div
    className="
      grid 
      grid-cols-2 
      sm:grid-cols-3 
      lg:grid-cols-4 
      gap-10 
      items-center
      text-center
    "
  >
    {/* Illinois */}
    <div className="flex justify-center">
      <img src={illi} className="h-15 object-contain" />
    </div>

    {/* Duke */}
    <div className="flex justify-center">
      <img src={duke} className="h-15 object-contain" />
    </div>

    {/* Google */}
    <div className="flex justify-center">
      <img src={Google} className="h-15 object-contain" />
    </div>

    {/* Michigan */}
    <div className="flex justify-center">
      <img src={Michigan} className="h-15 object-contain" />
    </div>
  

  
  


    {/* IBM */}
    <div className="flex justify-center">
      <img src={IBM} className="h-15 object-contain" />
    </div>

    <div className="flex justify-center">
      <img src={penn} className="h-15 object-contain" />
    </div>


    <div className="flex justify-center">
      <img src={MS}className="h-22 object-contain" />
    </div>

    <div className="flex justify-center">
      <img src={NYIF_Logo}className="h-22 object-contain" />
    </div>
  </div>
</div>

{/* ================= FAQ SECTION ================= */}
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

<div>
  <Footer />
</div>




</div>

  );
};

export default CareerSkills;





























