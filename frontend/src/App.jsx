import React from "react";
import { Routes, Route } from "react-router-dom";
import Events from "./pages/Events";
import PhotoGallery from "./pages/PhotoGallery";
import Donate from "./pages/Donate";
import WatchVideos from "./pages/WatchVideos";
import OurDonors from "./pages/OurDonors";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/watchvideos" element={<WatchVideos />} />
        <Route path="/ourdonors" element={<OurDonors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
