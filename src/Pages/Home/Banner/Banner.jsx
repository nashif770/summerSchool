import React from "react";
import Headings from "../../../Componants/Headings";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Headings
        heading={"Elevate Your Skills, Embrace the Summer Spirit"}
        subHeading={"Summer Slammers Summer School"}
      />
      <div className="carousel relative w-full h-96 m-auto overflow-hidden rounded-md shadow-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={"https://i.ibb.co/F07HXmL/Banner1.jpg"}
            className="w-full rounded-lg"
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
            className="w-full rounded-lg"
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
            className="w-full rounded-lg"
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
            className="w-full rounded-lg"
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
      <div className="m-3 text-center text-white">
        <h2 className="text-3xl font-semibold">
          Discover & Grow: Martial Arts Summer School!
        </h2>
        <p className="mt-3">
          Join for rigorous training, fun activities, and life lessons.
          <br />
          Master techniques under the summer sun.
        </p>
        <Link to="/classes">
          <button className="btn btn-primary text-2xl font-semibold mt-3 px-6 rounded-full bg-[#3498db] hover:bg-[#2980b9] transition duration-300">
            Enroll Now!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
