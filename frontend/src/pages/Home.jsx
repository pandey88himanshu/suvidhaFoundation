import React from "react";
import Hero from "./Hero";
import About from "./About";
import ApplyInternship from "./ApplyInternship";
import WhatWeDo from "./WhatWeDo";
import CountNum from "../components/CountNum";
import SuvidhaEvent from "./SuvidhaEvent";
import Collaborator from "./Collaborator";
import OurTeam from "./OurTeam";
import Testimonial from "./Testimonial";
import { Footer } from "./Footer";

const Home = () => {
  return (
    <>
      <div className=" overflow-hidden">
        <Hero />
      </div>
      <div className="pt-9">
        <About />
      </div>
      <div className="pt-9 overflow-hidden">
        <ApplyInternship />
      </div>
      <div className="pt-9 overflow-hidden">
        <WhatWeDo />
      </div>
      <div className="pt-9 overflow-hidden">
        <CountNum />
      </div>
      <div className="pt-9">
        <SuvidhaEvent />
      </div>
      <div className="pt-9">
        <Collaborator />
      </div>
      <div className="pt-9">
        <OurTeam />
      </div>
      <div className="pt-9">
        <Testimonial />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
