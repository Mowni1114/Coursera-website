import React from "react";
import ResponsiveCarousel from "../components/ResponsiveCarousel";
import CareerSection from "../components/CareerSection";

const Home = () => {
  return (
    <div className="page-wrapper">
      <ResponsiveCarousel />
      <CareerSection />
    </div>
  );
};

export default Home;
