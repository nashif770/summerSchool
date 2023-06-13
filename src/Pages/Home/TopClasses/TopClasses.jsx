import React from "react";
import useTopClass from "../../../Hooks/useTopClass";
import Headings from "../../../Componants/Headings";
import { motion } from "framer-motion";

const TopClasses = () => {
  const [tClass] = useTopClass();
  return (
    <div>
      <Headings
        heading={"Our Classes"}
        subHeading={"Find the best one for you"}
      ></Headings>
      <div className="grid grid-cols-3 gap-1 m-auto p-6">
        {tClass.map((cl) => (
          <div key={cl._id} className="hero w-11/12 bg-base-200 m-3 rounded-lg">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            >
              <div className="hero-content flex-col ">
                <img
                  src={cl.image}
                  className="max-w-sm rounded-lg shadow-2xl w-1/2"
                />
                <div className="w-full">
                  <h1 className="text-3xl font-bold">{cl.className}</h1>
                  <p className="py-6 font-bold">
                    Instructor:{" "}
                    <span className=" font-normal ">{cl.instructorName}</span>
                  </p>
                  <div className="flex justify-between">
                    <p className="font-bold">
                      Available Seats:
                      <span className=" font-normal ">
                        {" "}
                        {cl.availableSeats}
                      </span>
                    </p>
                    <p className="font-bold">
                      Price: <span className="font-normal"> ${cl.price}</span>
                    </p>
                  </div>
                </div>
                <button
                  className="btn btn-primary text-white"
                  disabled={cl.availableSeats == 0 && "disable"}
                >
                  Select Class
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopClasses;
