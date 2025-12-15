import React, { useRef, useState, useEffect } from "react";
import "./HeroCarousel.css";
import ArrowButton from "./ArrowButton";


import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const images = [carousel1, carousel2, carousel3];

  // Update index when user scrolls manually
  const handleScroll = () => {
    const container = scrollRef.current;
    const cardWidth = container.offsetWidth;
    const index = Math.round(container.scrollLeft / cardWidth);
    setCurrentIndex(index);
  };

  // Scroll to slide when clicking dots or arrows
  const goToSlide = (index) => {
    const container = scrollRef.current;
    const cardWidth = container.offsetWidth;

    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  return (
    <>
      <div className="scroll-wrapper pb-3">
      <div className="page-wrapper">


        {/* LEFT ARROW */}
       <ArrowButton
       direction="left"
       show={currentIndex > 0}
       onClick={() => goToSlide(currentIndex - 1)}
       />
        {/* SLIDER */}
        <div
          className="scroll-container"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {/* CARD 1 */}
          <div className="scroll-card ">
            <div className="hero-img-overlay">
              <img src={carousel1} className="carousel-img" alt="Slide 1" />

              <div className="inner-text">
                <h2>
                  Start, switch, or advance <br /> your career
                </h2>
                <p>Grow with 10,000+ courses</p>
                <button className="btn btn-primary join-btn">
                  Join for Free →
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="scroll-card">
            <div className="hero-img-overlay">
              <img src={carousel2} className="carousel-img" alt="Slide 2" />

              <div className="inner-text">
                <h2>
                  Boost Your Career with AI <br /> Skills
                </h2>
                <p>Explore AI and machine learning programs.</p>
                <button className="btn btn-primary join-btn">
                  Start your AI Course →
                </button>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="scroll-card">
            <div className="hero-img-overlay">
              <img src={carousel3} className="carousel-img" alt="Slide 3" />

              <div className="inner-text">
                <h2>Drive your business <br />forward and empower<br />your talent</h2>
                <p>Train your team with industry experts.</p>
                <button className="btn btn-primary join-btn">
                  Try Coursera for Business →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT ARROW */}
       <ArrowButton
        direction="right"
        show={currentIndex < images.length - 1}
         onClick={() => goToSlide(currentIndex + 1)}
        />


        {/* DOTS */}
        <div className="dots-wrapper">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${currentIndex === i ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroCarousel;
