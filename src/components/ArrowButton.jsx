import React from "react";
import "./ArrowButton.css"; 

const ArrowButton = ({ direction, show, onClick }) => {
  if (!show) return null;

  return (
    <button
      className={`arrow ${direction === "left" ? "left-arrow" : "right-arrow"}`}
      onClick={onClick}
    >
      {direction === "left" ? "❮" : "❯"}
    </button>
  );
};

export default ArrowButton;

