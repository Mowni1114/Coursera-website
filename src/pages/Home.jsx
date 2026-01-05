import React from "react";
import ResponsiveCarousel from "../components/ResponsiveCarousel";
import CareerSection from "../components/CareerSection";
import TrendingCoursesSection from "../components/TrendingCoursesSection";
import ExploreCategories from "../components/ExploreCategories";
import HotRelease from "../components/HotRelease";

const Home = () => {
  return (
    <div className="page-wrapper">
      <ResponsiveCarousel />
      <CareerSection />
      <TrendingCoursesSection />
      <div style={{paddingTop : "20px"}}>   <ExploreCategories /></div>
      <div style={{paddingTop : "20px"}}>  <HotRelease /> </div>
    </div>
  );
};

export default Home;
