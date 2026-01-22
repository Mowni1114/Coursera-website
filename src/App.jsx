import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CareerLaunch from "./pages/CareerLaunch";
import CareerSkills from "./pages/CarreerSkiils";
import CareerDegree from "./pages/CareerDegree";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career/launch" element={<CareerLaunch />} />
        <Route path="/career/skills" element={<CareerSkills />} />
        <Route path="/career/degree" element={<CareerDegree />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
