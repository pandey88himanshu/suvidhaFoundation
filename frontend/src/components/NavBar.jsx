import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
  const [click, setClick] = useState(true);

  function handleClick() {
    setClick(!click);
  }

  return (
    <>
      <div className=" md:block lg:hidden relative ">
        <div className="absolute z-30 text-white right-0 px-16 lg:top-24 top-8 ">
          <button onClick={handleClick}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      <div className="absolute text-[white] z-10 flex items-center  justify-between w-full  lg:top-20 top-4">
        <div className="px-16">
          <Link to={"/"}>
            <img
              src="https://suvidhafoundationedutech.org/img/SuvidhaLogo.png"
              alt=""
              className="lg:w-[225px] md:w-[225px] w-[200px] h-auto "
            />
          </Link>
        </div>
        <div className="lg:block hidden">
          <ul className="flex items-center justify-between gap-6 px-16">
            <Link
              to="/gallery"
              className="hover:text-[#FAB40C] text-lg font-medium"
            >
              Gallery
            </Link>
            <Link
              to="/events"
              className="hover:text-[#FAB40C] text-lg font-medium"
            >
              Events
            </Link>
            <Link
              to="/ourdonors"
              className="hover:text-[#FAB40C] text-lg font-medium"
            >
              Our Donors
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#FAB40C] text-lg font-medium"
            >
              Contact
            </Link>
          </ul>
        </div>
        <div className="lg:block hidden ">
          <ul className="flex items-center justify-between gap-4 px-16">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform"
              target="_blank"
              className="text-lg bg-[#FAB40C] text-white font-semibold px-6 py-1 rounded hover:text-[#FAB40C] hover:bg-white transition-all duration-300"
            >
              Internship
            </a>
            <Link
              to="/donate"
              className="text-lg bg-[#FAB40C] text-white font-semibold px-6 py-1 rounded hover:text-[#FAB40C] hover:bg-white transition-all duration-300"
            >
              Donate
            </Link>
          </ul>
        </div>
      </div>
      <div className={`relative ${click ? "hidden" : "block"}`}>
        <div className="absolute z-50 right-0 px-10 top-9">
          <button className="text-2xl text-white" onClick={handleClick}>
            <RxCross2 />
          </button>
        </div>
        <div className="absolute z-40 text-white bg-red-900 w-screen h-screen flex items-center justify-center">
          <ul className="flex flex-col items-center justify-between gap-6 px-16">
            <Link
              to="/gallery"
              className="hover:text-[#FAB40C] text-lg font-medium"
            >
              Gallery
            </Link>
            <Link
              to="/events"
              className="hover:text-[#FAB40C] text-lg font-medium"
            >
              Events
            </Link>
            <Link
              to="/ourdonors"
              className="hover:text-[#FAB40C] text-lg font-medium"
            >
              Our Donors
            </Link>
            <Link
              to="contact"
              className="hover:text-[#FAB40C] text-lg font-medium"
            >
              Contact
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform"
              target="_blank"
              className="text-lg bg-[#FAB40C] text-white font-semibold px-6 py-1 rounded hover:text-[#FAB40C] hover:bg-white transition-all duration-300"
            >
              Internship
            </a>
            <Link
              to="/donate"
              className="text-lg bg-[#FAB40C] text-white font-semibold px-6 py-1 rounded hover:text-[#FAB40C] hover:bg-white transition-all duration-300"
            >
              Donate
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
