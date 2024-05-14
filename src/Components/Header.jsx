import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleNavClick = () => {
    // Close the mobile menu
    setToggleMenu(false);
  };

  return (
    <div className=" text-indigo-800 mobile-header ">
      <nav>
        <div
          className={`flex items-center lg:items-start justify-between py-4 bg-blue-300   px-14`}
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
          <div className=" hidden md:flex md:text-xl lg:text-2xl flex-wrap justify-center basis-[90%] gap-12 items-center  ">
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
            <button className=" hidden md:block cursor-pointer w-fit   px-4 text-white py-2 rounded-full shadow-md hover:bg-indigo-700  ">
              <a href="" download="">
                Résumé
              </a>
            </button>
          </div>

          <div className="w-10">
            <div
              className=" text-xs md:hidden cursor-pointer"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              {toggleMenu ? <XMarkIcon /> : <Bars3Icon />}
            </div>
          </div>
        </div>
        {/* mobile navigation */}

        <div
          className={` fixed z-40 w-[70%] ${"bg-gray-100  text-gray-700"}  overflow-hidden flex flex-col gap-12  origin-top duration-700 ${
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
              <ScrollLink
                className="underline-offset-4 cursor-pointer  hover:underline"
                to="contactMe"
                smooth={true}
                duration={2000}
              >
                Contact Me
              </ScrollLink>
              <button className="  md:hidden cursor-pointer w-fit  px-4 text-white py-2 rounded-full shadow-md hover:bg-indigo-700 hover:transition-all duration-300 ">
                <a href="" download="">
                  Résumé
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
