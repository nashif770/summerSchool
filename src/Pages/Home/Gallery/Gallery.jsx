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
      <Headings heading={"Checkout our Gallery"} subHeading={""} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {images?.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image.url}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 object-cover bg-white rounded-md overflow-hidden transform transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-bold text-lg">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
