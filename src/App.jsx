import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CareerLaunch from "./pages/CareerLaunch";
import CareerSkills from "./pages/CarreerSkiils";
import CareerDegree from "./pages/CareerDegree";
import CourseDetails from "./pages/CourseDetails";
import AdminLayout from "./components/AdminLayout";
import AdminLogin from "./components/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

function UserLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* user side */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/career/launch" element={<CareerLaunch />} />
          <Route path="/career/skills" element={<CareerSkills />} />
          <Route path="/career/degree" element={<CareerDegree />} />
          <Route path="/course/:id" element={<CourseDetails />} />
        </Route>

        {/* admin login first */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* protected admin dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        />

        {/* old login route optional redirect */}
        <Route path="/admin/login" element={<Navigate to="/admin" replace />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;