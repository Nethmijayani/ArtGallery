import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    
    { link: "Pricing", path: "pricing" },
    {link: "SignUp", path: "signup" },
    
  ];
  return (
    <>
    <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0 z-10">
      <div className="text-xl container mx-auto flex justify-between items-center font-medium">
        <div className="flex space-x-14 items-center">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3 text-primary"
          >
            <img src={Logo} alt="" className="w-10 inline-block items-center" />
            <span>ArtGallery</span>
            </a>

          <ul className="hidden md:flex space-x-12">
            {navItems.map(({ link, path }) => 
              <Link spy={true} smooth={true} offset={-100} key={link} to={path} className="block hover:text-slate-500 cursor-pointer">
                {link}
              </Link>
            )}
          </ul>
        </div>

        {/*<div className=" hidden md:flex space-x-10 items-center">
          <button
            className="bg-purple-500 items-center  py-2 px-3 
                    transition-all duration-300 rounded hover:text-white
                    hover:bg-fuchsia-500"
          >
            Sign Up
          </button>
        </div>
        */}
                    {/* for mibile view*/}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-gray-300 text-xl "
          >
            {
            isMenuOpen ? (<FaXmark className="w-6 h-6 text-primary" />) : (
              <FaBars className="w-6 h-6 text-primary" />)
              }
          </button>
        </div>
      </div>
    </nav>

    <div className={`space-y-5 px-4 pt-24 pb-5 bg-purple-500
     ${isMenuOpen ? "block fixed top-0 right-0 left-0": "hidden "} `}>
    {
    navItems.map(({ link, path }) => (
              <Link key={link} to={path} className="block hover:text-slate-500 cursor-pointer">
                {link}
              </Link>
            ))
    } 

    </div>
    </>

    

  );
};

export default Navbar;
