import React from "react";
import { FiChevronLeft } from "react-icons/fi";

const MobileSubMenu = ({ title, items, onBack }) => {
  return (
    <div className="submenu-container">

      <div className="submenu-header" onClick={onBack}>
        <FiChevronLeft size={22} />
        <span>{title}</span>
      </div>

      <div className="submenu-list">
        {items.map((item, index) => (
          <div key={index} className="submenu-item">
            {item}
          </div>
        ))}
      </div>

    </div>
  );
};

export default MobileSubMenu;
