import React from "react";
import "./MegaMenu.css";

const MegaMenu = () => {
  return (
    <div className="mega-wrapper dropdown position-static">

      {/* Explore Trigger Button */}
      <div
        className="explore-trigger dropdown-toggle"
        data-bs-toggle="dropdown"
      >
        Explore
      </div>

      {/* Mega Menu */}
      <div className="dropdown-menu mega-menu shadow w-100">
        <div className="container">
          <div className="row">

            {/* Column 1 */}
            <div className="col-md-3">
              <h6 className="fw-bold mb-2">Explore roles</h6>
              <a className="dropdown-item">Data Analyst</a>
              <a className="dropdown-item">Project Manager</a>
              <a className="dropdown-item">Cyber Security</a>
              <a className="dropdown-item">Data Scientist</a>
              <a className="dropdown-item">Digital Marketing</a>
              <a className="dropdown-item">UI / UX Designer</a>
              <a className="dropdown-item">View all</a>
            </div>

            {/* Column 2 */}
            <div className="col-md-3">
              <h6 className="fw-bold mb-2">Explore categories</h6>
              <a className="dropdown-item">Artificial Intelligence</a>
              <a className="dropdown-item">Business</a>
              <a className="dropdown-item">Data Science</a>
              <a className="dropdown-item">IT & Software</a>
              <a className="dropdown-item">Computer Science</a>
              <a className="dropdown-item">Healthcare</a>
              <a className="dropdown-item">View all</a>
            </div>

            {/* Column 3 */}
            <div className="col-md-3">
              <h6 className="fw-bold mb-2">Professional Certificates</h6>
              <a className="dropdown-item">Business</a>
              <a className="dropdown-item">Data Science</a>
              <a className="dropdown-item">Computer Science</a>
              <a className="dropdown-item">View all</a>

              <h6 className="fw-bold mt-3 mb-2">Earn a Degree</h6>
              <a className="dropdown-item">Bachelor’s Degrees</a>
              <a className="dropdown-item">Master’s Degrees</a>
              <a className="dropdown-item">Postgraduate Programs</a>
            </div>

            {/* Column 4 */}
            <div className="col-md-3">
              <h6 className="fw-bold mb-2">Trending Skills</h6>
              <a className="dropdown-item">Python</a>
              <a className="dropdown-item">Machine Learning</a>
              <a className="dropdown-item">SQL</a>
              <a className="dropdown-item">Excel</a>
              <a className="dropdown-item">AI</a>
              <a className="dropdown-item">Power BI</a>

              <h6 className="fw-bold mt-3 mb-2">Certification Exams</h6>
              <a className="dropdown-item">View all</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
