import { Link } from "react-router-dom";

export default function LearnNavbar({ onLoginClick,onSignupClick }) { 
  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div className="w-4/5 flex justify-between items-center h-16 px-4"> 
        
        <Link to="/" className="flex items-center flex-shrink-0">
            <div className="flex items-end h-full">
                <span className="text-3xl font-sans text-[#293A4D]">Cokonet</span>
                <span className="text-xs text-indigo-600 font-medium ml-1">academy</span>
            </div>
        </Link>

        <div className="flex items-center space-x-4 text-sm">
          
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition duration-150">
            Contact Us
          </Link>
          
          <span className="text-gray-300">|</span>

          <button
            onClick={onLoginClick}
            className="border border-[#123168] text-[#123168] px-4 py-2 rounded-md font-semibold hover:bg-gray-50 transition duration-150 whitespace-nowrap"
          >
            Login
          </button>
          
          <button
            onClick={onSignupClick}
            className="bg-[#123168] text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-800 transition duration-150 whitespace-nowrap"
          >
            Signup
          </button>

        </div>
      </div>
    </nav>
  );
}