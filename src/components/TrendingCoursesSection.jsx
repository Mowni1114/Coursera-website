import React, { useRef, useState, useEffect } from "react";
import { trendingCourses } from "./trendingCourses";
import ArrowButton from "./ArrowButton";

const TrendingCoursesSection = () => {
  const sliderRef = useRef(null);

  // states for arrow visibility
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    checkScroll(); // initial check
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const cardWidth = 320; // scroll per card
    sliderRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });

    // update arrows after scroll
    setTimeout(checkScroll, 200);
  };

  return (
    <div className="relative w-full px-2 lg:container lg:mx-auto my-6 pt-1">
      <p className="text-2xl font-semibold mb-4">Trending courses</p>

      {/* arrows only for mobile / tablet */}
      <div className="lg:hidden">
        <ArrowButton
          direction="left"
          show={canScrollLeft} // auto-hide
          onClick={() => scroll("left")}
        />
        <ArrowButton
          direction="right"
          show={canScrollRight} // auto-hide
          onClick={() => scroll("right")}
        />
      </div>

      <div
        ref={sliderRef}
        className="
          flex gap-4 overflow-x-auto scroll-smooth no-scrollbar
          lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible
        "
      >
        {trendingCourses.map((column, index) => (
          <div
            key={index}
            className="
              bg-[#e3eeff] rounded-xl p-3
              w-[300px] sm:w-[320px] flex-shrink-0
              lg:w-auto lg:flex-shrink
            "
          >
            <p className="font-semibold text-base lg:text-lg mb-3">
              {column.title} →
            </p>

            {column.courses.map((course, i) => (
              <div
                key={i}
                className="
                  bg-white rounded-xl p-2 flex items-start gap-3 mb-3
                  transition-all duration-300 ease-in-out
                  hover:-translate-y-2 hover:shadow-md
                "
              >
                <img
                  src={course.img}
                  className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                  alt=""
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 pointer-events-none mb-0.5">
                    <img
                      src={course.logo}
                      alt=""
                      className="w-3 h-3 object-contain inline-block translate-y-[1px]"
                    />
                    <span className="text-[11px] sm:text-xs text-gray-600 leading-tight">
                      {course.org}
                    </span>
                  </div>

                  <p className="font-semibold text-[13px] sm:text-sm lg:text-base leading-snug">
                    {course.title}
                  </p>

                  <p className="text-[11px] sm:text-xs lg:text-sm text-gray-500 mt-0.5">
                    {course.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoursesSection;
