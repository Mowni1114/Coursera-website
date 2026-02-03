import React, { useState } from "react";
import carouselData from "./carousel";

import mobile1 from "../assets/mobile1.png";
import mobile2 from "../assets/mobile2.png";

// testimonials images
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

import { ChevronDown, ChevronUp } from "lucide-react";

const PromoBanners = () => {
  const [activeFaq, setActiveFaq] = useState(null);

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
        "Coursera rebuilt my confidence and showed me I could dream bigger.",
    },
    {
      id: 3,
      name: "Abdullahi M.",
      image: p3,
      text:
        "I now feel more prepared to take on leadership roles and have already started mentoring colleagues.",
    },
    {
      id: 4,
      name: "Anas A.",
      image: p4,
      text:
        "Learning with Coursera has expanded my professional expertise with global perspectives.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question:
        "Is Coursera accredited, and are Coursera certificates recognized by employers?",
      answer:
       " Coursera partners with accredited universities and leading companies such as Google and IBM to offer courses, Specializations, and Professional Certificates. Employers widely recognize these credentials because they are issued directly by trusted institutions. Learners can build job-ready skills with the Google Data Analytics Professional Certificate, the IBM Data Analyst Professional Certificate, or start with accredited university content in high-demand fields like data analytics and cybersecurity"
    },
    {
      id: 2,
      question: "Is a Coursera certificate worth it?",
      answer:
        "For many learners, a Coursera certificate is worth it because it provides job-ready skills and a verifiable credential from respected universities and companies. Learners commonly transition into roles in project management, UX design, and data science through programs such as the Google Project Management Professional Certificate, the Google UX Design Professional Certificate, and the IBM Data Science Professional Certificate. Others enter technical fields by starting with beginner-friendly Python or generative AI courses.",
    },
    {
      id: 3,
      question: "What are most popular courses on Coursera?",
      answer:
        "Coursera’s best-known courses and certificates are offered by leading universities and companies in the fields of AI, data science, cybersecurity, and software engineering. Many learners begin with the Machine Learning Specialization or the Deep Learning Specialization. In contrast, others opt for job-aligned pathways, such as the Google Cybersecurity Professional Certificate or the AI Engineer Professional Certificate. You can also browse broad areas, such as artificial intelligence, SQL, or web development, to find highly rated options.",
    },
    {
      id: 4,
      question: "Does Coursera offer free online courses?",
      answer:
        "Yes. Coursera offers thousands of courses that you can preview for free, including access to the first module, allowing you to explore the content before committing. Learners who want full course access or a certificate can join with a 7-day free trial through Coursera Plus or a subscription-based program. Many learners begin with introductory topics, such as Python, digital marketing, or English speaking, and later move into job-focused programs, like the Google IT Support Professional Certificate, when they’re ready to complete a credential .",
    },
    {
      id: 5,
      question: "How can Coursera help me get a job or advance my carrer?",
      answer:
        "Coursera offers job-aligned Professional Certificates and Specializations designed in collaboration with employers and universities to help learners qualify for roles in fields such as cybersecurity, UX, data analytics, AI, and business. Programs such as the Google Cybersecurity Professional Certificate, the Data Analysis with Python Specialization, and the UI/UX Design Specialization help learners build employer-relevant skills. At the same time, many career changers explore areas such as product management or business analysis as pathways into business and technology roles. Coursera also offers online bachelor’s and master’s degrees from accredited universities, which can support long-term career advancement in business, computer science, data, and other high-growth fields. Learners exploring formal education pathways can browse online degrees or view available bachelor’s programs to find a degree aligned to their career goals.",
    },
  ];

  return (
    <section className="w-full px-3 ">
      {/* ================= PROMO BANNERS ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-4   ">
        {promoSlides.map((slide) => (
          <div
            key={slide.id}
            className="relative rounded-[26px] overflow-hidden h-[320px]"
          >
            <picture>
              <source media="(min-width:1024px)" srcSet={slide.imageDesktop} />
              <img
                src={slide.imageMobile}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover  "
              />
            </picture>

          <div className="absolute z-10 left-8 top-8 text-black max-w-[75%]">
  <p className="text-xl lg:text-3xl font-semibold whitespace-pre-line">
    {slide.title}
  </p>
  <p className="mt-2 text-sm text-gray-800 hidden md:block">
    {slide.subtitle}
  </p>
  <button className="btn btn-primary mt-4">
    {slide.button}
  </button>
</div>

          </div>
        ))}
      </div>

      {/* ================= TESTIMONIALS ================= */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mt-2">
          Why people choose Coursera
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={item.image}
                  className="w-12 h-12 rounded-full"
                />
                <p className="font-medium">{item.name}</p>
              </div>
              <p className="text-sm text-gray-700">
                “{item.text}”
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FAQ SECTION ================= */}
      <div className="max-w-7xl p-3">
  <span className="text-2xl font-semibold mb-6 pointer-events-none">
    Frequently asked questions
  </span>

  <div className="space-y-3">
    {faqData.map((faq) => (
      <div
        key={faq.id}
        className="border-bottom bg-gray-50"
      >
        <button
          onClick={() =>
            setActiveFaq(activeFaq === faq.id ? null : faq.id)
          }
          className="w-full flex items-center gap-3 px-4 py-3 font-semibold rounded-lg hover:bg-blue-100"
        >
          {activeFaq === faq.id ? (
            <ChevronUp size={20} />   
          ) : (
            <ChevronDown size={20} /> 
          )}

          <span className="text-left bg-transparent pointer-events-none">
            {faq.question}
          </span>
        </button>

        {activeFaq === faq.id && (
          <div className="px-3 pb-4 text-sm font-medium text-gray-700">
            {faq.answer}
          </div>
        )}
      </div>
    ))}
  </div>
</div>


 <div className="mt-6">
  <p className="text-base px-3">
    ¹ Median salary and job opening data are sourced from Lightcast™ Job Postings Report <br /> 
    Content Creator, Machine Learning Engineer and Salesforce Development Representative<br /> (1/1/2024 - 31/12/2024)<br />
    All other job roles (1/1/2025 - 1/1/2026)
  </p>
</div>

    </section>
  );
};

export default PromoBanners;
