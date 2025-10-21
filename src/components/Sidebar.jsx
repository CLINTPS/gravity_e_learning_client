import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ role }) {
  const location = useLocation();

  const adminLinks = [
    { path: "/admin/dashboard", label: "Dashboard" },
    { path: "/admin/courses", label: "Manage Courses" },
    { path: "/admin/instructors", label: "Manage Instructors" },
    { path: "/admin/students", label: "Manage Students" },
    { path: "/admin/inquiries", label: "Inquiries" },
  ];

  const instructorLinks = [
    { path: "/instructor/dashboard", label: "Dashboard" },
    { path: "/instructor/my-courses", label: "My Courses" },
    { path: "/instructor/add-course", label: "Add Course" },
    { path: "/instructor/students", label: "My Students" },
  ];

  const links = role === "admin" ? adminLinks : instructorLinks;

  return (
    <aside className="w-64 bg-indigo-700 text-white h-screen p-4 fixed">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-2">
        {links.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`block px-3 py-2 rounded-md ${
                location.pathname === item.path
                  ? "bg-indigo-900"
                  : "hover:bg-indigo-600"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
