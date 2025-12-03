import React, { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import "./MobileMegaMenu.css";

const MobileMegaMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <div className="mobile-menu-list">

      {/* Explore Roles */}
      <div className="mobile-menu-item" onClick={() => toggleMenu("roles")}>
        <span>Explore roles</span>
        {openMenu === "roles" ? <FiChevronDown size={20}/> : <FiChevronRight size={20}/>}
      </div>

      {openMenu === "roles" && (
        <div className="submenu">
          <p>Data Analyst</p>
          <p>Project Manager</p>
          <p>Cyber Security Analyst</p>
          <p>Data Scientist</p>
          <p>Business Intelligence Analyst</p>
          <p>Digital Marketing Specialist</p>
          <p>UI / UX Designer</p>
          <p>Machine Learning Engineer</p>
        </div>
      )}

      {/* Explore Categories */}
      <div className="mobile-menu-item" onClick={() => toggleMenu("categories")}>
        <span>Explore categories</span>
        {openMenu === "categories" ? <FiChevronDown size={20}/> : <FiChevronRight size={20}/>}
      </div>

      {openMenu === "categories" && (
        <div className="submenu">
          <p>Artificial Intelligence</p>
          <p>Business</p>
          <p>Data Science</p>
          <p>IT & Software</p>
          <p>Healthcare</p>
        </div>
      )}

      {/* Trending skills */}
      <div className="mobile-menu-item" onClick={() => toggleMenu("skills")}>
        <span>Trending skills</span>
        {openMenu === "skills" ? <FiChevronDown size={20}/> : <FiChevronRight size={20}/>}
      </div>

      {openMenu === "skills" && (
        <div className="submenu">
          <p>Python</p>
          <p>Machine Learning</p>
          <p>SQL</p>
          <p>Excel</p>
        </div>
      )}


      {/* Trending skills */}
      <div className="mobile-menu-item" onClick={() => toggleMenu("certificates")}>
        <span>Earn a Professional Certificates</span>
        {openMenu === "certificates" ? <FiChevronDown size={20}/> : <FiChevronRight size={20}/>}
      </div>

      {openMenu === "certificates" && (
        <div className="submenu">
          <p>Business</p>
          <p>Computer Science</p>
          <p>Data Science</p>
          <p>Information Technology</p>
        </div>
      )}

      <hr />

      {/* No dropdown items */}
      <div className="mobile-menu-item no-arrow"><span>Browse free courses</span></div>
      <div className="mobile-menu-item no-arrow"><span>For Businesses</span></div>
      <div className="mobile-menu-item no-arrow"><span>For Universities</span></div>

    </div>
  );
};

export default MobileMegaMenu;
