import axios from "axios";
import React, { useState, useEffect } from "react";
import Headings from "../../../Componants/Headings";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://b7a12-summer-camp-server-side-nashif770.vercel.app/topinstructors"
      )
      .then((res) => {
        setInstructors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Headings
        heading={"Our Instructors"}
        subHeading={"Find the best one for you"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-auto p-6">
        {instructors.map((instructor) => (
          <motion.div key={instructor._id} whileHover={{ scale: 1.05 }}>
            <div className="bg-white m-3 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="h-40 w-full object-cover object-top"
              />

              <div className="p-4">
                <h1 className="text-xl font-bold text-gray-800 mb-2">
                  {instructor.name}
                </h1>
                <p className="text-sm font-bold text-gray-600 mb-2">
                  Email:{" "}
                  <span className="font-normal text-gray-500">
                    {instructor.email}
                  </span>
                </p>
                <p className="text-sm font-bold text-gray-600">
                  Classes Taken:{" "}
                  <span className="font-normal text-gray-500">
                    0{instructor.classesTaken}
                  </span>
                </p>
              </div>

              <Link to={`/instructorsDetails/${instructor._id}`}>
                <button className="btn btn-primary text-white w-full py-2">
                  See Classes
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default PopularInstructors;
