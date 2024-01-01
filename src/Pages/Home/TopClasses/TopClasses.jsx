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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-auto p-6">
        {tClass.map((cl) => (
          <motion.div
            key={cl._id}
            whileHover={{ scale: 1.1, rotate: 0 }}
          >
            <div className="hero bg-white m-3 rounded-lg shadow-lg">
              <div className="hero-content flex-col h-80">
                <img
                  src={cl.image}
                  className="rounded-lg m-auto h-40"
                />
                <div className="w-full">
                  <h1 className="text-2xl font-bold">{cl.className}</h1>
                  <p className="py-2 font-bold">
                    Instructor:
                    <span className=" font-normal "> {cl.instructorName}</span>
                  </p>
                  <div className="flex justify-between">
                    <p className="font-bold">
                      Available Seats:
                      <span className=" font-normal ">
                        {cl.availableSeats}
                      </span>
                    </p>
                    <p className="font-bold ms-3">
                      Price: <span className="font-normal"> ${cl.price}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopClasses;
