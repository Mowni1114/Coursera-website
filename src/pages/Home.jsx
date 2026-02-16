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
import Footer from "../components/Footer";

const Home = () => {
  return (<>


    <div className="page-wrapper">
      <ResponsiveCarousel />
      <CareerSection />
      <TrendingCoursesSection />
      <ExploreCategories />
      <HotRelease />
      <Mentors />
      <WhyCoursera />
      <IndustryCertificate />
      <PopularCategory />
      <PromoBanners />
      <Footer />
   
         </div>
    </>
  );
};
export default Home;
