import React from "react";
import OutlineBtn from "./OutlineBtn";

const HeroText = () => {
  return (
    <>
      <div className="absolute lg:w-[80vw] md:w-[70vw] w-[60vw] z-10 text-white flex items-center justify-center h-[60vh] mx-auto left-0 right-0 bottom-28 flex-col text-center gap-11">
        <div className="flex items-center justify-center flex-col gap-6">
          <p className="font-semibold text-4xl w-4/6 md:text-4xl md:w-full">
            Welcome to{" "}
            <span className="text-[#FAB40C] font-bold">Suvidha Foundation</span>
          </p>
          <p className="text-5xl font-extrabold hidden md:block">
            Empowering <span className="text-[#FAB40C]">Minds</span>, Shaping{" "}
            <span className="text-[#FAB40C]">Futures</span>
          </p>
          <p className="text-lg hidden md:block">
            Join us in providing innovative education and opportunities for
            underprivileged students to build a brighter tomorrow.Suvidha Mahila
            Mandal is dedicated to transforming lives through education. We
            offer student internships, mentorship programs, and volunteer
            opportunities to support financially challenged students in
            achieving educational equality and realizing their full potential.
          </p>
        </div>
        <div>
          <ul className="flex flex-col items-center justify-between gap-10 md:flex-row">
            <OutlineBtn name={"Donate"} to={"/donate"} />
            <OutlineBtn name={"Watch Video"} to={"/watchvideos"} />
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroText;
