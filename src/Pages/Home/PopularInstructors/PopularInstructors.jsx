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
      <div className="grid grid-cols-3 gap-1 m-auto p-6">
        {instructors.map((instructor) => (
          <motion.div
            key={instructor._id}
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
          >
            <div className="hero w-11/12 bg-base-200 m-3 rounded-lg">
              <div className="hero-content flex-col ">
                <img
                  src={instructor.image}
                  className="max-w-sm rounded-lg shadow-2xl w-1/2"
                />
                <div className="w-full">
                  <h1 className="text-3xl font-bold mt-3">
                    <span className=" font-normal ">{instructor.name}</span>
                  </h1>
                  <p className="py-6 font-bold">
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
