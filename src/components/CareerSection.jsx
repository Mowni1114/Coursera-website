import React, { useRef } from "react";
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

  const scrollCareer = (dir) => {
    careerScrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  const scrollLogo = (dir) => {
    logoScrollRef.current.scrollBy({
      left: dir === "left" ? -220 : 220, // one pill scroll
      behavior: "smooth",
    });
  };

  return (
    <div className="container my-2">




      {/* ===== CAREER CARDS ===== */}
      <div
        ref={careerScrollRef}
        className="row g-3 flex-nowrap flex-md-wrap overflow-auto career-scroll">
      
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

      
      
      
      

      {/* ===== LOGO PILLS ===== */}
      <div className="my-3 position-relative">

        {/* ARROWS */}
        <div className="d-none d-md-flex justify-content-between position-absolute w-100 top-50 translate-middle-y px-2">
          <ArrowButton direction="left" onClick={() => scrollLogo("left")} />
          <ArrowButton direction="right" onClick={() => scrollLogo("right")} />
        </div>

        <h4 className="fw-semibold mb-3">
          Learn from 350+ leading universities and companies
        </h4>

        <div
          ref={logoScrollRef}
          className="d-flex gap-3 align-items-center overflow-auto logo-scroll"
        >
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
            <div
              key={index}
              className="logo-pill d-flex align-items-center gap-2 px-2 py-2"
            >
              <img src={item.img} alt={item.name} className="logo-img" />
              <span className="fw-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
