import React from "react";
import OutlineBtn from "../components/OutlineBtn";

const ApplyInternship = () => {
  return (
    <>
      <div>
        <div className="min-h-[50vh] relative bg-fixed bg-cover bg-center bg-[url('https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90"></div>
          <div className="absolute text-white flex items-center justify-center flex-col h-full px-16">
            <div className="flex items-center justify-center flex-col gap-4">
              <p className="lg:text-3xl text-[#FAB40C] font-bold md:text-xl text-center text-sm">
                Apply For Internship and Mentorship Programs
              </p>
              <p className="lg:text-xl lg:font-medium md:font-medium md:text-lg text-center text-sm font-light">
                Seize the opportunity to gain invaluable experience and
                jumpstart your career with an internship that propels you
                towards success.
              </p>
            </div>
            <div className="flex items-center justify-center flex-col gap-5 pt-5">
              <p className="text-center lg:text-lg font-light hidden lg:block md:block">
                The Suvidha Foundation Internship Program is a unique
                opportunity for students and recent graduates to gain experience
                and contribute to the work of Suvidha Foundation. Along with
                undertaking tasks related to their specific skills, we encourage
                interns to develop a reputable professional portfolio.
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded font-medium border border-[#FAB40C] px-8 py-2 text-lg cursor-pointer hover:text-[#FAB40C] hover:bg-white transition-all duration-300 hover:border-white"
              >
                Apply Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyInternship;
