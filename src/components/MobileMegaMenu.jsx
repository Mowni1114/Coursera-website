import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "./MobileMegaMenu.css";

const MobileMegaMenu = () => {
  const [currentPage, setCurrentPage] = useState("main");

  const menus = {
    roles: [
      "Data Analyst",
      "Project Manager",
      "Cyber Security Analyst",
      "Data Scientist",
      "Business Intelligence Analyst",
      "Digital Marketing Specialist",
      "UI / UX Designer",
      "Machine Learning Engineer",
    ],
    categories: [
      "Artificial Intelligence",
      "Business",
      "Data Science",
      "IT & Software",
      "Healthcare",
    ],
    skills: [
      "Python",
      "Machine Learning",
      "SQL",
      "Excel",
      "Artificial Intelligence",
      "Power BI",
    ],
    certificates: [
      "Business",
      "Computer Science",
      "Data Science",
      "Information Technology",
    ],
  };

  return (
    <div className="mobile-menu-wrapper">

      {currentPage === "main" && (
        <>
          <div
            className="d-flex justify-content-between align-items-center py-2 mobile-item"
            onClick={() => setCurrentPage("roles")}
          >
            <span>Explore roles</span>
            <FiChevronRight size={20} />
          </div>

          <div
            className="d-flex justify-content-between align-items-center py-2 mobile-item"
            onClick={() => setCurrentPage("categories")}
          >
            <span>Explore categories</span>
            <FiChevronRight size={20} />
          </div>

          <div
            className="d-flex justify-content-between align-items-center py-2 mobile-item"
            onClick={() => setCurrentPage("skills")}
          >
            <span>Trending skills</span>
            <FiChevronRight size={20} />
          </div>

          <div
            className="d-flex justify-content-between align-items-center py-2 mobile-item"
            onClick={() => setCurrentPage("certificates")}
          >
            <span>Earn a Professional Certificates</span>
            <FiChevronRight size={20} />
          </div>

          <hr />

          <p className="text-muted px-2 mb-1">Not sure where to begin?</p>
          <div className="py-2 mobile-item">Browse free courses</div>

          <hr />

          <div className="py-2 mobile-item">For Businesses</div>
          <div className="py-2 mobile-item">For Universities</div>
          <div className="py-2 mobile-item mb-5">For Governments</div>

          {/* FIXED FOOTER */}
          <div className="mobile-fixed-footer bg-white shadow">
            <button className="btn btn-primary w-100 py-3 fw-semibold rounded-3">
              Join for Free
            </button>

            <button className="btn btn-outline-primary w-100 py-3 fw-semibold rounded-3 mt-2">
              Log In
            </button>
          </div>
        </>
      )}

      {/* ---------------- SUB MENU PAGE ---------------- */}
      {currentPage !== "main" && (
        <div className="submenu-page">

          <div className="d-flex justify-content-between align-items-center px-2 py-2 submenu-header">
            <span
              onClick={() => setCurrentPage("main")}
              className="d-flex align-items-center gap-2"
            >
              <FiChevronLeft size={22} />
              Back
            </span>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          <h4 className=" submenu fw-bold px-2 mt-2">
            {currentPage === "roles" && "Explore roles"}
            {currentPage === "categories" && "Explore categories"}
            {currentPage === "skills" && "Trending skills"}
            {currentPage === "certificates" && "Earn a Professional Certificates"}
          </h4>

          <div className="px-2 mt-1">
            {menus[currentPage].map((item, index) => (
              <p key={index} className="py-2 submenu-item">
                {item}
              </p>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default MobileMegaMenu;
