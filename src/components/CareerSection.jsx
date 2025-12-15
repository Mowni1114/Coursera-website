import React, { useRef, useState, useEffect } from "react";
import "./CareerSection.css";
import ArrowButton from "./ArrowButton";

import Union from "../assets/Union.png";
import Certificate from "../assets/Certificate.png";
import Cap from "../assets/Cap.png";

const CareerSection = () => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;

    setShowLeft(el.scrollLeft > 5);
    setShowRight(
      el.scrollWidth - el.scrollLeft - el.clientWidth > 5
    );
  };

  useEffect(() => {
    const el = scrollRef.current;
    updateArrows();
    el.addEventListener("scroll", updateArrows);
    return () => el.removeEventListener("scroll", updateArrows);
  }, []);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -280 : 280,
      behavior: "smooth",
    });
  };

  return (
    <div className=" position-relative my-4">

      {/* MOBILE ARROWS ONLY */}
      <div className="d-md-none">
        <ArrowButton direction="left" show={showLeft} onClick={() => scroll("left")} />
        <ArrowButton direction="right" show={showRight} onClick={() => scroll("right")} />
      </div>

      <div
        ref={scrollRef}
        className="career-scroll row flex-nowrap flex-md-wrap g-3"
      >
     <div className="career-col col-md-4">


          <div className="career-card">
            <h3>Launch a new career</h3>
            <img src={Union} className="main-icon" alt="" />
          </div>
        </div>

        <div className="career-col col-md-4">

          <div className="career-card">
            <h3>Gain in-demand skills</h3>
            <img src={Certificate} className="main-icon" alt="" />
          </div>
        </div>

        <div className="career-col col-md-4">

          <div className="career-card">
            <h3>Earn a degree</h3>
            <img src={Cap} className="main-icon" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
