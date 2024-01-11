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
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-auto p-6">
        {tClass.map((cl) => (
          <motion.div key={cl._id} whileHover={{ scale: 1.05 }}>
            <div className="bg-white m-3 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="h-52 overflow-hidden">
                <img
                  src={cl.image}
                  alt={cl.className}
                  className="object-cover w-full h-[52]"
                />
              </div>

              <div className="p-4">
                <h1 className="text-xl font-bold text-gray-800 mb-2">
                  {cl.className}
                </h1>
                <p className="text-sm font-semibold text-gray-600 mb-2">
                  Instructor:{" "}
                  <span className="font-normal text-gray-500">
                    {cl.instructorName}
                  </span>
                </p>
                <div className="flex justify-between text-sm">
                  <p className="font-semibold text-gray-600">
                    Available Seats:{" "}
                    <span className="font-normal text-gray-500">
                      {cl.availableSeats}
                    </span>
                  </p>
                  <p className="font-semibold text-gray-600">
                    Price:{" "}
                    <span className="font-normal text-gray-500">
                      ${cl.price}
                    </span>
                  </p>
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
