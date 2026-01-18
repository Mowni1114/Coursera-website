import React from "react";
import ResponsiveCarousel from "../components/ResponsiveCarousel";
import CareerSection from "../components/CareerSection";
import TrendingCoursesSection from "../components/TrendingCoursesSection";
import ExploreCategories from "../components/ExploreCategories";
import HotRelease from "../components/HotRelease";
import Mentors from "../components/Mentors";
import WhyCoursera from "../components/WhyCoursera";
import IndustryCertificate from "../components/IndustryCertificate";
import PopularCategory from "../components/PopularCategory";
import PromoBanners from "../components/PromoBanners";

const Home = () => {
  return (<>


    <div className="page-wrapper">
      <ResponsiveCarousel />
      <CareerSection />
      <TrendingCoursesSection />
      <div >   <ExploreCategories /></div>
      <div style={{paddingTop : "20px"}}> <HotRelease />
      <div style={{paddingTop : "20px"}}><Mentors /></div>
      <div style={{paddingTop : "20px"}}> <WhyCoursera /></div>
      <div style={{paddingTop : "20px"}}> <IndustryCertificate /></div>
      <div style={{paddingTop : "20px"}}> <PopularCategory /></div>
     <div style={{paddingTop : "20px"}}> <PromoBanners /></div>
  
    </div>
         </div>
    </>
  );
};
export default Home;
