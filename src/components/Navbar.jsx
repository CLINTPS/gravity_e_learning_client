import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // 🧭 If admin is logged in — show fixed navbar
  if (userInfo && userInfo.user.role === "admin") {
    return (
      <nav className="bg-indigo-600 text-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <Link to="/" className="text-2xl font-bold tracking-wide">
            Cokonet Academy
          </Link>
          <div className="flex space-x-4 items-center">
            <button
              onClick={handleLogout}
              className="ml-3 bg-white text-indigo-600 px-3 py-1 rounded-md hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    );
  }

  // 🌐 Normal Navbar for users/instructors/students
  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Cokonet Academy
        </Link>
        <div className="flex space-x-4 items-center">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/courses" className="hover:text-gray-200">
            Courses
          </Link>
          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>

          {userInfo ? (
            <button
              onClick={handleLogout}
              className="ml-3 bg-white text-indigo-600 px-3 py-1 rounded-md hover:bg-gray-100"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-200">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-white text-indigo-600 px-3 py-1 rounded-md hover:bg-gray-100"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
