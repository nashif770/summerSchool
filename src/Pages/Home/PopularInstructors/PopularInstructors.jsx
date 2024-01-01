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
      ></Headings>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 m-auto p-6">
        {instructors.map((instructor) => (
          <motion.div
            key={instructor._id}
            whileHover={{ scale: 1.1, rotate: 0 }}
          >
           <div className="hero bg-white m-3 rounded-lg shadow-lg">
           <div className="hero-content flex-col">
                <img
                  src={instructor.image}
                  className="rounded-lg m-auto h-40"
                />
                <div className="w-full">
                <h1 className="text-2xl font-bold">
                    <span className=" font-normal ">{instructor.name}</span>
                  </h1>
                  <p className="py-2 font-bold">
                    Email:{" "}
                    <span className=" font-normal ">{instructor.email}</span>
                  </p>
                  <p className="font-bold">
                    Classes Taken:{" "}
                    <span className=" font-normal ">
                      0{instructor.classesTaken}
                    </span>
                  </p>
                </div>
                <Link to={`/instructorsDetails/${instructor._id}`}>
                  <button className="btn btn-primary text-white">
                    See Classes
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default PopularInstructors;
