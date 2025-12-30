import React, { useRef, useState } from "react";
import "./HeroCarousel.css";
import ArrowButton from "./ArrowButton";
import carouselData from "./carousel";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  
 const handleScroll = () => {
  const container = scrollRef.current;
  const cardWidth = container.scrollWidth / carouselData.length; // safer
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
    <div className="scroll-wrapper pb-3">
      <div className="page-wrapper">
        
        
        <ArrowButton
          direction="left"
          show={currentIndex > 0}
          onClick={() => goToSlide(currentIndex - 1)}
        />

        {/* SLIDER */}
        <div className="scroll-container" ref={scrollRef} onScroll={handleScroll}>
          {carouselData.map((slide) => (
            <div key={slide.id} className="scroll-card">
              <div className="hero-img-overlay">
                <img src={slide.image} className="carousel-img" alt={slide.title} />
                <div className="inner-text">
                  <h2 style={{ whiteSpace: "pre-line" }}>{slide.title}</h2>

                  <p>{slide.subtitle}</p>
                  <button className="btn btn-primary join-btn">{slide.buttonText}</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <ArrowButton
          direction="right"
          show={currentIndex < carouselData.length - 1}
          onClick={() => goToSlide(currentIndex + 1)}
        />

        {/* DOTS */}
        <div className="dots-wrapper">
          {carouselData.map((_, i) => (
            <span
              key={i}
              className={`dot ${currentIndex === i ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
