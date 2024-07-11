import React from "react";
import OutlineBtn from "../components/OutlineBtn";

const SuvidhaEvent = () => {
  return (
    <>
      <div className="">
        <div className="px-16">
          <div className="flex flex-col">
            <div className="pb-8 font-bold flex text-center items-center justify-center flex-col gap-2">
              <p className="lg:text-3xl md:text-2xl text-xl  font-semibold text-[#FAB40C]">
                Suvidha Events
              </p>
              <p className="lg:text-4xl md:text-3xl text-2xl">
                Our Charity Events: Celebrating Our Impact Together
              </p>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div class="relative flex lg:w-[25vw] lg:h-[70vh] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                  <img
                    src="https://suvidhafoundationedutech.org/img/Events/Tree-Plantation.jpg"
                    alt="ui/ux review check"
                  />
                </div>
                <div class="p-6">
                  <h4 class="block font-sans lg:text-2xl text-xl text-[#FAB40C] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Tree Plantation
                  </h4>
                  <p class="block border-l-2 border-l-[#FAB40C] pl-2 mt-3 font-sans lg:text-xl md:text-lg antialiased font-normal leading-relaxed text-gray-700">
                    Join us in nurturing the Earth's embrace, one tree at a
                    time. Together, let's create a greener tomorrow and breathe
                    life into our planet.
                  </p>
                </div>
              </div>
              <div class="relative flex lg:w-[25vw] lg:h-[70vh] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                  <img
                    src="https://suvidhafoundationedutech.org/img/Events/Fundraising.jpg"
                    alt="ui/ux review check"
                  />
                </div>
                <div class="p-6">
                  <h4 class="block font-sans lg:text-2xl text-xl text-[#FAB40C] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Fundraising Events
                  </h4>
                  <p class="block border-l-2 border-l-[#FAB40C] pl-2 mt-3 font-sans lg:text-xl md:text-lg antialiased font-normal leading-relaxed text-gray-700">
                    Unlock the power of generosity at our Fundraising Event.
                    Your support will ignite positive change and uplift lives in
                    our community.
                  </p>
                </div>
              </div>
              <div class="relative flex lg:w-[25vw] lg:h-[70vh] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                  <img
                    src="https://suvidhafoundationedutech.org/img/Events/Cloths-Distribution.jpg"
                    alt="ui/ux review check"
                  />
                </div>
                <div class="p-6">
                  <h4 class="block font-sans lg:text-2xl text-xl text-[#FAB40C] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Cloths Distribution
                  </h4>
                  <p class="block border-l-2 border-l-[#FAB40C] pl-2 mt-3 font-sans lg:text-xl md:text-lg antialiased font-normal leading-relaxed text-gray-700">
                    Providing warmth and dignity through clothing. Join us in
                    our mission to bring smiles and comfort to those in need
                    through our cloth distribution event.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4 flex items-center justify-center">
              <OutlineBtn name={"View All"} to={"/events"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuvidhaEvent;
