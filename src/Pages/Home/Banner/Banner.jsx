import React from "react";
import Headings from "../../../Componants/Headings";

const Banner = () => {
  return (
    <div className="flex flex-col m-3 p-3">
      <Headings heading={'Elevate Your Skills, Embrace the Summer Spirit'} subHeading={'Summer Slammers Summer School'} ></Headings>
      <div className="carousel w-10/12 m-auto">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={"https://i.ibb.co/F07HXmL/Banner1.jpg"}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/nRDfBFQ/Banner2.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/ct2Wzyt/Bnner2.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/tbk3XDk/Banner4.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="m-3 w-full text-center">
        <h1 className="text-5xl">
          
        </h1>
        <p className="mt-3">
          Join our Martial Arts Summer School and embark on an exciting journey
          of self-discovery and growth. Our program offers a unique blend of
          rigorous training, fun-filled activities, and valuable life lessons.
          Experience the thrill of mastering martial arts techniques while
          enjoying the warmth of the summer sun.
        </p>
      </div>
    </div>
  );
};

export default Banner;


