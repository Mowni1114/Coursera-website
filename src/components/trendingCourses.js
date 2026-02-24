import cp1 from "../assets/cp1.png";
import cp2 from "../assets/cp2.png";
import cp3 from "../assets/cp3.png";
import cp4 from "../assets/cp4.png";
import cp5 from "../assets/cp5.png";
import cp6 from "../assets/cp6.png";
import cp7 from "../assets/cp7.png";
import cp8 from "../assets/cp8.png";
import cp9 from "../assets/cp9.png";

import Google from "../assets/Google.png";
import IBM from "../assets/IBM.png";
import Michigan from "../assets/Michigan.png";
import Microsoft from "../assets/Microsoft.png";
import Meta from "../assets/meta.png";
import Intuit from "../assets/Intuit.png";
import University from "../assets/University.png"; // example
import GoogleLogo from "../assets/Google.png";
import IBMLogo from "../assets/IBM.png";

export const trendingCourses = [
  {
    title: "Most popular",
    courses: [
      { 
        id:1,
        img: cp1,
        logo: Google,
        org: "Google",
        title: "Crash Course on Python",
        meta: "Course · ⭐ 4.8",
      },
      {
        id:2,
        img: cp2,
        logo: IBM,
        org: "IBM",
        title: "Python for Data Science, AI & Development",
        meta: "Course · ⭐ 4.6",
      },
      {
        id:3,
        img: cp3,
        logo: Michigan,
        org: "University of Michigan",
        title: "Python for Everybody",
        meta: "Specialization · ⭐ 4.8",
      },
    ],
  },
  {
    title: "Weekly spotlight",
    courses: [
      {
        id:4,
        img: cp4,
        logo: Microsoft,
        org: "Microsoft",
        title: "Microsoft Power BI Data Analyst",
        meta: "Professional Certificate · ⭐ 4.6",
      },
      {
        id:5,
        img: cp5,
        logo: Meta,
        org: "Meta",
        title: "Meta Social Media Marketing",
        meta: "Professional Certificate · ⭐ 4.8",
      },
      {
        id:6,
        img: cp6,
        logo: Intuit,
        org: "Intuit",
        title: "Intuit Academy Bookkeeping",
        meta: "Professional Certificate · ⭐ 4.6",
      },
    ],
  },
  {
    title: "In-demand AI skills",
    courses: [
      {
        id:7,
        img: cp7,
        logo: IBMLogo,
        org: "IBM",
        title: "IBM Generative AI Engineering",
        meta: "Professional Certificate · ⭐ 4.6",
      },
      {
        id:8,
        img: cp8,
        logo: GoogleLogo,
        org: "Google",
        title: "Google AI Essentials",
        meta: "Specialization · ⭐ 4.8",
      },
      {
        id:9,
        img: cp9,
        logo: University,
        org: "University of Pennsylvania",
        title: "AI for Business",
        meta: "Specialization · ⭐ 4.7",
      },
    ],
  },
];
