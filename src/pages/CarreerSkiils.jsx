import { useState } from "react";
import React from "react";
import ExploreCategories from "../components/ExploreCategories";
import { riskManagementData, mostPopularData,trendingNowData } from "../data/careerskill";



const CareerSkills = () => {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);
  
  const filteredCards =
  selectedCategory === "All"
    ? mostPopularData
    : mostPopularData.filter(
        (item) => item.category === selectedCategory
      );

const [visibleTrending, setVisibleTrending] = useState(8);
  return (
   
    <div className="mx-auto px-5 sm:px-6 md:px-10 py-6 sm:py-8">
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









</div>

  );
};

export default CareerSkills;
