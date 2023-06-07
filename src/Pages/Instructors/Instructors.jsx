import React from "react";
import useInstructors from "../../Hooks/useInstructors";

const Instructors = () => {
  const [instructors] = useInstructors();

  console.log(instructors);
  //   - Image
  //   - Name
  //   - Email
  //   - (optional) Number of Classes taken by the Instructor.
  //   - (optional) Name of the Classes taken by the Instructor.
  //   - (optional) `See Classes` button to show classes by this Instructor. This will take you to a new link

  //   classes: (3)[("Karate", "Kung Fu", "Boxing")];
  //   classesTaken: 3;
  //   email: "john.smith@example.com";
  //   image: "instructor1.jpg";
  //   name: "John Smith";
  //   _id: "6480909e6e743aeeec576fb6";

  return (
    <div>
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
                  Email:{" "}
                  <span className=" font-normal ">{instructor.email}</span>
                </p>
                <p className="font-bold">
                  Classes Taken:{" "}
                  <span className=" font-normal ">
                    0{instructor.classesTaken}
                  </span>
                </p>
                <div className="divider"></div>
                <p className="font-bold text-center">
                  Classes
                </p>
                <div className="divider"></div>
                  <span className="font-normal">{instructor.classes[0]}</span><br></br>
                  <span className="font-normal">{instructor.classes[1]}</span><br></br>
                  <span className="font-normal">{instructor.classes[2]}</span><br></br>
                  <span className="font-normal">{instructor.classes[3]}</span><br></br>
              </div>
              <button className="btn btn-primary text-white">
                See Classes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
