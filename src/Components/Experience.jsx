import React, { useState } from "react";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const Experience = ({ experience }) => {
  return (
    <div className="w-[24rem] h-80 flip-card">
      <div className="flex flex-row bg-white shadow-[0_20px_60px_-15px_rgba(75,0,130,0.8)] text-gray-900 relative w-[100%] h-[100%] flip-card-inner rounded-2xl text-center ">
        <div className="w-[10%] h-full bg-fuchsia-900 rounded-tl-2xl ">
          <div className="w-full h-[80%] bg-indigo-900 rounded-tl-3xl  "></div>
        </div>
        <div className="w-[90%] border border-none bg-white m-auto rounded-2xl">
          <div className={`0 w-full h-full`}>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{experience.title}</h2>
              <p className="text-gray-600">{`@${experience.company}`}</p>
            </div>
          </div>
          <div>
            <span>{experience.startDate}</span> -{" "}
            <span>{experience.endDate}</span>
          </div>
        </div>
        <div className="flip-card-back text-sm flex flex-row ">
          <div className="w-[90%] bg-white text-gray-900 m-auto flex flex-col gap-4 px-2">
            <h2 className="text-xl font-bold mb-2">Job details</h2>
            <p className="items-center flex flex-row justify-center gap-8">
              <RiArrowRightDoubleFill className="text-4xl text-white bg-indigo-900" />
              <span className="basis-[80%] text-justify hyphens-auto">
                {experience.details[0]}
              </span>
            </p>
            <p className="items-center flex flex-row justify-center gap-8">
              <RiArrowRightDoubleFill className="text-4xl text-white bg-indigo-900" />
              <span className="basis-[80%]  text-justify hyphens-auto">
                {experience.details[1]}
              </span>
            </p>
          </div>
          <div className=" h-full bg-fuchsia-900 rounded-tr-2xl "></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
