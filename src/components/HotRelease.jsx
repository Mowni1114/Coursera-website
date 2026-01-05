import React from "react";
import styled from "styled-components";
import card_img1 from "../assets/card_img1.png";
import card_img2 from "../assets/card_img2.png";
import card_img3 from "../assets/card_img3.png";
import card_img4 from "../assets/card_img4.png";
import Microsoft from "../assets/Microsoft.png";
import IBM from "../assets/IBM.png";
import meta from "../assets/meta.png";
import Adobe from "../assets/Adobe.png";

/* Styled title inside card */
const Title = styled.h6`
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
`;

/* Course list data */
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
    provider: "Microsoft",
    title: "Azure Cloud Fundamentals",
    type: "Beginner Level",
    rating: 4.6,
  },
  {
    id: 3,
    image: card_img3,
    logo: meta,
    provider: "Microsoft",
    title: "Data Science with Python",
    type: "Advanced Course",
    rating: 4.5,
  },
  {
    id: 4,
    image: card_img4,
    logo: Adobe,
    provider: "Microsoft",
    title: "AI & Machine Learning",
    type: "Specialization",
    rating: 4.7,
  },
];

function HotRelease() {
  return (
    <div className="w-full py-8 ">
      {/* Gradient Container */}
      <div
        className="
          relative w-[92.9%] mx-auto rounded-[25px]
          bg-[linear-gradient(90deg,#0b5cff,#2f7df6,#6ad3b2)]
          px-6 py-6
          min-h-[400px]
        "
      >
        {/* Title */}
        <div className="absolute top-[15px] left-[20px] flex items-center gap-[4px]">
          <h5
            className="
              text-white
              text-[7px] max-lg:text-[6px] max-sm:text-[5px]
              cursor-pointer
              hover:underline hover:underline-offset-2
              leading-none
            "
            style={{
              fontWeight: "600",
            }}
          >
            Hot new releases
          </h5>

          <h6
            className="text-white text-[7px] max-lg:text-[6px] max-sm:text-[5px] leading-none  pt-1 "
            style={{ fontWeight: "600" }}
          >
            ➜
          </h6>
        </div>

        {/* Scroll Wrapper */}
        <div className="overflow-x-auto">
          <div
            className="flex gap-3 justify-center min-w-max pb-2"
            style={{ marginTop: "60px" }}
          >
            {courseList.map((course) => (
              <div
                key={course.id}
                className="
                  bg-white rounded-[14px]
                  w-[297px] flex-shrink-0
                  p-2
                  overflow-hidden
                  min-h-[322px]
                "
              >
                <img
                  src={course.image}
                  alt="course"
                  className="rounded-[10px] w-[100%] h-[160px] object-cover"
                />


                <div className="flex items-center gap-2 mt-1 px-2 ">
                  <img src={course.logo} className="w-[18px] " alt="logo" />
                  <p className="text-gray-500 text-xs  pt-2 ">
                    {course.provider}
                  </p>
                </div>

                <Title className="mt-2 px-2 ">
                  {course.title}
                </Title>

                <p className="text-gray-500 text-xs mt-1 px-2 ">
                  {course.type}
                </p>

                <div className="flex items-center gap-1 mt-2 px-2 select-none pointer-events-none">
                  <span className="text-black text-sm">★</span>
                  <span className="text-gray-600 text-xs">
                    {course.rating}
                  </span>
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