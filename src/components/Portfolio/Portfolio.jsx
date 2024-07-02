import React from "react";
import portfolio from "../../assets/Portfolio.png";
import line from "../../assets/Underline_06.svg";
import projects from "../../assets/Portfolio (2).png";
import Patron from "../../assets/Patron de Puntos8.png";
const Portfolio = () => {
  return (
    <div className="relative">
      <div className="w-[13%] relative -top-20 ms-32">
        <img src={portfolio} alt="portfolio" className="w-full" />
        <img src={line} alt="line" className="w-full" />
      </div>
      <div className="w-[85%] h-[2px] mb-3 bg-[#EDEEFF] mx-auto"></div>
      <div className="ms-5 py-4 flex justify-center items-center text-center ">
        <img src={projects} alt="" className="w-full"/>
      </div>
      <div><img src={Patron} alt="Patron" className="absolute bottom-2 left-0 w-32 -z-10"/></div>
    </div>
  );
};

export default Portfolio;
