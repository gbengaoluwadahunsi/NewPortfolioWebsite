
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import Header from "../Components/Header";
import BackArrowUp from "../Components/BackArrowUp";
import myphoto from "../assets/Images/Gbenga.jpg";
import Myworks from "./My-works";
import openSource from "../assets/Images/opensource.png";
import skills from "../assets/Images/skills.png";
import Experience from "./Experience";
import experienceData from "./experienceArray";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { FaPython, FaHtml5, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiCss3,
  SiDjango,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";
import { SiJest } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import call from "../assets/Images/call.png";
import google from "../assets/Images/google.png";
import linkedin from "../assets/Images/linkedin.png";
import github from "../assets/Images/github.png";
import { useState } from "react";

const Homepage = () => {


  return (
    <div className={""}>
      <Header />
      <main className=" pt-10 md:top-0  flex  justify-center flex-col-reverse md:flex-row md:gap-4 px-4 lg:px-32 ">
        <section
          className={`${"text-gray-700 "
            } basis-[80%] flex flex-col  gap-2 lg:gap-8  text-center lg:text-start py-16 lg:py-20`}
        >
          <p className=" lg:justify-start text-2xl lg:text-5xl">
            {" "}
            <span
              className={`${"text-fuchsia-800"
                } font-extrabold`}
            >
              Welcome
            </span>{" "}
            to my portfolio website{" "}
          </p>
          <p className="p-2 lg:leading-[3.2rem]  lg:text-4xl">
            I&apos;m a software engineer that specializes in front-end and
            back-end technologies. I use my skills to provide innovative
            solutions to commercial and social ideas.
          </p>

          <div className=" mx-auto lg:mx-0">
            <ul className="flex flex-row gap-4">
              <li>
                <Link
                  to="https://github.com/gbengaoluwadahunsi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={github}
                    alt="github logo "
                    className={`cursor-pointer hover:border${" hover:bg-fuchsia-800"

                      }`}
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="https://linkedin.com/in/gbengaoluwadahunsi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={linkedin}
                    alt=" linkedin logo"
                    className={`cursor-pointer hover:border${" hover:bg-fuchsia-800"

                      }`}
                  />
                </Link>
              </li>
              <li>
                <a
                  href="mailto:gbengaoluwadahunsi01@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={google}
                    alt="google+ logo"
                    className={`cursor-pointer hover:border${" hover:bg-fuchsia-800"

                      }`}
                  />
                </a>
              </li>
              <li>
                <a href="tel:+601137483741">
                  <img
                    src={call}
                    alt=" telephone icon"
                    className={`cursor-pointer hover:border${" hover:bg-fuchsia-800"

                      }`}
                  />
                </a>
              </li>
            </ul>
          </div>
          <ScrollLink
            className="underline-offset-4 cursor-pointer  hover:underline"
            to="projects"
            smooth={true}
            duration={2000}
          >
            <button
              className={`${"bg-indigo-900"
                } text-white w-fit px-8 lg:px-12 py-4 rounded-full my-4 hover:bg-indigo-700`}
            >
              My Projects
            </button>
          </ScrollLink>
        </section>
        <section className="basis-[40%]  py-4 mx-auto pt-16 lg:pt-10 ">
          <img
            src={myphoto}
            alt="my photo"
            loading="lazy"
            className="object-cover rounded-xl  w-[30rem] md:w-[60rem] h-[20%] md:h-[80%] lg:h-[80%] "
          />
        </section>
      </main>
      <section id="aboutMe" className="  md:mt-10 ">
        <h2
          className={` ${" text-fuchsia-800"
            }  font-extrabold my-4 md:text-2xl lg:text-5xl px-8 md:px-10 lg:px-32`}
        >
          About me
        </h2>

        <div className=" custom-bg  text-white   flex flex-col gap-20  text-[0.7em] md:text-[0.88em] lg:text-[1.1em] md:justify-center p-4 lg:p-32 ">
          <p className="  leading-8 md:leading-[3rem]  text-center">
            I began my adventure in software engineering in 2021, my intial goal
            was to learn Python programming language so I could use it&apos;s
            capabilities in my bioinformatics research (I had been a biomedical
            researcher for 8 years before that), After discovering that I had a
            strong interest in programming, I made the decision to study the
            technologies used in software development.{" "}
          </p>

          <p className="leading-8 md:leading-[3rem]  text-center">
            In addition to <span>Python</span>, I&apos;ve horned my skills in{" "}
            <span>JavaScript</span>, <span>TypeScript</span> front-end and
            back-end technologies as well as frameworks . I&apos;ve completed a
            ton of courses and certifications that have sharpened my software
            development skills.
          </p>
        </div>
      </section>

      <section id="skills" className="flex flex-col px-8 md:px-10 lg:px-32 gap-10 py-10">
        <h2
          className={`font-extrabold md:text-2xl lg:text-5xl my-4 ${"text-fuchsia-800"
            } `}
        >
          Skills
        </h2>
        <div className=" flex flex-col md:flex-row text-center justfy-center gap-16 md:gap-20">
          <div className="basis-1/2">
            <img
              src={skills}
              alt="software development skills"
              className=" transform scale-x-[-1]  object-cover shadow-2xl"
            />
          </div>
          <div className="text-gray-900 basis-[78%] ">
            <p
              className={`font-extrabold ${"text-indigo-900"
                } md:text-3xl `}
            >
              I&apos;m proficient in the following programming languages and
              technologies
            </p>

            <div
              className={`flex flex-wrap   justify-center  gap-6 lg:gap-3 mt-12`}
            >
              <div className=" flex flex-col  items-center ">
                <IoLogoJavascript className="text-5xl md:text-8xl  cursor-pointer hover:text-indigo-900" />
                <span className="text-sm">JavaScript</span>
              </div>
              <div className=" flex flex-col  items-center">
                <FaPython className=" text-5xl md:text-8xl cursor-pointer hover:text-indigo-900" />
                <span className="text-sm">Python</span>
              </div>
              <div className=" flex flex-col  items-center">
                <SiTypescript className="text-5xl md:text-8xl cursor-pointer hover:text-indigo-900" />
                <span className="text-sm">TypeScript</span>
              </div>
              <div className=" flex flex-col  items-center">
                <FaHtml5 className="text-5xl md:text-8xl cursor-pointer hover:text-indigo-900" />
                <span className="text-sm">HTML5</span>
              </div>
              <div className=" flex flex-col  items-center">
                <SiCss3 className="text-5xl md:text-8xl cursor-pointer hover:text-indigo-900" />
                <span className="text-sm">CSS3</span>
              </div>
              <div className=" flex flex-col  items-center">
                <TbBrandReactNative className="text-5xl md:text-8xl  cursor-pointer hover:text-indigo-900" />
                <span className="text-sm">React Native</span>
              </div>
              <div className=" flex flex-col  items-center">
                <FaReact className="text-5xl md:text-8xl  cursor-pointer hover:text-indigo-900" />
                <span className="text-sm">ReactJs</span>
              </div>
              <div className=" flex flex-col  items-center">
                <TbBrandNextjs className="text-5xl md:text-8xl  cursor-pointer  hover:text-indigo-900" />
                <span className="text-sm">NextJs</span>
              </div>
              <div className=" flex flex-col  items-center">
                <FaNodeJs className="text-5xl md:text-8xl  cursor-pointer hover:text-indigo-900" />
                <span className="text-sm">NodeJs</span>
              </div>
              <div className=" flex flex-col  items-center">
                <SiMongodb className="text-5xl md:text-8xl  cursor-pointer hover:text-indigo-900" />
                <span className="text-sm">MongoDB</span>
              </div>
              <div className=" flex flex-col  items-center">
                <GrMysql className="text-5xl md:text-8xl  cursor-pointer hover:text-indigo-900" />
                <span className="text-sm">MySQl</span>
              </div>
              <div className=" flex flex-col  items-center">
                <IoLogoFirebase className="text-5xl md:text-8xl  cursor-pointer hover:text-indigo-900" />
                <span className="text-sm">Firebase</span>
              </div>
              <div className=" flex flex-col  items-center">
                <SiDjango className="text-5xl md:text-8xl  cursor-pointer hover:text-indigo-900" />
                <span className="text-sm">Django</span>
              </div>
              <div className=" flex flex-col  items-center">
                <SiTailwindcss className="text-5xl md:text-8xl  cursor-pointer hover:text-indigo-900" />
                <span className="text-sm">TailwindCSS</span>
              </div>
              <div className=" flex flex-col  items-center">
                <FaGithub className="text-5xl md:text-8xl  cursor-pointer hover:text-indigo-900" />
                <span className="text-sm">Git</span>
              </div>
              <div className=" flex flex-col  items-center">
                <SiJest className="text-5xl md:text-8xl  cursor-pointer hover:text-indigo-900" />
                <span className="text-sm">Jest</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="flex flex-col px-8 lg:px-28 md:py-20">
        <h2
          className={`font-extrabold my-4 md:text-2xl lg:text-5xl ${"text-fuchsia-800"
            } `}
        >
          Experience
        </h2>

        <div className="flex flex-row justify-between  gap-16 flex-wrap  py-[2rem] cursor-pointer ">
          {experienceData.map((exp) => (
            <Experience key={exp.id} experience={exp} />
          ))}
        </div>
      </section>
      <Myworks />
      <section id="openSource" className="flex flex-col p-8  lg:px-32 md:py-10">
        <h2
          className={`font-extrabold my-4 md:text-2xl lg:text-5xl ${"text-fuchsia-800"
            }  `}
        >
          Open Source Contribution
        </h2>

        <div className=" flex  flex-col md:flex-row items-center gap-10">
          <div
            className={`${"text-gray-900"
              } basis-1/2 flex flex-col gap-10 justify-center`}
          >
            <p className="text-justify  text-[1.2rem] md:text-[1.5rem] hyphens-auto">
              Within just one month as an active contributor to the caMicroscope
              open-source project, I've made significant strides. With
              approximately 40 pull requests submitted, I've been consistently
              engaged in improving the project.
            </p>
            <p className="text-justify text-[1.2rem] md:text-[1.5rem] hyphens-auto">
              {" "}
              One of my key contributions includes the development of Git
              workflows specifically designed to automate the testing of
              functions. This automation not only streamlines the testing
              process but also ensures the reliability and efficiency of the
              project's codebase.
            </p>
            <p className="text-justify text-[1.2rem] md:text-[1.5rem] hyphens-auto">
              {" "}
              My dedication and efforts have not only demonstrated my commitment
              to the project but also significantly advanced its development.
            </p>
          </div>
          <div className="hidden md:block">
            <img
              src={openSource}
              alt=" software developer image"
              className="transform scale-x-[-1] basis-1/2 object-cover h-[30rem]"
            />
          </div>
        </div>
      </section>

      <div id="contactMe" className="relative ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#312E81"
            fillOpacity="1"
            d="M0,64L26.7,58.7C53.3,53,107,43,160,37.3C213.3,32,267,32,320,69.3C373.3,107,427,181,480,218.7C533.3,256,587,256,640,229.3C693.3,203,747,149,800,154.7C853.3,160,907,224,960,213.3C1013.3,203,1067,117,1120,112C1173.3,107,1227,181,1280,176C1333.3,171,1387,85,1413,42.7L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
        <div className="text-sm absolute bottom-4 flex  flex-col gap-2 p-4 text-slate-100 ">
          <div className="hidden md:block">
            <ul className="flex flex-row gap-4">
              <li>
                <Link
                  to="https://github.com/gbengaoluwadahunsi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={github}
                    alt="github logo "
                    className={`cursor-pointer hover:border${"hover:bg-fuchsia-800"

                      }`}
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="https://linkedin.com/in/gbengaoluwadahunsi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={linkedin}
                    alt=" linkedin logo"
                    className={`cursor-pointer hover:border${" hover:bg-fuchsia-800"

                      }`}
                  />
                </Link>
              </li>
              <li>
                <a
                  href="mailto:gbengaoluwadahunsi01@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={google}
                    alt="google+ logo"
                    className={`cursor-pointer hover:border${" hover:bg-fuchsia-800"

                      }`}
                  />
                </a>
              </li>
              <li>
                <a href="tel:+601137483741">
                  <img
                    src={call}
                    alt=" telephone icon"
                    className={`cursor-pointer hover:border${" hover:bg-fuchsia-800"

                      }`}
                  />
                </a>
              </li>
            </ul>
          </div>
          <span className="absolute -bottom-3 w-[20rem]">
            &copy; Gbenga Oluwadahunsi {new Date().getFullYear()}
          </span>
        </div>
      </div>
      <BackArrowUp />
    </div>
  );
};



export default Homepage;
