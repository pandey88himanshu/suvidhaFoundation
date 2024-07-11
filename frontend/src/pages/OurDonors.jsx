import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import { Footer } from "./Footer";
import OurDonorsTop from "./OurDonorsTop";

const OurDonors = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <OurDonorsTop />
      <Footer />
    </>
  );
};

export default OurDonors;
