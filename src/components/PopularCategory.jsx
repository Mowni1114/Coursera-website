import React, { useRef, useState, useEffect } from "react";
import { trendingCourses } from "./trendingCourses";
import ArrowButton from "./ArrowButton";

const PopularCategory = () => {
  const sliderRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    checkScroll();
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 200);
  };

  return (
    <section className="relative w-full px-3 lg:container lg:mx-auto my-6 pb-24 pt-1">
      {/* SECTION TITLE */}
      <p className="text-2xl font-semibold mb-4">
        Most popular by category
      </p>

      {/* arrows – EXACTLY like Trending */}
      <div className="lg:hidden">
        <ArrowButton
          direction="left"
          show={canScrollLeft}  
          onClick={() => scroll("left")}
        />
        <ArrowButton                                                                                                                                                                                                                                                                                                                                         
          direction="right"
          show={canScrollRight}
          onClick={() => scroll("right")}
        />
      </div>

      {/* CATEGORY SLIDER – SAME AS TRENDING */} 
      <div
        ref={sliderRef}
        className="
          flex gap-4 overflow-x-auto scroll-smooth no-scrollbar
          lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible
        "
      >
        {trendingCourses.map((category, index) => (
          <div
            key={index}
            className="
              bg-[#e3eeff] rounded-xl p-3
              w-[300px] sm:w-[320px] flex-shrink-0
              lg:w-auto lg:flex-shrink
            "
          >
            {/* CATEGORY TITLE */}
            <p className="font-semibold text-base lg:text-lg mb-3">
              {category.title} →
            </p>

            {/* COURSE CARDS – SAME SIZE AS TRENDING */}
            {category.courses.map((course, i) => (
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
                  alt={course.title}
                  className="
                    w-14 h-14 rounded-lg object-cover flex-shrink-0
                  "
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <img
                      src={course.logo}
                      alt={course.org}
                      className="w-3 h-3 object-contain pointer-events-none"
                    />
                    <span className="text-[11px] sm:text-xs text-gray-600">
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
    </section>
  );
};

export default PopularCategory;
