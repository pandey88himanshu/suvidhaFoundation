import React, { useState } from "react";

const About = () => {
  const [about, setAbout] = useState(true);
  const [mission, setMission] = useState(false);
  const [vision, setVision] = useState(false);
  function handleAbout() {
    setAbout(!about);
    setMission(false);
    setVision(false);
  }
  function handleMission() {
    setMission(!mission);
    setAbout(false);
    setVision(false);
  }
  function handleVision() {
    setVision(!vision);
    setAbout(false);
    setMission(false);
  }
  return (
    <>
      <div className="flex justify-between px-16 flex-col lg:flex-row gap-6 w-full h-full mx-auto">
        <div className="lg:w-3/6 w-full ">
          <img
            src="https://suvidhafoundationedutech.org/img/about.jpg"
            alt=""
            className="lg:w-[40vw] w-full"
          />
        </div>
        <div className="lg:w-3/6 w-full">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-4 ">
              <div>
                <p className="lg:text-2xl text-xl font-semibold text-[#FAB40C]">
                  Learn About Us
                </p>
              </div>
              <div className="font-bold lg:text-5xl md:text-4xl text-2xl">
                <p>Suvidha Foundation</p>
                <p>(Suvidha Mahila Mandal)</p>
              </div>
            </div>
            <div className="flex justify-around  py-3 lg:text-lg md:tetx-lg font-semibold">
              <div
                onClick={handleAbout}
                className={`${
                  about ? "selected" : ""
                } w-full h-full pb-4 border-b-2 border-blue-500 flex items-center justify-center hover:border-[#FAB40C] hover:text-[#FAB40C] transition-all duration-300 cursor-pointer`}
              >
                <button onClick={handleAbout}>About</button>
              </div>
              <div
                onClick={handleMission}
                className={`${
                  mission ? "selected" : ""
                } w-full h-full pb-4 border-b-2 border-blue-500 flex items-center justify-center hover:border-[#FAB40C] hover:text-[#FAB40C] transition-all duration-300 cursor-pointer`}
              >
                <button onClick={handleMission}>Mission</button>
              </div>
              <div
                onClick={handleVision}
                className={`${
                  vision ? "selected" : ""
                } w-full h-full pb-4 border-b-2 border-blue-500 flex items-center justify-center hover:border-[#FAB40C] hover:text-[#FAB40C] transition-all duration-300 cursor-pointer`}
              >
                <button onClick={handleVision}>Vision</button>
              </div>
            </div>
            <div className=" text-xl">
              <div
                className={`${
                  about ? "block" : "hidden"
                } lg:text-lg font-medium md:text-lg text-sm`}
              >
                <p>
                  Suvidha Mahila Mandal is a non-profit organization working to
                  impart education among the financially challenged sections to
                  help them realize parity in education and strength of little
                  minds in building a promising future. The organization has
                  provisions of student internships, student mentorship and the
                  scope to volunteer. Through these programmes, the organization
                  aims to achieve the vision of imparting innovative education
                  that stays with the students forever and equip them for the
                  unforeseen future.
                </p>
              </div>
              <div
                className={`${
                  mission ? "block" : "hidden"
                } lg:text-lg font-medium md:text-lg text-sm`}
              >
                <p>
                  To Inspire Students, help them Innovate and let them Integrate
                  to build the next generation humankind.
                </p>
                <p>
                  To Run Food Donation And Awareness Campaign In Rural Region.
                </p>
              </div>
              <div
                className={`${
                  vision ? "block" : "hidden"
                } lg:text-lg font-medium md:text-lg text-sm`}
              >
                <p>
                  To build Next Generation Entrepreneur, by providing them a
                  Skill-Based Education.
                </p>
                <p>
                  To Provide Internship, Training And Workshops and Quality
                  Education All Over The World..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
