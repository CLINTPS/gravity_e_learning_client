import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const accreditationLogos = [
  { src: "/Institutions/01.jpg", alt: "ASAP" },
  { src: "/Institutions/02.jpg", alt: "CDIT" },
  { src: "/Institutions/03.jpg", alt: "DDU-GKY" },
  { src: "/Institutions/04.jpg", alt: "SAP" },
  { src: "/Institutions/05.jpg", alt: "NSDC" },

  { src: "/Institutions/01.jpg", alt: "ASAP" },
  { src: "/Institutions/02.jpg", alt: "CDIT" },
  { src: "/Institutions/03.jpg", alt: "DDU-GKY" },
  { src: "/Institutions/04.jpg", alt: "SAP" },
  { src: "/Institutions/05.jpg", alt: "NSDC" },

  { src: "/Institutions/01.jpg", alt: "ASAP" },
  { src: "/Institutions/02.jpg", alt: "CDIT" },
  { src: "/Institutions/03.jpg", alt: "DDU-GKY" },
  { src: "/Institutions/04.jpg", alt: "SAP" },
  { src: "/Institutions/05.jpg", alt: "NSDC" },
];

const sliderItems = [
  {
    title: "100% Job Guaranteed Programs",
    content:
      "Secure your future with Cokonet's Sureshot program, offering a 100% job guarantee.",
    link: "/programs/sureshot",
  },
  {
    title: "200+ Job Vacancies",
    content:
      "Jumpstart your career journey with Surepool, Cokonet's free job site connecting you to your dream job.",
    link: "/programs/surepool",
  },
  {
    title: "300+ Job Vacancies",
    content:
      "Jumpstart your career journey with Surepool, Cokonet's free job site connecting you to your dream job.",
    link: "/programs/surepool",
  },
];

const profileImages = [
  {
    src: "/Candidates/01.png",
    alt: "Profile 1",
  },
  {
    src: "/Candidates/02.png",
    alt: "Profile 2",
  },
  {
    src: "/Candidates/03.png",
    alt: "Profile 3",
  },
  {
    src: "/Candidates/04.png",
    alt: "Profile 4",
  },
  {
    src: "/Candidates/05.png",
    alt: "Profile 5",
  },
  {
    src: "/Candidates/06.png",
    alt: "Profile 6",
  },
];

const ProfileCard = ({
  name,
  title,
  img,
  style,
  bgClass = "bg-white",
  shadowClass = "shadow-2xl",
}) => (
  <div
    className={`absolute p-2 ${bgClass} rounded-lg ${shadowClass} transform hover:scale-105 transition duration-300`}
    style={style}
  >
    <div className="w-36 h-36 md:w-52 md:h-52 overflow-hidden rounded-lg">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover rounded-md"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/208x208/E2E8F0/4A5568?text=Image+Not+Found&font=sans`;
        }}
      />
    </div>
  </div>
);

const AccordionItem = ({ title, content, linkTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentHeight = isOpen ? "300px" : "0px";

  return (
    <div className={`w-full max-w-lg p-3 mb-4 ${isOpen ? "bg-gray-50" : ""}`}>
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-gray-900 text-md py-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "" : "rotate-180"
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
            d="M5 15l7-7 7 7"
          ></path>
        </svg>
      </button>

      <div
        style={{ maxHeight: contentHeight }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div
          className={`pt-4 text-gray-700 text-base leading-relaxed ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="mb-6">{content}</p>
          <Link
            to={linkTo}
            className="bg-white text-gray-800 px-6 py-3 rounded-md font-semibold border border-gray-300 hover:bg-gray-100 transition duration-200 inline-flex items-center"
          >
            Know more
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProgramsSlider = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const nextItem = () => {
    setCurrentItem((prev) => (prev + 1) % sliderItems.length);
    setProgressKey((prev) => prev + 1);
  };

  const prevItem = () => {
    setCurrentItem(
      (prev) => (prev - 1 + sliderItems.length) % sliderItems.length
    );
    setProgressKey((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextItem();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const doubledProfileImages = [...profileImages, ...profileImages];

  return (
    <>
      <div className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-white"></div>
          <div className="w-1/2" style={{ backgroundColor: "#eaf2ff" }}></div>
        </div>

        <div className="w-4/5 mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2 w-full bg-white p-8 rounded-lg shadow-xl">
            <div
              className="relative overflow-hidden mb-8"
              style={{ minHeight: "200px" }}
            >
              {sliderItems.map((item, index) => (
                <div
                  key={index}
                  className={`absolute w-full transition-all duration-500 ease-in-out ${
                    index === currentItem
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 " +
                        (index > currentItem
                          ? "translate-x-full"
                          : "-translate-x-full")
                  }`}
                >
                  <h2
                    className="text-4xl font-semibold mb-4 text-gray-800"
                    style={{ color: "#30476e" }}
                  >
                    {item.title}
                  </h2>
                  <p className="text-base text-gray-600 mb-8 pr-4">
                    {item.content}
                  </p>
                  <Link
                    to={item.link}
                    className="bg-blue-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition duration-200"
                    style={{ backgroundColor: "#30476e" }}
                  >
                    Know more
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-grow bg-gray-200 rounded-full h-1.5 overflow-hidden">
                <div
                  key={progressKey}
                  className="bg-orange-500 h-1.5 rounded-full"
                  style={{ animation: "fill-progress 5s linear 1" }}
                ></div>
              </div>
              <button
                onClick={prevItem}
                className="p-2 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
              <button
                onClick={nextItem}
                className="p-2 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="md:w-1/2 w-full relative h-40">
            <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden">
              <div className="flex whitespace-nowrap animate-scroll-ltr">
                {doubledProfileImages.map((img, index) => (
                  <div key={index} className="flex-shrink-0 mx-4 w-24 h-24">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover rounded-full shadow-md"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/100x100/E2E8F0/4A5568?text=Image+Not+Found&font=sans`;
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const OverseasEducationSection = () => {
  const sectionBgStyle = {
    backgroundColor: "#919daf",
  };

  return (
    <div className="w-full relative text-white" style={sectionBgStyle}>
      <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 w-full pr-0 md:pr-10">
          <p className="text-sm font-light uppercase tracking-widest opacity-80 mb-2">
            OVERSEAS EDUCATION AND VISA PROCESSING
          </p>
          <h2 className="text-5xl lg:text-7xl font-semibold leading-tight mb-6">
            Fly-Far Program
          </h2>
          <p className="text-lg font-light mb-10 leading-relaxed text-gray-100">
            Discover Cokonet Overseas, your gateway to international education
            excellence. Explore how we empower students to pursue their dreams
            abroad, offering personalized guidance and unparalleled support
            throughout their academic journey. Whether you're planning your
            future studies or seeking global learning opportunities, Cokonet
            Overseas is here to guide you every step of the way.
          </p>

          <Link
            to=""
            className="flex items-center w-48 bg-white text-gray-800 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition duration-200 shadow-2xl"
          >
            Know more
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>

        <div className="md:w-1/2 w-full flex justify-center md:justify-end relative mt-10 md:mt-0">
          <img
            src="/ForeignProgram.png"
            alt="Student with global landmarks (Statue of Liberty, Big Ben, Opera House)"
            className="w-full h-auto object-contain rounded-lg max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

const UnleashCareerSection = () => {
  return (
    <div
      className="w-full bg-gray-50/50 py-20"
      style={{ backgroundColor: "#f5f7fa" }}
    >
      <div className="w-4/5 mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="lg:w-1/2 w-full max-w-xl">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-3">
            READY TO UNLOCK YOUR CAREER POTENTIAL?
          </p>
          <h2 className="text-5xl lg:text-7xl font-semibold leading-tight text-gray-800 mb-8">
            Unleash your <br /> career with our <br /> expertise.
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Connect with our representatives today and discover how Cokonet can
            pave the way to your success. Take the first step towards a brighter
            future!
          </p>

          <div className="flex space-x-4">
            <Link
              to="/counselor"
              className="flex items-center bg-transparent border border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200"
            >
              Talk to our counsellor
            </Link>
            <Link
              to="/contact/inquiry"
              className="flex items-center bg-transparent border border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200"
            >
              Give us a call
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 w-full flex justify-center md:justify-end relative mt-10 md:mt-0">
          <img
            src="/ForeignProgram01.png"
            alt="Student with global landmarks (Statue of Liberty, Big Ben, Opera House)"
            className="w-full h-auto object-contain rounded-lg max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default function LandingPage() {
  const heroGradientStyle = {
    background:
      "linear-gradient(290deg, #5c74a0 0%, #30476e 50%, #9a5f4c 100%)",
    position: "relative",
    overflow: "hidden",
  };

  return (
    <div className="min-h-[70vh] relative">
      <div
        className="w-full pt-16 pb-24 lg:pt-24 lg:pb-32 relative text-white"
        style={heroGradientStyle}
      >
        <div className="w-4/5 mx-auto flex flex-col md:flex-row relative z-10">
          <div className="w-full md:w-[45%] pr-10">
            <h1 className="text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              AI Integrated <br /> Learning from <br /> Working Pros
            </h1>
            <p className="text-base text-gray-200 mb-10 pr-10">
              Join India's leading platform dedicated to realizing professional
              dreams and fostering growth for businesses and educational
              institutions.
            </p>

            <div className="flex space-x-4">
              <Link
                to="/contact"
                className="flex items-center bg-white text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-200"
              >
                Get in touch
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
              <Link
                to="/courses"
                className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-800 transition duration-200"
              >
                Talk to Us
              </Link>
            </div>
          </div>

          <div
            className="w-full md:w-[55%] relative flex justify-center items-center mt-16 md:mt-0"
            style={{ minHeight: "400px" }}
          >
            <div className="relative w-full h-full">
              <ProfileCard
                img="/landingIMG/keerthi.png"
                style={{
                  top: "0",
                  right: "10%",
                  transform: "translateY(-20%)",
                }}
                bgClass="bg-transparent"
                shadowClass="shadow-none"
              />
              <ProfileCard
                img="/landingIMG/shahana.png"
                style={{
                  top: "35%",
                  left: "25%",
                  transform: "translate(-30%, -30%)",
                }}
                bgClass="bg-transparent"
                shadowClass="shadow-none"
              />
              <ProfileCard
                img="/landingIMG/sneha.png"
                style={{
                  bottom: "0",
                  right: "15%",
                  transform: "translateY(10%)",
                }}
                bgClass="bg-transparent"
                shadowClass="shadow-none"
              />
            </div>
          </div>
        </div>

        <div className="fixed bottom-4 left-4 z-50">
          <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition duration-200">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            Chat with us
          </button>
        </div>
      </div>

      <div className="w-full bg-white py-4 border-b border-t border-gray-200">
        <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 flex-shrink-0 pr-8 mb-4 md:mb-0">
            <p className="text-sm font-semibold text-blue-800 leading-relaxed">
              Trust Cokonet's Excellence, Backed by Accreditations from Esteemed
              National and State-level Institutions
            </p>
          </div>

          <div className="w-full md:w-2/3 overflow-hidden h-12">
            <div className="flex whitespace-nowrap scrolling-logos-track animate-scroll-rtl">
              {accreditationLogos.map((logo, index) => (
                <div
                  key={index}
                  className="inline-block mx-8 h-10 flex-shrink-0"
                  style={{ minWidth: "100px" }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/100x40/E2E8F0/4A5568?text=${logo.alt}&font=sans`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ProgramsSlider />
      <div
        className="w-full py-24 relative text-white"
        style={heroGradientStyle}
      >
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-400/20 rounded-full -translate-x-1/4 -translate-y-1/4 blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-orange-400/20 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl opacity-50" />

        <div className="w-4/5 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
              Time to invest in your career from the right one
            </h2>
            <p className="text-base text-gray-200">
              Cokonet revolutionizes career growth for all. Empowering job
              seekers, working professionals, educational institutions, and
              corporates, we provide tailored solutions, unmatched resources,
              and seamless connections to unlock limitless opportunities.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            <div className="flex-1 flex flex-col bg-orange-600/70 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-orange-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.002a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75v-4.002m16.5 0M20.25 14.15v-4.002a.75.75 0 0 0-.75-.75H4.5a.75.75 0 0 0-.75.75v4.002m16.5 0M20.25 14.15M4.5 14.15M12 12.75a.75.75 0 0 0 .75-.75V6.375a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75v5.625a.75.75 0 0 0 .75.75h1.5m0 0v1.125c0 .621-.504 1.125-1.125 1.125H9.75a1.125 1.125 0 0 1-1.125-1.125V12.75m3.75 0v-1.5m0 1.5c.621 0 1.125-.504 1.125-1.125V6.375a1.125 1.125 0 0 0-1.125-1.125H8.625a1.125 1.125 0 0 0-1.125 1.125v5.25a1.125 1.125 0 0 0 1.125 1.125h3.75M12 12.75v-1.5"
                  />
                </svg>
              </div>
              <p className="text-sm font-semibold text-orange-200 uppercase tracking-wider mb-2">
                FOR JOBSEEKERS
              </p>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Kickstart your career journey with ease.
              </h3>
              <p className="text-base text-gray-200 mb-8 flex-grow">
                Explore 100% live courses from industry professionals working at
                top-rated companies, supported by authentic placement
                assistance. Your career is just a skill away!
              </p>
              <Link
                to="/jobseekers"
                className="mt-auto bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg text-center hover:bg-gray-100 transition duration-200"
              >
                Know more
              </Link>
            </div>

            <div className="flex-1 flex flex-col bg-white rounded-2xl p-8 shadow-2xl text-gray-900 transform md:scale-105 z-10">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-orange-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2">
                FOR WORKING PROFESSIONALS
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Upskill, Certify and Earn High
              </h3>
              <p className="text-base text-gray-700 mb-8 flex-grow">
                Gain latest technology insights, hands-on training, and valuable
                networking opportunities with industry-experts to help you
                achieve your professional aspirations.
              </p>
              <Link
                to="/professionals"
                className="mt-auto bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg text-center hover:bg-blue-900 transition duration-200"
              >
                Know more
              </Link>
            </div>

            <div className="flex-1 flex flex-col bg-orange-600/70 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-orange-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                  />
                </svg>
              </div>
              <p className="text-sm font-semibold text-orange-200 uppercase tracking-wider mb-2">
                FOR INSTITUTIONS
              </p>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Partner and Maximise Job Placements
              </h3>
              <p className="text-base text-gray-200 mb-8 flex-grow">
                Offer cutting-edge skillsets at subsidised cost to your
                students. Hot Skills, expert instructors, placement support -
                ensures that your students are close to their dream careers.
              </p>
              <Link
                to="/institutions"
                className="mt-auto bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg text-center hover:bg-gray-100 transition duration-200"
              >
                Know more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-24">
        <div className="w-4/5 mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
          {" "}
          <div className="md:w-1/2">
            <p className="text-sm font-semibold text-blue-900 uppercase tracking-wide mb-3">
              TRANSFORMATIVE SOLUTIONS
            </p>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-12 text-gray-800">
              Get empowered with <br /> our transformative <br /> solutions
            </h2>

            <AccordionItem
              title="Hire Train Transfer Model"
              content="Our Hire-Train-Transfer model revolutionises corporate talent acquisition by seamlessly connecting businesses with skilled professionals through customised training programs."
              linkTo="/solutions/hire-train-transfer"
            />

            <AccordionItem
              title="Corporate Training"
              content="Elevate your team's expertise with our customised corporate training programs, focusing on the latest technologies and essential business skills to drive growth and innovation."
              linkTo="/solutions/corporate-training"
            />

            <AccordionItem
              title="Readily Available Professionals"
              content="Instantly staff your projects with our pool of readily available, fully trained, and vetted professionals, ensuring zero downtime and immediate productivity for critical roles."
              linkTo="/solutions/readily-available"
            />
          </div>
          <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src="/TransformativeSolutions/06.jpg"
              alt="Transformative Solutions Visual"
              className="w-full h-auto object-contain rounded-lg "
              style={{ maxWidth: "550px", maxHeight: "550px" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/550x550/E2E8F0/4A5568?text=Image+Not+Found&font=sans`;
              }}
            />
          </div>
        </div>
      </div>

      <OverseasEducationSection />
      <UnleashCareerSection />
    </div>
  );
}
