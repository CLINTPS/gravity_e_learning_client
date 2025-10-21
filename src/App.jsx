import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/index/LandingPage";
import Courses from "./pages/course/Courses";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/user/Dashboard";
import Inquiries from "./pages/course/Inquiries";
import ProtectedRoute from "./components/ProtectedRoute";

import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageCourses from "./pages/admin/ManageCourses";
import ManageStudents from "./pages/admin/ManageStudents";
import ManageInstructors from "./pages/admin/ManageInstructors";
import ManageInquiries from "./pages/admin/ManageInquiries";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Inquiries />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Student/Instructor Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedRoles={["student", "instructor"]}>
                  <Landing />
                </ProtectedRoute>
              }
            />

            {/* Admin Protected Routes with Sidebar */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              {/* <Route index element={<AdminDashboard />} /> */}
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="courses" element={<ManageCourses />} />
              <Route path="students" element={<ManageStudents />} />
              <Route path="instructors" element={<ManageInstructors />} />
              <Route path="inquiries" element={<ManageInquiries />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
