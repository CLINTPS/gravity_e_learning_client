import React from "react";

const LearnLanding = () => {
  return (
    <div className="min-h-screen bg-[#361dc4] text-white flex flex-col items-center pt-20 pb-16">
      <div className="container mx-auto px-16 flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-20 pt-16 ">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/your_video_id_here"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Transform Your <span className="text-orange-400">Career</span> with
            Job Oriented Skills
          </h1>
          <div className="space-y-4 mb-8 text-lg">
            <p className="flex items-center justify-center lg:justify-start">
              <span className="text-orange-400 text-3xl mr-3">&rsaquo;</span>{" "}
              10K+ Enrolled Students
            </p>
            <p className="flex items-center justify-center lg:justify-start">
              <span className="text-orange-400 text-3xl mr-3">&rsaquo;</span> 15
              Years of Legacy
            </p>
            <p className="flex items-center justify-center lg:justify-start">
              <span className="text-orange-400 text-3xl mr-3">&rsaquo;</span>{" "}
              100% Placement Focus
            </p>
          </div>
          <p className="text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Step into the future of work with Cokonet Academy, Kerala's leading
            AI-first EdTech and NSDC-accredited training institute.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              Get Started
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-[#123168] text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 p-8 text-xs font-semibold flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <span className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/YouTube_social_white_squircle.svg"
            alt="YouTube"
            className="w-4 h-4 mr-1"
          />
          WATCH ON YouTube
        </span>
        <span>JOIN THE NEXT BATCH TODAY</span>
        <span className="flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path>
          </svg>
          CALL NOW +91 8075-400 500
        </span>
      </div>
    </div>
  );
};

export default LearnLanding;
