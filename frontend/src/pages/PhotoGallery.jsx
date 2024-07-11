import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import PhotoGalleryTop from "./PhotoGalleryTop";
import { Footer } from "./Footer";

const PhotoGallery = () => {
  const data = [
    {
      imageLink:
        "https://suvidhafoundationedutech.org/img/Gallery/Workshops.jpg",
      hoverText: "Free Workshops",
      link: "https://drive.google.com/drive/u/1/folders/11DrNvVoYiIlmKUDW2AvsiklJTuIDL3Gk",
    },
    {
      imageLink:
        "https://suvidhafoundationedutech.org/img/Gallery/BooksDistribution.jpg",
      hoverText: "Books Distribution",
      link: "https://drive.google.com/drive/u/1/folders/1FKG4shImI-9JRavKIP-0b-Tp9Hd205VI",
    },
    {
      imageLink:
        "https://suvidhafoundationedutech.org/img/Gallery/OnlineEvents.jpg",
      hoverText: "Online Events",
      link: "https://drive.google.com/drive/u/1/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms",
    },
    {
      imageLink:
        "https://suvidhafoundationedutech.org/img/Gallery/ClothsDistribution.jpg",
      hoverText: "Cloths Distribution",
      link: "https://drive.google.com/drive/u/1/folders/1nOFKvOjhWsbfVVPGumOfpLrFe2364_zK",
    },
    {
      imageLink:
        "https://suvidhafoundationedutech.org/img/Gallery/TreePlantation.jpg",
      hoverText: "Tree Plantation",
      link: "https://drive.google.com/drive/u/1/folders/1V5Owzjc00GT_U2Mw_bdOMbiCYSxmScSw",
    },
    {
      imageLink:
        "https://suvidhafoundationedutech.org/img/Gallery/FreeEducation.jpg",
      hoverText: "Free Education",
      link: "https://drive.google.com/drive/u/1/folders/1ucG-Ltm_6fAwZ-1ta4-nHhRdKpu-3EAN",
    },
    {
      imageLink:
        "https://suvidhafoundationedutech.org/img/Gallery/Women'sDay.jpg",
      hoverText: "Women's Day",
      link: "https://drive.google.com/drive/u/1/folders/1_V-acFibBsweHcM-R-P__4EQWpauB6dK",
    },
    {
      imageLink:
        "https://suvidhafoundationedutech.org/img/Gallery/FoodDistribution.jpg",
      hoverText: "Food Distribution",
      link: "https://drive.google.com/drive/u/1/folders/1AfCK5kJqf9_N_JGd8wqUhNesS8k1tVmw",
    },
    {
      imageLink:
        "https://suvidhafoundationedutech.org/img/Gallery/SuvidhaEvents.jpg",
      hoverText: "Suvidha Events",
      link: "https://drive.google.com/drive/u/1/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms",
    },
    {
      imageLink:
        "https://suvidhafoundationedutech.org/img/Gallery/SanitaryPad.jpg",
      hoverText: "Empowering Women",
      link: "https://drive.google.com/drive/u/1/folders/1tMkME479AhVFQ5pUZag3-YPgNWhIn7Rl",
    },
    {
      imageLink:
        "https://suvidhafoundationedutech.org/img/Gallery/AnimalFeeding.jpg",
      hoverText: "Animal Feeding",
      link: "https://drive.google.com/drive/u/1/folders/1xr7jhBYaap-tZ2puU5HiF6ccitJtBfaB",
    },
    // Add more objects as needed with imageLink, hoverText, and link
  ];

  return (
    <>
      <TopBar />
      <NavBar />
      <PhotoGalleryTop />
      <div>
        <div>
          <div className="text-center pt-8 flex items-center justify-center flex-col gap-4">
            <p className="lg:text-3xl md:text-2xl text-xl font-bold text-[#FAB40C]">
              Our Gallery
            </p>
            <p className="lg:text-4xl md:text-3xl text-xl lg:font-semibold md:font-medium ">
              Moments of Impact: Capturing the Journey of Our NGO
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 px-16 py-10 pb-14">
          {data.map(({ imageLink, hoverText, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
                <img
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  src={imageLink}
                  alt="gallery-photo"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-white text-xl font-medium">
                    {hoverText}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhotoGallery;
