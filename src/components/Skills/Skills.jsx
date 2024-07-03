import React from "react";
import patron from "../../assets/Patron de Puntos (2).png";
import patron3 from "../../assets/Patron de Puntos 3.png";
import skills from "../../assets/Skills.png";
import xd from "../../assets/XD.svg";
import IA from "../../assets/IA.svg";
import ui from "../../assets/UI.svg";
import ux from "../../assets/UX.svg";
import Prototyping from "../../assets/Prototyping.svg";
import BoxModel from "../../assets/Box Model.svg";
import BusinessModel from "../../assets/Business Model Canvas.svg";
import DesignSystem from "../../assets/Desing Systems.svg";

const Skills = () => {
  return (
    <div className="lg:mt-20 relative mb-10" id="skills">
      <div className="flex justify-start items-center">
        <img src={patron} alt="patron de puntos" className="lg:w-16 w-10" />
        <img src={skills} alt="skills" className="md:w-44 w-[35%] mb-10 ps-5" />
      </div>
      <div className="w-[85%] h-[2px] my-3 bg-[#EDEEFF] mx-auto"></div>

      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-4 w-full">
        <div className="flex w-full items-start justify-center">
          <img src={xd} alt="xd" className="lg:w-[40%] w-[50%]" />
        </div>
        <div className="flex w-full items-start justify-center">
          <img src={ui} alt="UI" className="lg:w-[40%] w-[50%]" />
        </div>

        <div className="col-span-2 lg:hidden w-[85%] h-[2px] my-2 bg-[#EDEEFF] mx-auto"></div>

        <div className="flex w-full items-start justify-center">
          <img src={IA} alt="IA" className="lg:w-[40%] w-[50%]" />
        </div>
        <div className="flex w-full items-start justify-center">
          <img src={ux} alt="UX" className="lg:w-[40%] w-[50%]" />
        </div>
      </div>

      <div className="w-[85%] h-[2px] my-2 bg-[#EDEEFF] mx-auto"></div>

      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-4 w-full">
        <div className="flex w-full items-start justify-center">
          <img src={Prototyping} alt="Prototyping" className="lg:w-[40%] w-[50%]" />
        </div>
        <div className="flex w-full items-start justify-center">
          <img src={BoxModel} alt="BoxModel" className="lg:w-[40%] w-[50%]" />
        </div>
        <div className="col-span-2 lg:hidden w-[85%] h-[2px] my-2 bg-[#EDEEFF] mx-auto"></div>

        <div className="flex w-full items-start justify-center">
          <img src={BusinessModel} alt="BusinessModel" className="lg:w-[40%] w-[50%]" />
        </div>
        <div className="flex w-full items-start justify-center">
          <img src={DesignSystem} alt="DesignSystem" className="lg:w-[40%] w-[50%]" />
        </div>
      </div>
      <div>
      <img src={patron3} alt="patron de puntos" className="w-24" />
      </div>
      <div className="absolute top-[47%] right-0 rotate-180 lg:block hidden -z-50">
      <img src={patron3} alt="patron de puntos" className="w-24" />
      </div>
    </div>
  );
};

export default Skills;
