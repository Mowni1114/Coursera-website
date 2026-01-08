import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import ArrowButton from "./ArrowButton";

import card_img1 from "../assets/card_img1.png";
import card_img2 from "../assets/card_img2.png";
import card_img3 from "../assets/card_img3.png";
import card_img4 from "../assets/card_img4.png";

import Microsoft from "../assets/Microsoft.png";
import IBM from "../assets/IBM.png";
import meta from "../assets/meta.png";
import Adobe from "../assets/Adobe.png";

/* Styled title */
const Title = styled.h6`
  font-weight: 700;
  color: #0f172a;
`;

const courseList = [
  {
    id: 1,
    image: card_img1,
    logo: Microsoft,
    provider: "Microsoft",
    title: "Microsoft Python Development",
    type: "Professional Certificate",
    rating: 4.4,
  },
  {
    id: 2,
    image: card_img2,
    logo: IBM,
    provider: "IBM",
    title: "IBM RAG and Agentic AI",
    type: "Professional Certificate",
    rating: 4.6,
  },
  {
    id: 3,
    image: card_img3,
    logo: meta,
    provider: "Meta",
    title: "Meta Full Stack Developer: Front-End & Back-End",
    type: "Specialization",
    rating: 4.7,
  },
  {
    id: 4,
    image: card_img4,
    logo: Adobe,
    provider: "Adobe",
    title: "Adobe Marketing Specialist",
    type: "Professional Certificate",
    rating: 4.7,
  },
];

function HotRelease() {
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
    <div className="w-full py-8">
      <div
        className="
          relative max-w-7xl mx-auto
          rounded-[25px]
          bg-[linear-gradient(90deg,#0b5cff,#2f7df6,#6ad3b2)]
          px-4 sm:px-6 py-6
          min-h-[300px]
        "
      >
        {/* Title */}
        <div className="absolute top-[15px] left-[20px] flex items-center gap-1">
          <h5 className="text-white font-semibold text-sm hover:underline">
            Hot new releases
          </h5>
          <span className="text-white">➜</span>
        </div>

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
              flex gap-3 min-w-max pb-3
              lg:grid lg:grid-cols-4
              lg:gap-6 lg:min-w-0
            "
            style={{ marginTop: "60px" }}
          >
            {courseList.map((course) => (
              <div
                key={course.id}
                className="
                  bg-white rounded-[14px] p-2
                  w-[220px] sm:w-[240px] md:w-[210px] lg:w-full
                  min-h-[260px] md:min-h-[300px] lg:min-h-[322px]
                  transition hover:-translate-y-1 hover:shadow-xl
                "
              >
                <img
                  src={course.image}
                  alt="course"
                  className="w-full h-[160px] object-cover rounded-[10px]"
                />

                <div className="flex items-center gap-2 mt-2 px-2">
                  <img src={course.logo} className="w-[16px]" alt="logo" />
                  <p className="text-gray-500 text-xs">{course.provider}</p>
                </div>

                <Title className="mt-1 px-2 text-sm">
                  {course.title}
                </Title>

                <p className="text-gray-500 px-2 text-xs">{course.type}</p>

                <div className="flex items-center gap-1 px-2 mt-2 text-xs">
                  ★ {course.rating}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotRelease;
