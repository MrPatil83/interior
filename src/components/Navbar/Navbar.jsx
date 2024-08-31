import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import whitelogo from "../../assests/logos/whitelogo.png"; // Correctly import the logo

const Navbar = ({ navbarBg }) => {
  const [isOpen, setIsOpen] = useState(false);
//   const [isAutomationOpen, setIsAutomationOpen] = useState(false);
//   const [isServiceOpen, setIsServiceOpen] = useState(false);
//   const [isChargesOpen, setIsChargesOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

//   const handleAutomationClick = () => {
//     setIsAutomationOpen(!isAutomationOpen);
//   };
//   const handleServiceClick = () => {
//     setIsServiceOpen(!isServiceOpen);
//   };
//   const handleChargesClick = () => {
//     setIsChargesOpen(!isChargesOpen);
//   };

  const handleLinkClick = () => {
    setIsOpen(false);
    // setIsAutomationOpen(false);
    // setIsServiceOpen(false);
    // setIsChargesOpen(false);
  };

  return (
    <nav
      className={` relative top-0 left-0 h-[6rem] bg-black bg-transparent w-auto poppins-regular z-20 transition duration-300 ${navbarBg}`}
    //   style={{ backgroundColor: "b" }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center lg:px-[5rem]">
        <div className="text-white font-bold text-lg -my-[3rem]">
          <Link to="/">
            <img
              className="h-[12rem] w-[16rem] mx-auto p-2 -ml-9 hover:scale-125 transition-transform duration-700 cursor-pointer"
              src={whitelogo} // Use the imported logo
              alt="logo"
            />
          </Link>
        </div>
        <div className="hidden lg:flex mr-20 items-center space-x-6">
            <Link 
                to="/" 
                className="relative text-primary group hover:text-secondary transition-colors duration-300"
            >
                <span className="group-hover:before:scale-x-100 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-zinc-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-700 before:ease-in-out">
                Home
                </span>
            </Link>
            <Link 
                to="/about" 
                className="relative text-primary group hover:text-secondary transition-colors duration-300"
            >
                <span className="group-hover:before:scale-x-100 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-zinc-400  before:scale-x-0 before:origin-left before:transition-transform before:duration-700 before:ease-in-out">
                About Us
                </span>
            </Link>
            <Link 
                to="/services" 
                className="relative text-primary group hover:text-secondary transition-colors duration-300"
            >
                <span className="group-hover:before:scale-x-100 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-zinc-400  before:scale-x-0 before:origin-left before:transition-transform before:duration-700 before:ease-in-out">
                Services
                </span>
            </Link>
            <Link 
                to="/contact" 
                className="relative text-primary group hover:text-secondary transition-colors duration-300"
            >
                <span className="group-hover:before:scale-x-100 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-zinc-400  before:scale-x-0 before:origin-left before:transition-transform before:duration-700 before:ease-in-out">
                Contact Us
                </span>
            </Link>
        </div> 
        <div className="flex items-center">
          <button className="border poppins-regular border-[#ffff] text-sm bg-primary hidden lg:block text-black w-[8rem] h-[3rem] rounded-[1.5rem] cursor-pointer hover:text-white hover:bg-zinc-400 hover:scale-110 transition-transform duration-700">
            GET A QUOTE
          </button>

          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none ml-4"
            >
              {isOpen ? (
                <svg
                  className="w-10 h-10"
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
              ) : (
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-gray-900 h-auto bg-opacity-50 backdrop-blur px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="block px-4 py-4 text-primary hover:text-[#f5ce02]"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="block px-4 py-4 text-primary hover:text-[#f5ce02]"
          >
            About Us
          </Link> 
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="block px-4 py-4 text-primary hover:text-[#f5ce02]"
          >
            Services
          </Link> 
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="block px-4 py-4 text-primary hover:text-[#f5ce02]"
          >
            Contact Us
          </Link> 
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  navbarBg: PropTypes.string.isRequired,
};

export default Navbar;

