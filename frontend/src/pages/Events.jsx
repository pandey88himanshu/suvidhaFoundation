import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import EventsTop from "./EventsTop";
import { Footer } from "./Footer";

const Events = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <EventsTop />
      <div className="px-16 py-8">
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
                Join us in nurturing the Earth's embrace, one tree at a time.
                Together, let's create a greener tomorrow and breathe life into
                our planet.
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
                Unlock the power of generosity at our Fundraising Event. Your
                support will ignite positive change and uplift lives in our
                community.
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
                Providing warmth and dignity through clothing. Join us in our
                mission to bring smiles and comfort to those in need through our
                cloth distribution event.
              </p>
            </div>
          </div>
          <div class="relative flex lg:w-[25vw] lg:h-[70vh] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
              <img
                src="https://suvidhafoundationedutech.org/img/Events/Women's-Day.jpg"
                alt="ui/ux review check"
              />
            </div>
            <div class="p-6">
              <h4 class="block font-sans lg:text-2xl text-xl text-[#FAB40C] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Women's Day
              </h4>
              <p class="block border-l-2 border-l-[#FAB40C] pl-2 mt-3 font-sans lg:text-xl md:text-lg antialiased font-normal leading-relaxed text-gray-700">
                Celebrating the strength, resilience, and achievements of women
                worldwide on this special Women's Day. Together, let's honor
                their contributions.
              </p>
            </div>
          </div>
          <div class="relative flex lg:w-[25vw] lg:h-[70vh] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
              <img
                src="https://suvidhafoundationedutech.org/img/Events/Food-Donation.jpg"
                alt="ui/ux review check"
              />
            </div>
            <div class="p-6">
              <h4 class="block font-sans lg:text-2xl text-xl text-[#FAB40C] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Food Donation Initiatives by Our NGO
              </h4>
              <p class="block border-l-2 border-l-[#FAB40C] pl-2 mt-3 font-sans lg:text-xl md:text-lg antialiased font-normal leading-relaxed text-gray-700">
                Your generous contributions can fill empty plates and bring
                smiles to those in need. Together, we can create a world where
                everyone has access to nutritious meals.
              </p>
            </div>
          </div>
          <div class="relative flex lg:w-[25vw] lg:h-[70vh] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
              <img
                src="https://suvidhafoundationedutech.org/img/Events/Animal-Feeding.jpg"
                alt="ui/ux review check"
              />
            </div>
            <div class="p-6">
              <h4 class="block font-sans lg:text-2xl text-xl text-[#FAB40C] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Food Donation Initiatives by Our NGO
              </h4>
              <p class="block border-l-2 border-l-[#FAB40C] pl-2 mt-3 font-sans lg:text-xl md:text-lg antialiased font-normal leading-relaxed text-gray-700">
                Your generous contributions can fill empty plates and bring
                smiles to those in need. Together, we can create a world where
                everyone has access to nutritious meals.
              </p>
            </div>
          </div>
          <div class="relative flex lg:w-[25vw] lg:h-[70vh] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
              <img
                src="https://suvidhafoundationedutech.org/img/Events/Sanitary-Pads.jpg"
                alt="ui/ux review check"
              />
            </div>
            <div class="p-6">
              <h4 class="block font-sans lg:text-2xl text-xl text-[#FAB40C] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Sanitary Pads Distribution
              </h4>
              <p class="block border-l-2 border-l-[#FAB40C] pl-2 mt-3 font-sans lg:text-xl md:text-lg antialiased font-normal leading-relaxed text-gray-700">
                Breaking barriers and promoting menstrual health with our
                Sanitary Pad Initiative. Together, let's empower women and
                ensure access to safe and dignified hygiene.
              </p>
            </div>
          </div>
          <div class="relative flex lg:w-[25vw] lg:h-[70vh] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
              <img
                src="https://suvidhafoundationedutech.org/img/Events/Free-Workshop.jpg"
                alt="ui/ux review check"
              />
            </div>
            <div class="p-6">
              <h4 class="block font-sans lg:text-2xl text-xl text-[#FAB40C] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Free Workshops
              </h4>
              <p class="block border-l-2 border-l-[#FAB40C] pl-2 mt-3 font-sans lg:text-xl md:text-lg antialiased font-normal leading-relaxed text-gray-700">
                Discover new skills, ignite your passions, and embrace lifelong
                learning with our engaging and enriching free workshops.
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
                Unlock the power of generosity at our Fundraising Event. Your
                support will ignite positive change and uplift lives in our
                community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
