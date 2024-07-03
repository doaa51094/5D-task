import React from "react";
import userImg from "../assets/Morado.png";
import textalign from "../assets/textalign-right.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center my-9">
      <nav className="flex justify-between items-center bg-[#1B1C37] w-[90%] h-14 lg:px-12 px-6 rounded-[10px]">
        <div className="flex gap-1 text-white font-medium lg:text-[17px] text-[12px] leading-6">
          <img src={userImg} alt="user img" className="w-[30px] pe-1" />
          Hassan Abu Ali
        </div>
        <div className="text-white font-medium text-[17px] leading-6 h-14 lg:block hidden">
          <ul className="flex justify-center items-center space-x-6 h-full">
            <li className="relative h-full flex justify-center items-center group">
              <Link
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                to="home"
                className="flex justify-center items-center h-full cursor-pointer"
                activeClassName="active-link"
              >
                Home
              </Link>
              <div className="absolute bottom-0 w-12 h-[5px] rounded-[10px] bg-[#7579FF] "></div>
            </li>
            <li className="relative h-full flex justify-center items-center group">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                className="flex justify-center items-center h-full cursor-pointer"
                activeClassName="active-link"
              >
                Skills
              </Link>
              <div className="absolute bottom-0 w-12 h-[5px] rounded-[10px] bg-[#7579FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </li>
            <li className="relative h-full flex justify-center items-center group">
              <Link
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-120}
                duration={500}
                to="portfolio"
                className="flex justify-center items-center h-full cursor-pointer"
                activeClassName="active-link"
              >
                Portfolio
              </Link>
              <div className="absolute bottom-0 w-12 h-[5px] rounded-[10px] bg-[#7579FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </li>
            <li className="relative h-full flex justify-center items-center group">
              <Link
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                to="about"
                className="flex justify-center items-center h-full cursor-pointer"
                activeClassName="active-link"
              >
                Blog
              </Link>
              <div className="absolute bottom-0 w-12 h-[5px] rounded-[10px] bg-[#7579FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </li>
          </ul>
        </div>
        <div className="lg:block hidden">
          <button className="font-medium text-[17px] leading-6 bg-[#7579FF] text-white rounded-[8.5px] px-4 py-1.5">
            Contact Me
          </button>
        </div>
        <div className="w-[19px] lg:hidden block">
          <img src={textalign} alt="textalign" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
