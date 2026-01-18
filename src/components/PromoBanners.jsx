import React from "react";
import carouselData from "./carousel";

import mobile1 from "../assets/mobile1.png";
import mobile2 from "../assets/mobile2.png";

// testimonials images
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

const PromoBanners = () => {
  const promoSlides = [
    {
      id: 1,
      imageMobile: mobile1,
      imageDesktop: carouselData[0].image,
      title: carouselData[0].title,
      subtitle: carouselData[0].subtitle,
      button: carouselData[0].buttonText,
    },
    {
      id: 2,
      imageMobile: mobile2,
      imageDesktop: carouselData[1].image,
      title: carouselData[1].title,
      subtitle: carouselData[1].subtitle,
      button: carouselData[1].buttonText,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah W.",
      image: p1,
      text:
        "Coursera's reputation for high-quality content, paired with its flexible structure, made it possible for me to dive into data analytics while managing family, health, and everyday life.",
    },
    {
      id: 2,
      name: "Noeris B.",
      image: p2,
      text:
        "Coursera rebuilt my confidence and showed me I could dream bigger. It wasn't just about gaining knowledge—it was about believing in my potential again.",
    },
    {
      id: 3,
      name: "Abdullahi M.",
      image: p3,
      text:
        "I now feel more prepared to take on leadership roles and have already started mentoring some of my colleagues.",
    },
    {
      id: 4,
      name: "Anas A.",
      image: p4,
      text:
        "Learning with Coursera has expanded my professional expertise by giving me access to cutting-edge research, practical tools, and global perspectives.",
    },
  ];

  return (
    <section className="w-full px-3 mt-5">
      {/* ================= PROMO BANNERS ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
        {promoSlides.map((slide) => (
          <div
            key={slide.id}
            className="relative rounded-[26px] overflow-hidden h-[320px] lg:min-h-[280px]"
          >
            {/* IMAGE */}
            <picture>
              <source media="(min-width:1024px)" srcSet={slide.imageDesktop} />
              <img
                src={slide.imageMobile}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </picture>

            {/* CONTENT */}
            <div className="relative z-10 p-4 sm:p-6 lg:p-10 text-black max-w-[85%] lg:max-w-[75%]">
              <p className="text-lg sm:text-xl lg:text-3xl font-semibold leading-snug">
                {slide.title}
              </p>

              <p className="mt-2 text-sm lg:text-base text-gray-800">
                {slide.subtitle}
              </p>

              <button className="btn btn-primary mt-3 text-sm lg:mt-4">
                {slide.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= WHY PEOPLE CHOOSE COURSERA ================= */}
      <div className="max-w-7xl mx-auto">
        <span className="text-2xl font-semibold p-6">
          Why people choose Coursera
        </span>

        <div className="grid grid-cols-1  mt-3 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl p-3 flex flex-col"
            >
              {/* PROFILE */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <p className="font-medium text-gray-900">
                  {item.name}
                </p>
              </div>

              {/* TEXT */}
              <p className="text-gray-700 text-sm leading-relaxed">
                “{item.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
