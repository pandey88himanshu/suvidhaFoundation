import React from "react";
import TopBar from "../components/TopBar";
import Slider from "../components/Slider";
import NavBar from "../components/NavBar";
import HeroText from "../components/HeroText";

const Hero = () => {
  return (
    <>
      <div className="  h-screen w-screen">
        <TopBar />
        <NavBar />
        <HeroText />
        <Slider />
      </div>
    </>
  );
};

export default Hero;
