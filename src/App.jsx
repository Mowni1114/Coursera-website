import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      {/* FULL WIDTH NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <Home />
    </>
  );
}
export default App;

