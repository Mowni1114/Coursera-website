import React, { useEffect, useState } from "react";
import HeroCarousel from "./HeroCarousel";
import MobileCarousel from "./MobileCarousel";

const ResponsiveCarousel = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop → HeroCarousel
  // Mobile + Tablet + Small laptop → MobileCarousel
  return width >= 900 ? <HeroCarousel /> : <MobileCarousel />;
};

export default ResponsiveCarousel;
