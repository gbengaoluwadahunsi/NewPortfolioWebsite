import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

import { useContext } from "react";
import DarkModeContext from "./DarkModeprovider";

const Specials = (props) => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <section
        className={`${
          isDarkMode ? "bg-white" : "bg-slate-950 text-white"
        }  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] grid mx-0 lg:grid-rows-4 pt-2  h-[36rem] lg:w-full rounded-lg place-self-center text-customBlue font-medium duration-500  transition-transform transform cursor-pointer  hover:-translate-x-4`}
      >
        <div className="row-span-3 place-self-center">
          <img
            className="h-full rounded-xl lg:w-92   px-4 "
            src={`Images/${props.img}`}
            alt={`${props.menu} Image`}
          />
          <p className="px-6 text-[1.2rem] text-center mt-10">
            {props.description}
          </p>
        </div>

        <div className=" bg-indigo-900  rounded-b-lg px-6 py-2">
          <h2 className=" text-[1.2rem] lg:text-xl text-zinc-300">
            {props.menu}
          </h2>
          <div className="grid grid-cols-2 mt-1">
            {" "}
            <a
              href={props.linked}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[1.2rem] text-zinc-400 hover:text-fuchsia-600 "
            >
              {" "}
              Click to View
            </a>
            <a
              className=" place-self-end"
              href={props.gitHubRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size="1.6rem"
                className="text-white hover:text-fuchsia-300"
              />
            </a>
          </div>
          <span className="text-white text-xs">{props.stack}</span>
        </div>
      </section>
    </>
  );
};

Specials.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string,
  menu: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  linked: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gitHubRepo: PropTypes.string,
};

export default Specials;
