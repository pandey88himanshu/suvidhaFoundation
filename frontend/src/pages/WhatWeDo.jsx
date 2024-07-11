import React from "react";
import { FaBowlFood } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { RiTreeFill } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
const WhatWeDo = () => {
  return (
    <>
      <div>
        <div>
          <section className=" ">
            <div className="px-2">
              <div className="flex flex-wrap">
                <div className="w-full px-4">
                  <div className="mx-auto mb-12 max-w-[50vw] text-center lg:mb-20">
                    <span className="mb-2 block text-lg font-semibold text-primary">
                      What We Do?
                    </span>
                    <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark text-black sm:text-4xl md:text-[40px]">
                      Causes for a Sustainable Future
                    </h2>
                    <p className="text-base text-body-color dark:text-dark-6 hidden md:block">
                      We support causes that promote a sustainable future,
                      focusing on environmental preservation and renewable
                      energy. Our goal is to create a world where both people
                      and the planet can thrive.
                    </p>
                  </div>
                </div>
              </div>

              <div className="-mx-4 flex flex-wrap">
                <ServiceCard
                  title="Healthy Food"
                  details="By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need."
                  icon={<FaBowlFood />}
                />
                <ServiceCard
                  title="Social Awareness"
                  details="We provide resources, conduct awareness campaigns, and facilitate access to hygiene facilities, aiming to create a healthier environment and prevent the spread of diseases."
                  icon={<BiWorld />}
                />
                <ServiceCard
                  title="Tree Plantation"
                  details="Through community engagement and active participation, we successfully planted thousands of trees, fostering a greener and healthier ecosystem for future generations."
                  icon={<RiTreeFill />}
                />
                <ServiceCard
                  title="Health Care"
                  details="We believe that access to healthcare is a fundamental right, and we work tirelessly to ensure that healthcare services are accessible, affordable, and of high quality for those in need."
                  icon={<MdHealthAndSafety />}
                />
                <ServiceCard
                  title="Primary Education"
                  details="By collaborating with local communities and educators, we aim to empower children with the knowledge and skills they need for a brighter future."
                  icon={<FaBookReader />}
                />
                <ServiceCard
                  title="Social Care"
                  details="Our programs encompass a range of support services, including counseling, vocational training, and advocacy, with the goal of empowering individuals."
                  icon={<FaHandsHelping />}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-16 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] p-10 shadow-2 hover:shadow-lg bg-zinc-100 md:px-7 xl:px-10 cursor-pointer transition-all duration-300">
          <div className="mb-8 flex h-[70px] w-[70px] items-center text-white text-3xl justify-center rounded-2xl bg-[#FAB40C]">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark text-black">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
