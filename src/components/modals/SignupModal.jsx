import React from "react";
import { Link } from "react-router-dom";

const SignupModal = ({ isOpen, onClose }) => {
  const modalClasses = `fixed top-0 right-0 w-full md:w-[450px] h-full bg-white shadow-2xl z-[100] transform transition-transform duration-500 ease-in-out ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`;

  if (!isOpen) {
    return null;
  }

  return (
    <>
      \{" "}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[99]"
        onClick={onClose}
      />
      <div className={modalClasses}>
        <div className="flex flex-col h-full p-8">
          <button
            onClick={onClose}
            className="absolute top-4 left-4 text-gray-500 hover:text-gray-900 focus:outline-none"
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <div className="mt-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Create an account
            </h2>
            <p className="text-gray-600 mt-1">
              or{" "}
              <Link
                to="/larnLanding"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Login
              </Link>
            </p>
          </div>

          <form className="flex flex-col space-y-6 flex-grow">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 block mb-2"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder=""
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
            >
              CONTINUE
            </button>
          </form>

          <div className="text-center text-xs text-gray-500 mt-auto pt-6">
            <p>
              By clicking on Continue, I accept the
              <Link
                to="/terms"
                className="text-indigo-600 hover:text-indigo-700 ml-1"
              >
                Terms & Conditions
              </Link>
              ,
            </p>
            <p className="mt-1">
              <Link
                to="/privacy"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Privacy Policy
              </Link>{" "}
              &
              <Link
                to="/refund"
                className="text-indigo-600 hover:text-indigo-700"
              >
                {" "}
                Refund Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupModal;
