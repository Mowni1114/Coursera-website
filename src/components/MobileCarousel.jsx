import React, { useRef, useState } from "react";
import "./MobileCarousel.css";

import mobile1 from "../assets/mobile1.png";
import mobile2 from "../assets/mobile2.png";
import mobile3 from "../assets/mobile3.png";

const MobileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const images = [mobile1, mobile2, mobile3];

  const handleScroll = () => {
    const container = scrollRef.current;
    const cardWidth = container.offsetWidth;
    const index = Math.round(container.scrollLeft / cardWidth);
    setCurrentIndex(index);
  };

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
    <div className="m-scroll-wrapper">

      {/* LEFT ARROW */}
      {currentIndex > 0 && (
        <button
          className="m-arrow m-left-arrow"
          onClick={() => goToSlide(currentIndex - 1)}
        >
          ❮
        </button>
      )}

      {/* SLIDER */}
      <div
        className="m-scroll-container"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {/* CARD 1 */}
        <div className="m-scroll-card firstimage">
          <img src={mobile1} className="m-carousel-img" alt="Slide 1" />

          <div className="m-inner-text">
            <h2>Start, switch, or advance your career</h2>
            <button className="btn btn-primary m-join-btn">
              Join for Free 
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="m-scroll-card">
          <img src={mobile2} className="m-carousel-img" alt="Slide 2" />

          <div className="m-inner-text">
            <h2>Boost Your Career with AI Skills</h2>
  
            <button className="btn btn-primary m-join-btn">
              Start your AI Course 
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="m-scroll-card">
          <img src={mobile3} className="m-carousel-img" alt="Slide 3" />

          <div className="m-inner-text">
            <h2>Drive your business <br />forward and empower<br />your talent</h2>
        
            <button className="btn btn-primary m-join-btn">
              Try Coursera for Business 
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT ARROW */}
      {currentIndex < images.length - 1 && (
        <button
          className="m-arrow m-right-arrow"
          onClick={() => goToSlide(currentIndex + 1)}
        >
          ❯
        </button>
      )}

      {/* DOTS */}
      <div className="m-dots-wrapper">
        {images.map((_, i) => (
          <span
            key={i}
            className={`m-dot ${currentIndex === i ? "active" : ""}`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MobileCarousel;
