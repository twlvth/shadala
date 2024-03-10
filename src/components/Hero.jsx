import React from "react";
import { FaCalendarPlus, FaBox } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="font-Montserrat bg-gradient-to-b from-white via-white to-teal-200 pb-2">
      <div className="max-w-[800px] my-[-96px] w-full h-[60vh] mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl md:py-6 font-extrabold p-2 text-[#131313]">
          Sinong magdadala?
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-[#10969fa9]">
            Siya! Dala!
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-extrabold pl-2 text-[#10969f]"
            strings={["SHADALA!"]}
            typeSpeed={180}
            backSpeed={100}
            loop
          />
        </div>
        <div className="flex space-x-4 mt-6 justify-center p-3">
          <a href="/book">
            <button
              type="button"
              className="flex items-center text-white bg-[#10969f] hover:bg-[#20848b] font-medium rounded-[20px] px-5 py-3"
            >
              <span className="flex items-center font-bold">
                <FaCalendarPlus className="mr-1" /> Book Now
              </span>
            </button>
          </a>
          <div className="flex items-center w-[60%]">
            <input
              className="w-full h-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-l-[20px] pr-3 pl-5"
              id=""
              type="text"
              placeholder="Tracking Number"
            />
            <button
              type="button"
              className="w-[60%] text-white bg-[#FFC65B] hover:bg-[#dfa232] font-medium rounded-r-[20px] px-5 py-3"
            >
              <span className="flex items-center font-bold">
                <FaBox className="mr-1" />
                Track Parcel
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
