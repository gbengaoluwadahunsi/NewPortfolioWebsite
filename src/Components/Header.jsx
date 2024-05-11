import { useState, useContext } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import DarkModeContext from "./DarkModeprovider";
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleNavClick = () => {
    // Close the mobile menu
    setToggleMenu(false);
  };

  return (
    <div className=" text-indigo-800  mobile-header">
      <nav>
        <div className=" px-4 lg:px-8  bg-black  text-white py-1  text-xs sm:text-sm  align-center place-items-center   justify-center ">
          <span> Click here to download my CV</span>
          <span
            className={`${
              isDarkMode ? "bg-fuchsia-900 " : "bg-fuchsia-500 "
            } p-4 font-bold cursor-pointer  ml-4 hover:bg-fuchsia-600`}
          >
            download
          </span>
        </div>

        <div
          className={`flex  lg:items-center justify-between py-4 bg-blue-300  top-1 gap-10  px-8`}
        >
          {/* Primary menu and logo */}

          {/* logo */}
          <div
            className="  cursor-pointer font-extrabold text-3xl lg:text-4xl  text-indigo-900  w-fit justify-center"
            id="fontFamily"
          >
            {" "}
            Gbénga
          </div>
          {/* primary */}
          <div className=" hidden md:flex md:text-xl lg:text-2xl flex-wrap justify-center  gap-12 items-center  ">
            <ScrollLink
              className="underline-offset-4 cursor-pointer  hover:underline "
              to="aboutMe"
              smooth={true}
              duration={2000}
            >
              About Me
            </ScrollLink>
            <ScrollLink
              className="underline-offset-4 cursor-pointer  hover:underline"
              to="skills"
              smooth={true}
              duration={2000}
            >
              Skills
            </ScrollLink>
            <ScrollLink
              className="underline-offset-4 cursor-pointer  hover:underline"
              to="experience"
              smooth={true}
              duration={2000}
            >
              Experience
            </ScrollLink>
            <ScrollLink
              className="underline-offset-4 cursor-pointer  hover:underline"
              to="projects"
              smooth={true}
              duration={2000}
            >
              Projects
            </ScrollLink>

            <ScrollLink
              className="underline-offset-4 cursor-pointer  hover:underline"
              to="openSource"
              smooth={true}
              duration={2000}
            >
              Open Source
            </ScrollLink>
            <ScrollLink
              className="underline-offset-4 cursor-pointer  hover:underline"
              to="contactMe"
              smooth={true}
              duration={2000}
            >
              Contact Me
            </ScrollLink>
          </div>

          <div className="grid grid-cols-2 gap-2  items-center md:items-start">
            <div
              className=" cursor-pointer w-fit p-2 rounded-full hover:bg-indigo-500 hover:text-white"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <MoonIcon className="h-6 w-6" />
              ) : (
                <SunIcon className="h-6 text-red-500 w-6" />
              )}
            </div>
            <div
              className="md:hidden"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              {toggleMenu ? <XMarkIcon /> : <Bars3Icon />}
            </div>
          </div>
        </div>
        {/* mobile navigation */}

        <div
          className={` fixed z-40 w-[70%] ${
            isDarkMode ? "bg-gray-100  text-gray-700" : "bg-gray-600 text-white"
          }  overflow-hidden flex flex-col gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full w-[64%]  lg:hidden"
          }`}
        >
          <div className="px-8   h-[30rem] py-16 ">
            <div className="flex  text-[0.8em] flex-col gap-8 font-bold  ">
              
              <ScrollLink
                className="  cursor-pointer   "
                to="aboutMe"
                smooth={true}
                duration={2000}
                onClick={handleNavClick} // Add onClick handler
              >
                About Me
              </ScrollLink>
              <ScrollLink
                className="underline-offset-4 cursor-pointer  "
                to="skills"
                smooth={true}
                duration={2000}
                onClick={handleNavClick} // Add onClick handler
              >
                
                Skills
              </ScrollLink>
              <ScrollLink
                className="underline-offset-4 cursor-pointer  "
                to="experience"
                smooth={true}
                duration={2000}
                onClick={handleNavClick} // Add onClick handler
              >
                Experience
              </ScrollLink>
              <ScrollLink
                className="underline-offset-4 cursor-pointer "
                to="projects"
                smooth={true}
                duration={2000}
                onClick={handleNavClick} // Add onClick handler
              >
                Projects
              </ScrollLink>

              <ScrollLink
                className="underline-offset-4 cursor-pointer  "
                to="openSource"
                smooth={true}
                duration={2000}
                onClick={handleNavClick} // Add onClick handler
              >
                Open Source
              </ScrollLink>
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
