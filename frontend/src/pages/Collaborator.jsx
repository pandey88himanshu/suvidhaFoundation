import React from "react";

const Collaborator = () => {
  return (
    <div className=" flex items-center justify-center bg-fixed bg-center bg-cover bg-black bg-overlay">
      <div className=" w-full px-4 md:px-16 text-center text-white py-4">
        <div className="lg:pb-6 pb-2 text-lg lg:text-xl">
          <p>Empowering Change Together Through Collaborative Initiatives</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          {[
            "https://suvidhafoundationedutech.org/img/collab-3.jpg",
            "https://suvidhafoundationedutech.org/img/collab-1.jpg",
            "https://suvidhafoundationedutech.org/img/collab-2.jpg",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Collaboration image ${index + 1}`}
              className="rounded-full h-32 w-32 md:h-52 md:w-52 lg:h-60 lg:w-60 "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborator;
