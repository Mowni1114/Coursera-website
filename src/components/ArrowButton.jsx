import React from "react";

const ArrowButton = ({ direction, show, onClick, style }) => {
  if (!show) return null;

  const baseStyle = {
    position: "absolute",
    transform: "translateY(-50%)",
   
    width: "32px",
    height: "32px",
    cursor: "pointer",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    left: direction === "left" ? "-6px" : undefined,
    right: direction === "right" ? "-6px" : undefined,
    top: "58%", // default top
  };

  // ✅ merge inline style prop
  const mergedStyle = { ...baseStyle, ...style };

  return (
    <button style={mergedStyle} onClick={onClick}>
      {direction === "left" ? "❮" : "❯"}
    </button>
  );
};

export default ArrowButton;

