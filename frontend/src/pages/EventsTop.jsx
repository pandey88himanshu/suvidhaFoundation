import React from "react";
import { Link } from "react-router-dom";
const EventsTop = () => {
  return (
    <div>
      <div className="relative">
        <div
          className="bg-cover bg-center h-[35vh] md:h-[40vh] lg:h-[50vh] relative "
          style={{
            backgroundImage: `url('https://suvidhafoundationedutech.org/img/Banner/Suvidha-event.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80"></div>
          <div className="absolute inset-0 flex items-center justify-center top-16 flex-col gap-4">
            <h1 className=" lg:text-4xl md:text-3xl text-xl font-bold text-[#FAB40C]  ">
              Suvidha Foundation Events
            </h1>
            <p className="text-white text-xl font-semibold">
              <Link
                to={"/"}
                className="hover:text-[#FAB40C] transition-all duration-300"
              >
                Home
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center pt-8 flex items-center justify-center flex-col gap-4">
          <p className="lg:text-3xl md:text-2xl text-xl font-bold text-[#FAB40C]">
            Events
          </p>
          <p className="lg:text-4xl md:text-3xl text-xl lg:font-semibold md:font-medium ">
            Our Charity Events: Celebrating Our Impact Together
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsTop;
