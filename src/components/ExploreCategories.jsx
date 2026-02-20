import { useEffect, useState, useRef } from "react";
import ArrowButton from "./ArrowButton"; // reuse your arrow
import {
  Briefcase,
  Sparkles,
  TrendingUp,
  Code,
  Monitor,
  Rocket,
  HeartPulse,
  Globe,
  Users,
  Palette,
  FlaskConical,
  Calculator,
} from "lucide-react";

const categories = [
  { name: "Business", icon: Briefcase },
  { name: "Artificial Intelligence", icon: Sparkles },
  { name: "Data Science", icon: TrendingUp },
  { name: "Computer Science", icon: Code },
  { name: "Information Technology", icon: Monitor },
  { name: "Personal Development", icon: Rocket },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Language Learning", icon: Globe },
  { name: "Social Sciences", icon: Users },
  { name: "Arts and Humanities", icon: Palette },
  { name: "Physical Science and Engineering", icon: FlaskConical },
  { name: "Math and Logic", icon: Calculator },
];

const ExploreCategories = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // check window width
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // check scroll position to toggle arrows
  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const updateArrows = () => {
      setCanScrollLeft(scrollEl.scrollLeft > 0);
      setCanScrollRight(scrollEl.scrollLeft + scrollEl.clientWidth < scrollEl.scrollWidth);
    };

    // initial check
    updateArrows();

    scrollEl.addEventListener("scroll", updateArrows);
    return () => scrollEl.removeEventListener("scroll", updateArrows);
  }, [isDesktop]);

  // scroll function
  const handleScroll = (direction) => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    scrollEl.scrollBy({
      left: direction === "left" ? -220 : 220,
      behavior: "smooth",
    });

    // update arrows after scroll
    setTimeout(() => {
      setCanScrollLeft(scrollEl.scrollLeft > 0);
      setCanScrollRight(scrollEl.scrollLeft + scrollEl.clientWidth < scrollEl.scrollWidth);
    }, 200);
  };
  <style>
  {`
    .no-scrollbar {
      -ms-overflow-style: none; 
      scrollbar-width: none;
    }
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `}
</style>

  return (
    <div style={{ width: "100%", paddingTop: "22px" }}>
      <div
        style={{
          maxWidth: "1200px",
          padding: "0 6px",
          boxSizing: "border-box",
          position: "relative", // needed for arrows
        }}
      >
        <p style={{ fontSize: "27px", fontWeight: 600, marginBottom: "16px" }}>
          Explore categories
        </p>

        {/* LEFT ARROW - only mobile/tablet */}
        <ArrowButton
          direction="left"
          show={!isDesktop && canScrollLeft} // auto-hide
          onClick={() => handleScroll("left")}
          style={{ top: "75%" }}
        />

        {/* RIGHT ARROW - only mobile/tablet */}
        <ArrowButton
          direction="right"
          show={!isDesktop && canScrollRight} // auto-hide
          onClick={() => handleScroll("right")}
          style={{ top: "75%" }}
        />

        {/* scrollable container */}
        <div
          ref={scrollRef}
          className={!isDesktop ? "no-scrollbar" : ""}
          style={{
            display: "flex",
            gap: "12px",
            overflowX: isDesktop ? "visible" : "auto",
            flexWrap: isDesktop ? "wrap" : "nowrap",
          }}
        >
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
            <button
  key={index}
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    height: "40px",
    padding: "0 20px",
    backgroundColor: "#eef4ff",
    borderRadius: "9999px", // ROUND DESIGN inline
    fontSize: "14px",
    fontWeight: "500",
    whiteSpace: "nowrap",
    border: "none",
    cursor: "pointer",
    flexShrink: 0,
  }}
  className="
    transition-all duration-300 ease-out
    hover:-translate-y-0.5
    hover:scale-[1.03]
    hover:shadow-md
    active:scale-[0.97]
  "
>
  <Icon
    size={16}
    className="transition-transform duration-300 hover:scale-110"
  />
  {cat.name}
</button>

            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreCategories;
