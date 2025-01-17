import React from "react";
import homeImg from "../../assets/Allura UI Windows.png";
import patron from "../../assets/Patron de Puntos.png";
import patron1 from "../../assets/Patron de Puntos (1).png";
import name from "../../assets/name.png";
import circle from "../../assets/Vector.png";
import arrow from "../../assets/Vector 1.png";
import arrow2 from "../../assets/Arrow_01.svg";
import Navbar from "../Navbar";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
   <>
    <div className=" grid grid-cols-6 relative pb-24">
      <div className="lg:col-span-3 col-span-6 flex justify-center items-center ">
        <div className="lg:w-9/12 w-[90%] relative">
          <img src={name} className="w-full h-full" alt='user name'/>
          <p className="font-light text-[14px] leading-[21px] lg:w-[60%] w-[75%] mt-10">
            I am a UI/UX Designer, I like to make interfaces simple and
            aesthetically pleasing for users; The idea is not to create an
            interface for creating it, it is that users prefer you because your
            product is easy to use.
          </p>
          <div className="w-full relative">
          <button className=" mt-9 font-semibold text-white text-[14px] leading-[36px] flex justify-center 
          items-center bg-gradient-to-r from-[#B224EF] to-[#7579FF] lg:px-10 lg:py-1.5 px-6 py-1 rounded-[16px]">
            Contact Me!
            <div className="relative flex ms-1.5 justify-center items-center">
              <img src={circle} className="w-[20px] relative" alt='circle'/>
              <div className="absolute inset-0 flex justify-center items-center">
                <img src={arrow} className="w-[5px]" alt='arrow'/>
              </div>
            </div>
            <div className="arrow absolute w-1/2 lg:-bottom-32  right-4">
      <img src={arrow2} alt="SVG Icon" />
      </div>
          </button>
          </div>
         
          <div className="lg:block hidden absolute bottom-[-2rem] left-[-17%]">
        <img src={patron1} className="w-[60px]" alt='patron'/>
      </div>
     

        </div>
      </div>
      <div className="col-span-3  lg:flex justify-center items-center hidden">
        <img src={homeImg} className="lg:w-[90%]" alt='home img'/>
      </div>
      <div className="lg:block hidden absolute top-[5rem] right-0">
        <img src={patron} className="w-[90px]" alt='arrow '/>
      </div>
     
    </div>
   </>
  );
};

export default Home;
