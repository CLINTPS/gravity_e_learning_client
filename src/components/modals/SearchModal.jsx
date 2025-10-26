const SearchModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] overflow-y-auto bg-gray-900 bg-opacity-70 backdrop-blur-sm transition-opacity duration-300"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true"></div>

      <div className="flex items-start justify-center min-h-screen pt-20 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="relative bg-white rounded-xl shadow-2xl transform transition-all duration-300 w-full max-w-2xl mt-16 mx-auto"
          role="document"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors focus:outline-none"
            onClick={onClose}
            aria-label="Close search"
          >
            <svg
              className="h-8 w-8 text-white bg-indigo-700 rounded-full p-1 shadow-md"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="py-20 px-8 sm:px-12">
            <div className="w-full">
              {/* Search Input Field */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Course..."
                  className="w-full pl-16 pr-6 py-6 border-2 border-gray-300 rounded-xl text-xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                />
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <svg
                    className="h-8 w-8 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
