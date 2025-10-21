import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

// Component for Navigation Links with Dropdown Arrow
const NavDropdownLink = ({ title, to = "#" }) => (
  <Link 
    to={to} 
    className="flex items-center text-base text-gray-800 hover:text-indigo-700 transition duration-150 py-4"
  >
    {title}
    <svg className="ml-1 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </Link>
);

// Component for the Search Icon Button
const SearchButton = () => (
  <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:border-indigo-600 hover:text-indigo-600 transition duration-150 flex-shrink-0">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
  </button>
);


export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // 🧭 Admin Navbar (Fixed for admin role)
  if (userInfo && userInfo.user.role === "admin") {
    return (
      <nav className="bg-indigo-600 text-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <Link to="/" className="text-2xl font-bold tracking-wide">
            Cokonet Academy Admin
          </Link>
          <button
              onClick={handleLogout}
              className="ml-3 bg-white text-indigo-600 px-3 py-1 rounded-md hover:bg-gray-100"
            >
              Logout
            </button>
        </div>
      </nav>
    );
  }

  // 🌐 Public Navbar (Reduced to 80% Width)
  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm relative z-40 flex justify-center">
      
      {/* 💥 KEY CHANGE HERE: Replaced 'container' with 'w-4/5' and added 'mx-auto' 
          to keep it centered. The 'w-full' ensures it takes up 80% of the parent nav,
          which we've centered using 'justify-center' on the parent nav element. */}
      <div className="w-4/5 flex justify-between items-center px-4"> 
        
        {/* 1. Logo Section */}
        <Link to="/" className="flex items-center flex-shrink-0">
            <div className="flex items-end h-16">
                <span className="text-3xl font-sans text-[#293A4D]">Cokonet</span>
                <span className="text-xs text-indigo-600 font-medium ml-1">academy</span>
            </div>
        </Link>

        {/* 2. Navigation Links Section */}
        <div className="flex items-center h-16 gap-8 text-lg font-normal ml-12">
          <NavDropdownLink title="Explore Courses" to="/courses" />
          <NavDropdownLink title="Training" />
          <NavDropdownLink title="Resources" />
          <NavDropdownLink title="The Academy" />
        </div>

        {/* 3. Utility Section: Search, Call, and Learn Button */}
        <div className="flex items-center space-x-4">
          
          <SearchButton />

          <div className="border border-gray-300 rounded-lg p-3 flex items-center h-10 min-w-[200px]">
            <span className="text-gray-700 text-sm font-medium whitespace-nowrap">
              Call us <span className="font-bold">+91 8075-400 500</span>
            </span>
          </div>
          
          <Link
            to={userInfo ? "/" : "/register"} 
            className="bg-[#123168] text-white px-6 py-3 rounded-md font-semibold text-base h-12 flex items-center hover:bg-indigo-800 transition duration-150 whitespace-nowrap"
          >
            Learn with us
          </Link>
          
          {userInfo && (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 ml-2"
            >
              Logout
            </button>
          )}

        </div>
      </div>
    </nav>
  );
}