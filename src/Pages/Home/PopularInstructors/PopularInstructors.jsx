import axios from "axios";
import React, { useState, useEffect } from "react";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/topinstructors")
      .then((res) => {
        setInstructors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(instructors);

  return (
    <div className="grid grid-cols-3 gap-1 m-auto p-6">
      {instructors.map((instructor) => (
        <div
          key={instructor._id}
          className="hero w-11/12 bg-base-200 m-3 rounded-lg"
        >
          <div className="hero-content flex-col ">
            <img
              src="https://i.ibb.co/CJ2vs6L/40-K-20180520124148.jpg"
              className="max-w-sm rounded-lg shadow-2xl w-1/2"
            />
            <div className="w-full">
              <h1 className="text-3xl font-bold mt-3">
                <span className=" font-normal ">{instructor.name}</span>
              </h1>
              <p className="py-6 font-bold">
                Email: <span className=" font-normal ">{instructor.email}</span>
              </p>
              <p className="font-bold">
                Classes Taken:{" "}
                <span className=" font-normal ">
                  0{instructor.classesTaken}
                </span>
              </p>  
            </div>
            <button className="btn btn-primary text-white">See Classes</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularInstructors;
