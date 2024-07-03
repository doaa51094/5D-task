import React from "react";
import portfolio from "../../assets/Portfolio.png";
import line from "../../assets/Underline_06.svg";
import Patron from "../../assets/Patron de Puntos8.png";
import Tareta1 from "../../assets/Mask group (2).png";
import Tareta2 from "../../assets/Mask group (3).png";

const Portfolio = () => {
  return (
    <div className="relative" id='portfolio'>
      <div className=" w-[10rem] relative lg:-top-20 -top-6 lg:ms-32 ms-10">
        <img src={portfolio} alt="portfolio" className="w-full" />
        <img src={line} alt="line" className="w-full" />
      </div>
      <div className="w-[85%] h-[2px] mb-3 bg-[#EDEEFF] mx-auto"></div>
      <div className="overflow-x-auto pb-4 relative z-10">
        <div className="flex gap-16 justify-center items-center mt-40 min-w-[1200px]">
          <div 
          className="relative lg:w-[400px] w-[350px] h-[250px] rounded-[40px] bg-white card"
          >
            <img 
              src={Tareta1} 
              alt="Tareta1" 
              className="lg:w-[418px] w-[380px] h-[260px] rounded-[16px] absolute -top-[40%] left-1/2 transform -translate-x-1/2"
            />
            <h4 className="mt-[170px] ps-[20px] text-gradient">Eventos Premium</h4>
            <p className="mt-[10px] ps-[20px] text-[#5F6073] font-normal leading-[14px] text-[14px]">Elegante - Serio - Estatus</p>
          </div>
          <div className="relative lg:w-[400px] w-[350px] h-[250px] rounded-[40px] bg-white card">
            <img 
              src={Tareta2} 
              alt="Tareta1" 
              className="lg:w-[418px] w-[380px] h-[260px] rounded-[16px] absolute -top-[40%] left-1/2 transform -translate-x-1/2"
            />
            <h4 className="mt-[170px] ps-[20px] text-gradient">Mi Portal U</h4>
            <p className="mt-[10px] ps-[20px] text-[#5F6073] font-normal leading-[14px] text-[14px]">Amigable - Dashboard - Simple</p>
          </div>
          <div className="relative lg:w-[400px] w-[350px] h-[250px] rounded-[40px] bg-white card">
            <img 
              src={Tareta1} 
              alt="Tareta1" 
              className="lg:w-[418px] w-[380px] h-[260px] rounded-[16px] absolute -top-[40%] left-1/2 transform -translate-x-1/2"
            />
            <h4 className="mt-[170px] ps-[20px] text-gradient">A&C App</h4>
            <p className="mt-[10px] ps-[20px] text-[#5F6073] font-normal leading-[14px] text-[14px]">Elegante - Serio - Estatus</p>
          </div>
          
        </div>
      </div>
    
      <div className="absolute bottom-0 left-0 z-0">
        <img
          src={Patron}
          alt="Patron"
          className="w-32"
        />
      </div>
    </div>
  );
};

export default Portfolio;
