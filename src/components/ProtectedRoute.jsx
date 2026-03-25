import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");

  if (isAdminLoggedIn === "true") {
    return children;
  }

  return <Navigate to="/admin" replace />;
};

export default ProtectedRoute;