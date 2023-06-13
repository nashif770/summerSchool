import React from "react";
import useInstructors from "../../Hooks/useInstructors";
import { Link } from "react-router-dom";

const Instructors = () => {
  const [instructors] = useInstructors();

  console.log(instructors);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 m-auto p-6">
        {instructors.map((instructor) => (
          <div
            key={instructor?._id}
            className="hero w-10/12 bg-base-200 m-3 rounded-lg"
          >
            <div className="hero-content flex-col ">
              <img
                src={instructor?.image}
                className="rounded-lg shadow-2xl h-80 mt-3"
              />
              <div className="w-full">
                <div className="h-300">
                  <h1 className="text-3xl font-bold mt-3">
                    <span className=" font-normal ">{instructor?.name}</span>
                  </h1>
                  <p className="py-6 font-bold">
                    Email:{" "}
                    <span className=" font-normal ">{instructor?.email}</span>
                  </p>
                  <p className="font-bold">
                    Classes Taken:{" "}
                    <span className=" font-normal ">
                      0{instructor.classesTaken}
                    </span>
                  </p>
                </div>
                <div>
                  <div className="divider"></div>
                  <p className="font-bold text-center">Classes</p>
                  <div className="divider"></div>
                  <div>
                    {instructor.classes &&
                      instructor.classes.map((className) => (
                        <p key={className} className="m-3">
                          {className}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
              <Link to={`/instructorsDetails/${instructor?._id}`}>
                <button className="btn btn-primary text-white">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
