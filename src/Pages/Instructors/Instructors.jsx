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
          <div key={instructor?._id} className="bg-base-200 m-3 rounded-lg">
            <div className="w-full p-6">
              <img
                src={instructor?.image}
                className="rounded-lg m-auto h-40"
              />
              <div className="divider"></div>
              <div className="flex flex-row gap-3">
                <div>
                  <p>
                    <span className="font-bold">Name</span>
                  </p>
                  <p>
                    <span className="font-bold">Email</span>
                  </p>
                  <p>
                    <span className="font-bold">Classes</span>
                  </p>
                </div>
                <div>
                  <p>: {instructor.name}</p>
                  <p>: {instructor.email}</p>
                  <p>: 0{instructor.classesTaken}</p>
                </div>
              </div>
              <div className="divider"></div>
              <div className="grid grid-cols-2">
                <div className="">
                  {instructor.classes &&
                    instructor.classes.map((className) => (
                      <p key={className} className="m-3">
                        {className}
                      </p>
                    ))}
                </div>
                <Link to={`/instructorsDetails/${instructor?._id}`}>
                  <button className="btn btn-primary text-white mt-3">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
