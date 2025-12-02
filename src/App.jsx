// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import "./App.css"; // optional global styles

// Placeholder Home page
const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Coursera Clone</h1>
      <p>Start exploring courses!</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
   
    </div>
  );
}

export default App;
