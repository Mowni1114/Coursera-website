import React, { useRef, useState, useEffect } from "react";
import "./CareerSection.css";

import ArrowButton from "./ArrowButton";

import Union from "../assets/Union.png";
import Certificate from "../assets/Certificate.png";
import Cap from "../assets/Cap.png";

import Google from "../assets/Google.png";
import IBM from "../assets/IBM.png";
import Microsoft from "../assets/Microsoft.png";
import Illinois from "../assets/Illinois.png";
import OpenAI from "../assets/OpenAI.png";
import Anthropic from "../assets/Anthropic.png";
import DeepL from "../assets/DeepL.png";
import Stanford from "../assets/Stanford.png";
import University from "../assets/University.png";
import Michigan from "../assets/Michigan.png";

const CareerSection = () => {
  const careerScrollRef = useRef(null);
  const logoScrollRef = useRef(null);
  const [canCareerLeft, setCanCareerLeft] = useState(false);
const [canCareerRight, setCanCareerRight] = useState(false);


  const [showCareerArrows, setShowCareerArrows] = useState(false);

  // For dynamic logo arrows
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check if career scroll needs arrows
  const checkCareerScroll = () => {
    const el = careerScrollRef.current;
    if (!el) return;
    setShowCareerArrows(el.scrollWidth > el.clientWidth);
  };

  // Scroll functions
  const scrollCareer = (direction) => {
    const el = careerScrollRef.current;
    if (!el) return;

    const scrollAmount = 300; // adjust as needed
    if (direction === "left") {
      el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  const updateCareerArrows = () => {
  const el = careerScrollRef.current;
  if (!el) return;

  setCanCareerLeft(el.scrollLeft > 0);
  setCanCareerRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
};


  const scrollLogo = (direction) => {
    const el = logoScrollRef.current;
    if (!el) return;

    const scrollAmount = 300;
    if (direction === "left") {
      el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Update which logo arrows should show
  const updateLogoArrows = () => {
    const el = logoScrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  // Effects
useEffect(() => {
  updateCareerArrows();

  const el = careerScrollRef.current;
  if (!el) return;

  el.addEventListener("scroll", updateCareerArrows);
  window.addEventListener("resize", updateCareerArrows);

  return () => {
    el.removeEventListener("scroll", updateCareerArrows);
    window.removeEventListener("resize", updateCareerArrows);
  };
}, []);


  useEffect(() => {
    updateLogoArrows();

    const el = logoScrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateLogoArrows);
    window.addEventListener("resize", updateLogoArrows);

    return () => {
      el.removeEventListener("scroll", updateLogoArrows);
      window.removeEventListener("resize", updateLogoArrows);
    };
  }, []);

  return (
    <div className="container my-2">
      {/* ===== CAREER SECTION ===== */}
      <div className="career-wrapper position-relative">
        {/* CAREER CARDS */}
        <div
          ref={careerScrollRef}
          className="row g-3 flex-nowrap overflow-auto career-scroll"
        >
          {canCareerLeft && (
  <ArrowButton
    direction="left"
    show={true}
    onClick={() => scrollCareer("left")}
    style={{ top: "40%" }}
  />
)}

{canCareerRight && (
  <ArrowButton
    direction="right"
    show={true}
    onClick={() => scrollCareer("right")}
    style={{ top: "40%" }}
  />
)}


          <div className="col-10 col-md-4">
            <div className="career-card p-3">
              <h5 className="mb-0 fw-semibold">Launch a new career</h5>
              <img src={Union} alt="" className="career-icon" />
            </div>
          </div>

          <div className="col-10 col-md-4">
            <div className="career-card p-3">
              <h5 className="mb-0 fw-semibold">Gain in-demand skills</h5>
              <img src={Certificate} alt="" className="career-icon" />
            </div>
          </div>

          <div className="col-10 col-md-4">
            <div className="career-card p-3">
              <h5 className="mb-0 fw-semibold">Earn a degree</h5>
              <img src={Cap} alt="" className="career-icon" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== LOGO SECTION ===== */}
      <div className="my-1 position-relative">
        {(canScrollLeft || canScrollRight) && (
          <div className="logo-arrows">
            {canScrollLeft && (
              <ArrowButton
                direction="left"
                show={true}
                onClick={() => scrollLogo("left")}
              />
            )}
            {canScrollRight && (
              <ArrowButton
                direction="right"
                show={true}
                onClick={() => scrollLogo("right")}
              />
            )}
          </div>
        )}

        <h4 className="fw-semibold mb-3  learn display-4">
          Learn from 350+ leading universities and companies
        </h4>

        <div ref={logoScrollRef} className="logo-scroll">
          {[
            { img: Google, name: "Google" },
            { img: IBM, name: "IBM" },
            { img: Microsoft, name: "Microsoft" },
            { img: Illinois, name: "University of Illinois" },
            { img: OpenAI, name: "OpenAI" },
            { img: Anthropic, name: "Anthropic" },
            { img: DeepL, name: "DeepLearning.AI" },
            { img: Stanford, name: "Stanford University" },
            { img: University, name: "University of Pennsylvania" },
            { img: Michigan, name: "University of Michigan" },
          ].map((item, index) => (
            <div key={index} className="logo-pill">
              <img src={item.img} alt={item.name} className="logo-img" />
              <h6>{item.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
