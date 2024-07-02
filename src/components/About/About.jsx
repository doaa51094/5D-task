import React from "react";
import Colombian from "../../assets/Group 28.png";
import Highlight from "../../assets/Highlight_04.png";
import Patron6 from "../../assets/Patron de Puntos 6.png";
import Patron5 from "../../assets/Patron de Puntos5.png";


const About = () => {
  return (
    <div className="about relative flex flex-col justify-center items-center">
      <h2 className="text-white font-semibold lg:text-[56px] text-[40px] leading-[67.2px] pt-12">
        About Me
      </h2>
      <div className="vectorCuadros flex justify-center items-center">
        <div className="relative flex justify-center items-center  w-[70%] mb-40">
          <img src={Colombian} alt="Colombian" className="w-full" />
          <div className="absolute lg:top-28 top-0  lg:-right-6 -right-6">
            <img src={Highlight} alt="Highlight" className="md:w-32 w-16" />
          </div>
        </div>
      </div>
      <div className="absolute top-[30%] left-0">
        {" "}
        <img src={Patron6} alt="Patron6" className="lg:w-16 w-12" />
      </div>
      <div className="absolute bottom-[15%] right-0">
        {" "}
        <img src={Patron5} alt="Patron5" className="lg:w-[120px] w-16" />
      </div>
    </div>
  );
};

export default About;
