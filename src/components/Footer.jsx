import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const footerLinks = {
    Training: [
      "Job Guaranteed Programs",
      "For Job Seekers",
      "For Corporates",
      "For Institutions",
      "Become a Trainer",
    ],
    Learn: [
      "All Courses",
      "SAP Courses",
      "Cloud Courses",
      "Programming Courses",
      "Accounting Courses",
      "Analytics",
    ],
    Certifications: ["SAP", "AWS", "Azure Cloud", "Google Cloud"],
    Resources: ["Course Suggestor", "Blogs", "Sureshot"],
    Company: [
      "About us",
      "Careers",
      "Contact us",
      "Terms & Condition",
      "Privacy Policy",
      "Refund & Cancellation Policy",
    ],
  };

  return (
    <footer className="bg-gray-50 text-gray-700 pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-gray-200 pb-12">
          <div className="md:col-span-3">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-semibold text-indigo-700">
                Cokonet academy
              </span>
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              Join over 4,000+ learners learning with Cokonet
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 md:col-span-9">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-indigo-600 transition duration-150 ease-in-out"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Cokonet Technologies Private Limited.
            All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-indigo-600 transition duration-150 ease-in-out"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-indigo-600 transition duration-150 ease-in-out"
            >
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-600 hover:text-indigo-600 transition duration-150 ease-in-out"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Youtube"
              className="text-gray-600 hover:text-indigo-600 transition duration-150 ease-in-out"
            >
              <FaYoutube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
