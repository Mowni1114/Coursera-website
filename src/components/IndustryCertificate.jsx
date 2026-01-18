import React, { useRef, useState, useEffect } from "react";
import ArrowButton from "./ArrowButton";

/* Card Images */
import ie1 from "../assets/ie1.png";
import ie2 from "../assets/ie2.png";
import ie3 from "../assets/ie3.png";
import ie4 from "../assets/ie4.png";

/* Provider Logos */
import microsoft from "../assets/microsoft.png";
import aws from "../assets/aws.png";
import nasm from "../assets/nasm.png";
import learnkarts from "../assets/learnkarts.png";

const certData = [
  {
    id: 1,
    image: ie1,
    logo: microsoft,
    provider: "Microsoft",
    title: "Microsoft Project Management: Build Job-Ready Skills",
    type: "Professional Certificate",
    rating: "4.7",
  },
  {
    id: 2,
    image: ie2,
    logo: aws,
    provider: "Amazon Web Services",
    title: "AWS Cloud Solutions Architect",
    type: "Professional Certificate",
    rating: "4.8",
    tag: "POPULAR",
  },
  {
    id: 3,
    image: ie3,
    logo: nasm,
    provider: "National Academy of Sports Medicine",
    title: "NASM Personal Fitness Trainer",
    type: "Professional Certificate",
    rating: "4.7",
  },
  {
    id: 4,
    image: ie4,
    logo: learnkarts,
    provider: "LearnKartS",
    title: "PMP Exam Preparation",
    type: "Specialization",
    rating: "4.6",
  },
];
                                                                              
const IndustryCertificate = () => {
  const scrollRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);
            
  /* detect mobile / tablet */
  useEffect(() => {
    const checkScreen = () => {
      setShowArrows(window.innerWidth < 1024); // lg breakpoint
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
                                                                                                                                                                                    
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -260, behavior: "smooth" });
  };
            
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 260, behavior: "smooth" });
  };

  return (
    <section className="w-full px-3 py-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Gradient Container */}
        <div className="rounded-[28px] bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 px-3 sm:px-6 py-6">

          {/* Header */}
          <p className="text-white text-lg md:text-xl font-semibold mb-4">
            Prepare for an industry certification exam →
          </p>
        
          {/* Cards Wrapper */}
          <div className="relative">

            {/* ⬅ Arrow */}
            <ArrowButton
              direction="left"
              show={showArrows}
              onClick={scrollLeft}
            />
                         
            {/* ➡ Arrow */}
            <ArrowButton
              direction="right"
              show={showArrows}
              onClick={scrollRight}
            />

            {/* Cards */}
            <div
              ref={scrollRef}
              className="overflow-x-auto lg:overflow-x-hidden no-scrollbar"
            >
              <div
                className="
                  flex gap-3 min-w-max pb-2
                  lg:grid lg:grid-cols-4
                  lg:gap-6 lg:min-w-0
                "
              >
                {certData.map((item) => (
                  <div
                    key={item.id}
                    className="
                      bg-white rounded-[14px] p-2
                      w-[220px] sm:w-[240px] md:w-[210px] lg:w-full
                      min-h-[320px]
                      transition-all duration-300
                      hover:-translate-y-1 hover:shadow-xl
                    "
                  >
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[160px] object-cover rounded-[10px]"
                      />

                      {item.tag && (
                        <span className="absolute bottom-2 left-2 text-[10px] font-semibold text-white bg-orange-500 px-2 py-[2px] rounded">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Provider */}
                    <div className="flex items-center gap-2 mt-2 px-2">
                      <img
                        src={item.logo}
                        alt={item.provider}
                        className="w-[18px] h-[18px] object-contain"
                      />
                      <p className="text-gray-500 text-xs">
                        {item.provider}
                      </p>
                    </div>

                    {/* Title */}
                    <p className="mt-1 px-2 text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
                      {item.title}
                    </p>

                    {/* Type */}
                    <p className="text-gray-500 px-2 text-xs mt-1">
                      {item.type}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 px-2 mt-2 text-xs text-gray-700">
                      ★ {item.rating}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryCertificate;
