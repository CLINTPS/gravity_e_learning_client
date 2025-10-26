import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LearnNavbar from "./components/LearnNavbar";
import Footer from "./components/Footer";
import Landing from "./pages/index/LandingPage";
import Courses from "./pages/course/Courses";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/user/Dashboard";
import Inquiries from "./pages/course/Inquiries";
import ProtectedRoute from "./components/ProtectedRoute";

import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";

import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageCourses from "./pages/admin/ManageCourses";
import ManageStudents from "./pages/admin/ManageStudents";
import ManageInstructors from "./pages/admin/ManageInstructors";
import ManageInquiries from "./pages/admin/ManageInquiries";
import LearnLanding from "./pages/index/LearnLanding";

function LayoutWrapper() {
  const location = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isLearnLandingRoute = location.pathname === "/larnLanding";

  let ActiveNavbar = Navbar;

  if (isLearnLandingRoute) {
    ActiveNavbar = LearnNavbar;
  }

  const handleOpenLoginModal = (e) => {
    e.preventDefault();
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleOpenSignupModal = (e) => {
    e.preventDefault();
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && (
        <ActiveNavbar
          onLoginClick={handleOpenLoginModal}
          onSignupClick={handleOpenSignupModal}
        />
      )}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Inquiries />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/larnLanding" element={<LearnLanding />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["student", "instructor"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="courses" element={<ManageCourses />} />
            <Route path="students" element={<ManageStudents />} />
            <Route path="instructors" element={<ManageInstructors />} />
            <Route path="inquiries" element={<ManageInquiries />} />
            <Route index element={<AdminDashboard />} />
          </Route>
        </Routes>
      </main>
      <Footer />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  );
}
