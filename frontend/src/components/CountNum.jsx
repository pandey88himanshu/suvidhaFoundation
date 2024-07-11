import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaGlobe } from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";
import { LuGoal } from "react-icons/lu";

const CountNum = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this threshold as needed
  });

  return (
    <div ref={ref}>
      {inView && (
        <>
          <div className="relative w-full h-[60vh] bg-fixed bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2020/11/09/15/48/graph-5727061_1280.png')]">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90"></div>
            <div className="px-16 flex items-center justify-center">
              <div className="absolute py-4 top-0 text-white flex items-center justify-between flex-col lg:flex-row md:flex-row h-full w-11/12 gap-3">
                <div className="flex items-center justify-center gap-3">
                  <div className="lg:text-6xl  text-4xl text-[#FAB40C]">
                    <FaGlobe />
                  </div>
                  <div className="flex items-center justify-center flex-col lg:text-3xl md:text-2xl">
                    <p className="font-bold lg:text-6xl md:text-4xl text-4xl">
                      <CountUp end={15} duration={4} />
                      <sup>+</sup>
                    </p>
                    <p className="font-medium">Countries</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <div className="lg:text-6xl text-4xl  text-[#FAB40C]">
                    <MdVolunteerActivism />
                  </div>
                  <div className="flex items-center justify-center flex-col lg:text-3xl md:text-2xl">
                    <p className="font-bold lg:text-6xl md:text-4xl text-4xl">
                      <CountUp end={3} duration={4} />L<sup>+</sup>
                    </p>
                    <p className="font-medium">Volunteers</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <div className="lg:text-6xl text-4xl text-[#FAB40C]">
                    <LuGoal />
                  </div>
                  <div className="flex items-center justify-center flex-col lg:text-3xl md:text-2xl">
                    <p className="font-bold lg:text-6xl md:text-4xl text-4xl">
                      <CountUp end={1} duration={4} />
                      Cr<sup>+</sup>
                    </p>
                    <p className="font-medium">Internship Goal</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <div className="lg:text-6xl text-4xl text-[#FAB40C]">
                    <LuGoal />
                  </div>
                  <div className="flex items-center justify-center flex-col lg:text-3xl md:text-2xl">
                    <p className="font-bold lg:text-6xl md:text-4xl text-4xl">
                      <CountUp end={54} duration={4} />L<sup>+</sup>
                    </p>
                    <p className="font-medium">Trees Planted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CountNum;
