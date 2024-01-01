import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Headings from "../../../Componants/Headings";

const Gallery = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch("imageGallery.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div>
      <Headings
        heading={"Our Top Instructors"}
        subHeading={"Find the best one for you"}
      ></Headings>
      <div className="grid grid-cols-3 gap-4 p-4">
        {images?.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image.url}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 object-cover bg-white"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-bold">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
