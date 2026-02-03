import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import apple from "../assets/apple.png";
import gpay from "../assets/gpay.png";
import B from "../assets/B.png";
const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-2 text-gray-900">
      {/* ================= TOP LINKS ================= */}
      <div className="max-w-7xl mx-auto px-4 py-10">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 text-sm md:text-xs">


          {/* Skills */}
          <div >
            <p className="font-semibold text-xl mb-1 px-4 ">Skills</p>
            <ul style={{lineHeight:"2.3"}} className="px-4  ">
              <li className="hover:underline decoration-1 cursor-pointer">Artificial Intelligence (AI)</li>
              <li className="hover:underline cursor-pointer">Cybersecurity</li>
              <li className="hover:underline cursor-pointer">Data Analytics</li>
              <li className="hover:underline cursor-pointer">Digital Marketing</li>
              <li className="hover:underline cursor-pointer">English Speaking</li>
              <li className="hover:underline cursor-pointer">Generative AI (GenAI)</li>
              <li className="hover:underline cursor-pointer">Microsoft Excel</li>
              <li className="hover:underline cursor-pointer">Microsoft Power BI</li>
              <li className="hover:underline cursor-pointer">Project Management</li>
              <li className="hover:underline cursor-pointer">Python</li>
            </ul>
          </div>

          {/* Certificates */}
          <div>
            <p className="font-semibold text-xl mb-1 px-4">
              Certificates & Programs
            </p>
            <ul style={{lineHeight:"2.3"}} className="px-4">
              <li className="hover:underline cursor-pointer">Google Cybersecurity Certificate</li>
              <li className="hover:underline cursor-pointer">Google Data Analytics Certificate</li>
              <li className="hover:underline cursor-pointer">Google IT Support Certificate</li>
              <li className="hover:underline cursor-pointer">Google Project Management Certificate</li>
              <li className="hover:underline cursor-pointer">Google UX Design Certificate</li>
              <li className="hover:underline cursor-pointer">IBM Data Analyst Certificate</li>
              <li className="hover:underline cursor-pointer">IBM Data Science Certificate</li>
              <li className="hover:underline cursor-pointer">Machine Learning Certificate</li>
              <li className="hover:underline cursor-pointer">Microsoft Power BI Data Analyst</li>
              <li className="hover:underline cursor-pointer">UI / UX Design Certificate</li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <p className="font-semibold text-xl mb-1 px-4">
              Industries & Careers
            </p>
            <ul style={{lineHeight:"2.3"}} className="px-4">
              <li className="hover:underline cursor-pointer">Business</li>
              <li className="hover:underline cursor-pointer">Computer Science</li>
              <li className="hover:underline cursor-pointer">Data Science</li>
              <li className="hover:underline cursor-pointer">Education & Teaching</li>
              <li className="hover:underline cursor-pointer">Engineering</li>
              <li className="hover:underline cursor-pointer">Finance</li>
              <li className="hover:underline cursor-pointer">Healthcare</li>
              <li className="hover:underline cursor-pointer">Human Resources (HR)</li>
              <li className="hover:underline cursor-pointer">Information Technology (IT)</li>
              <li className="hover:underline cursor-pointer">Marketing</li>
            </ul>
          </div>

          {/* Career Resources */}
          <div>
            <p className="font-semibold text-xl mb-1 px-4">
              Career Resources
            </p>
            <ul style={{lineHeight:"2.3"}} className="px-4">
              <li className="hover:underline cursor-pointer">Career Aptitude Test</li>
              <li className="hover:underline cursor-pointer">Examples of Strengths and Weaknesses</li>
              <li className="hover:underline cursor-pointer">High-Income Skills to Learn</li>
              <li className="hover:underline cursor-pointer">How Does Cryptocurrency Work?</li>
              <li className="hover:underline cursor-pointer">How to Learn Artificial Intelligence</li>
              <li className="hover:underline cursor-pointer">Popular Cybersecurity Certifications</li>
              <li className="hover:underline cursor-pointer">Preparing for the PMP Certification</li>
              <li className="hover:underline cursor-pointer">Signs You Will Get the Job After Interview</li>
              <li className="hover:underline cursor-pointer">What Is Artificial Intelligence?</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= SECOND ROW ================= */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 text-sm">

          {/* Coursera */}
          <div>
            <p className="font-semibold text-xl mb-1 px-4">Coursera</p>
            <ul style={{lineHeight:"2.3"}} className="px-4">
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">What We Offer</li>
              <li className="hover:underline cursor-pointer">Leadership</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Catalog</li>
              <li className="hover:underline cursor-pointer">Coursera Plus</li>
             
            </ul>
          </div>

          {/* Community */}
          <div>
            <p className="font-semibold text-xl mb-1 px-4">Community</p>
            <ul style={{lineHeight:"2.3"}}  className="px-4">
              <li className="hover:underline cursor-pointer">Learners</li>
              <li className="hover:underline cursor-pointer">Partners</li>
              <li className="hover:underline cursor-pointer">Beta Testers</li>
              <li className="hover:underline cursor-pointer">Blog</li>
              <li className="hover:underline cursor-pointer">The Coursera Podcast</li>
              <li className="hover:underline cursor-pointer">Tech Blog</li>
            </ul>
          </div>

          {/* More */}
          <div>
            <p className="font-semibold text-xl mb-1 px-4 ">More</p>
            <ul style={{lineHeight:"2.3"}} className="px-4">
              <li className="hover:underline cursor-pointer">Press</li>
              <li className="hover:underline cursor-pointer">Investors</li>
              <li className="hover:underline cursor-pointer">Terms</li>
              <li className="hover:underline cursor-pointer">Privacy</li>
              <li className="hover:underline cursor-pointer">Help</li>
            
            </ul>
          </div>

          {/* App + Badge */}
          <div className="space-y-6">
            <img
              src={apple}
              className="w-40"
              alt="App Store"
            />
            <img
              src={gpay}
              className="w-40"
              alt="Google Play"
            />
            <img
              src={B}
              className="w-20 pt-4"
              alt="B Corp"
            />
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2026 Coursera Inc. All rights reserved.</p>

          <div className="flex gap-4 text-4xl color">
            <FaFacebookF size={42} className="p-2 rounded-full hover:bg-blue-100 cursor-pointer" />
            <FaLinkedinIn  size={42} className="p-2 rounded-full hover:bg-blue-100 cursor-pointer" />
            <FaTwitter  size={42} className="p-2 rounded-full hover:bg-blue-100 cursor-pointer" />
            <FaYoutube  size={42} className="p-2 rounded-full hover:bg-blue-100 cursor-pointer" />
            <FaInstagram size={42} className="p-2 rounded-full hover:bg-blue-100 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
