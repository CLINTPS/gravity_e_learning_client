import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useState } from "react";
import SearchModal from "../components/modals/SearchModal.jsx";

const COURSE_CATEGORIES = [
  "Advanced Mastery Programs",
  "Sureshot Courses-Job Guarantee",
  "SAP (S/4HANA) Business Edition",
  "Cloud Courses",
  "Analytics",
  "Networking",
  "Programming",
  "Software Testing",
];

const TRAINING_CATEGORIES = [
  "For Job Seekers",
  "For Working Professional",
  "For Corporates",
  "For Institutions",
];

const RESOURCE_CATEGATEGORIES = ["Course Suggestor", "Blogs"];

const ACADEMY_CATEGORIES = [
  "About Us",
  "Careers",
  "Become a Trainer",
  "Contact Us",
  "LMS Login",
];

const NavDropdownTrigger = ({ title, to = "#" }) => (
  <Link
    to={to}
    className="flex items-center text-base text-gray-800 hover:text-indigo-700 transition duration-150 py-4 relative"
  >
    {title}
    <svg
      className="ml-1 w-4 h-4 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  </Link>
);

const SearchButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:border-indigo-600 hover:text-indigo-600 transition duration-150 flex-shrink-0"
    aria-label="Open search"
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  </button>
);

const CoursesDropdown = ({ categories }) => (
  <div className="absolute top-full left-0 mt-0 w-80 bg-white shadow-xl rounded-b-lg border-t-2 border-indigo-600 py-3">
    <div className="px-5 pb-2">
      <h3 className="text-xs font-bold tracking-wider text-blue-700 uppercase mb-2">
        COURSE CATEGORY
      </h3>
    </div>

    <div className="max-h-96 overflow-y-auto relative">
      <div className="absolute right-0 top-0 h-full w-1 bg-indigo-600"></div>

      {categories.map((category) => (
        <Link
          key={category}
          to={`/courses?category=${encodeURIComponent(category)}`}
          className="flex justify-between items-center px-5 py-3 text-gray-700 text-base hover:bg-gray-50 hover:text-indigo-600 transition duration-150 relative"
        >
          {category}
          <svg
            className="w-4 h-4 text-gray-400 group-hover:text-indigo-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </Link>
      ))}
    </div>
  </div>
);

const TrainingDropdown = ({ categories }) => (
  <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-xl rounded-b-lg border-t-2 border-indigo-600 py-3">
    <div className="px-5 pb-2">
      <h3 className="text-xs font-bold tracking-wider text-blue-700 uppercase mb-2">
        TRAINING
      </h3>
    </div>

    <div className="max-h-96 overflow-y-auto relative">
      {categories.map((category) => (
        <Link
          key={category}
          to={`/training?target=${encodeURIComponent(
            category.replace(/ /g, "")
          )}`}
          className="flex justify-between items-center px-5 py-3 text-gray-700 text-base hover:bg-gray-50 hover:text-indigo-600 transition duration-150 relative"
        >
          {category}
        </Link>
      ))}
    </div>
  </div>
);

const ResourcesDropdown = ({ categories }) => (
  <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-xl rounded-b-lg border-t-2 border-indigo-600 py-3">
    <div className="px-5 pb-2">
      <h3 className="text-xs font-bold tracking-wider text-blue-700 uppercase mb-2">
        RESOURCES
      </h3>
    </div>

    <div className="max-h-96 overflow-y-auto relative">
      {categories.map((category) => (
        <Link
          key={category}
          to={`/resources/${encodeURIComponent(
            category.replace(/ /g, "-").toLowerCase()
          )}`}
          className="flex justify-between items-center px-5 py-3 text-gray-700 text-base hover:bg-gray-50 hover:text-indigo-600 transition duration-150 relative"
        >
          {category}
        </Link>
      ))}
    </div>
  </div>
);

const AcademyDropdown = ({ categories }) => (
  <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-xl rounded-b-lg border-t-2 border-indigo-600 py-3">
    <div className="px-5 pb-2">
      <h3 className="text-xs font-bold tracking-wider text-blue-700 uppercase mb-2">
        THE ACADEMY
      </h3>
    </div>

    <div className="max-h-96 overflow-y-auto relative">
      {categories.map((category) => (
        <Link
          key={category}
          to={`/academy/${encodeURIComponent(
            category.replace(/ /g, "-").toLowerCase()
          )}`}
          className="flex justify-between items-center px-5 py-3 text-gray-700 text-base hover:bg-gray-50 hover:text-indigo-600 transition duration-150 relative"
        >
          {category}
        </Link>
      ))}
    </div>
  </div>
);

const MobileDropdown = ({ title, categories, to, linkBase }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getLink = (category) => {
    const slug = encodeURIComponent(category.replace(/ /g, "-").toLowerCase());
    if (title === "Explore Courses")
      return `${linkBase}?category=${encodeURIComponent(category)}`;
    if (title === "Training")
      return `${linkBase}?target=${encodeURIComponent(
        category.replace(/ /g, "")
      )}`;
    return `${linkBase}/${slug}`;
  };

  return (
    <div className="border-b border-gray-100">
      <button
        className="flex justify-between items-center w-full px-5 py-4 text-left text-lg font-semibold text-gray-800 hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="bg-gray-50 pb-2">
          {categories.map((category) => (
            <Link
              key={category}
              to={getLink(category)}
              className="block px-8 py-2 text-gray-600 text-base hover:bg-gray-100 transition duration-150"
            >
              {category}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };
  const handleMouseLeave = () => setActiveDropdown(null);

  const openSearchModal = () => setIsSearchModalOpen(true);
  const closeSearchModal = () => setIsSearchModalOpen(false);

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

  return (
    <>
      <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />

      <nav className="bg-white border-b border-gray-100 shadow-sm relative z-40 flex justify-center">
        <div className="w-full lg:w-4/5 flex justify-between items-center px-4">
          <Link to="/" className="flex items-center flex-shrink-0">
            <div className="flex items-end h-16 py-3">
              <span className="text-3xl font-sans text-[#293A4D]">Cokonet</span>
              <span className="text-xs text-indigo-600 font-medium ml-1">
                academy
              </span>
            </div>
          </Link>

          <div
            className="hidden lg:flex items-center h-16 gap-8 text-lg font-normal ml-12"
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("courses")}
            >
              <NavDropdownTrigger title="Explore Courses" to="/courses" />
              {activeDropdown === "courses" && (
                <CoursesDropdown categories={COURSE_CATEGORIES} />
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("training")}
            >
              <NavDropdownTrigger title="Training" to="/training" />
              {activeDropdown === "training" && (
                <TrainingDropdown categories={TRAINING_CATEGORIES} />
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("resources")}
            >
              <NavDropdownTrigger title="Resources" to="/resources" />
              {activeDropdown === "resources" && (
                <ResourcesDropdown categories={RESOURCE_CATEGATEGORIES} />
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("academy")}
            >
              <NavDropdownTrigger title="The Academy" to="/academy" />
              {activeDropdown === "academy" && (
                <AcademyDropdown categories={ACADEMY_CATEGORIES} />
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <SearchButton onClick={openSearchModal} />

            <div className="border border-gray-300 rounded-lg p-3 flex items-center h-10 min-w-[200px]">
              <span className="text-gray-700 text-sm font-medium whitespace-nowrap">
                Call us <span className="font-bold">+91 8075-400 500</span>
              </span>
            </div>

            {userInfo ? (
              <button
                onClick={handleLogout}
                className="bg-[#123168] text-white px-6 py-3 rounded-md font-semibold text-base h-12 flex items-center hover:bg-indigo-800 transition duration-150 whitespace-nowrap"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/larnLanding"
                className="bg-[#123168] text-white px-6 py-3 rounded-md font-semibold text-base h-12 flex items-center hover:bg-indigo-800 transition duration-150 whitespace-nowrap"
              >
                Learn with us
              </Link>
            )}
          </div>

          <div className="flex items-center lg:hidden">
            <SearchButton onClick={openSearchModal} />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-3 p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen border-t" : "max-h-0"
          }`}
        >
          <div className="py-4">
            <MobileDropdown
              title="Explore Courses"
              categories={COURSE_CATEGORIES}
              to="/courses"
              linkBase="/courses"
            />
            <MobileDropdown
              title="Training"
              categories={TRAINING_CATEGORIES}
              to="/training"
              linkBase="/training"
            />
            <MobileDropdown
              title="Resources"
              categories={RESOURCE_CATEGATEGORIES}
              to="/resources"
              linkBase="/resources"
            />
            <MobileDropdown
              title="The Academy"
              categories={ACADEMY_CATEGORIES}
              to="/academy"
              linkBase="/academy"
            />

            <div className="px-5 py-4 border-b border-gray-100">
              <div className="text-gray-700 text-base font-medium mb-3">
                Call us:{" "}
                <span className="font-bold text-indigo-700">
                  +91 8075-400 500
                </span>
              </div>
              {userInfo ? (
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#123168] text-white px-6 py-3 rounded-md font-semibold text-base hover:bg-indigo-800 transition duration-150"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/larnLanding"
                  className="w-full text-center bg-[#123168] text-white px-6 py-3 rounded-md font-semibold text-base block hover:bg-indigo-800 transition duration-150"
                >
                  Learn with us
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
