import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useStudentClass from "../../Hooks/useStudentClass";
import useClasses from "../../Hooks/useClasses";

const ClassesCard = ({ allClass }) => {
  const [approvedClass, setApprovedClass] = useState();
  const { user } = useContext(AuthContext);
  const [myClasses] = useStudentClass();

  const { status } = allClass;

  useEffect(() => {
    if (status === "approved") {
      setApprovedClass(true);
    }
  }, [status]);

  const handleAddClass = (allClass) => {
    const {
      _id,
      availableSeats,
      className,
      image,
      instructorName,
      price,
      sessions,
    } = allClass;

    const selectedClass = {
      image,
      classId: _id,
      classAdded: true,
      email: user.email,
      availableSeats,
      className,
      instructorName,
      price,
      sessions,
    };

    console.log(selectedClass);

    fetch("http://localhost:5000/myselectedclasses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <div className="hero w-11/12 bg-base-200 m-3 rounded-lg">
        <div className="hero-content flex-col ">
          <img
            src="https://i.ibb.co/CJ2vs6L/40-K-20180520124148.jpg"
            className="max-w-sm rounded-lg shadow-2xl w-1/2"
          />
          <div className="w-full">
            <h1 className="text-3xl font-bold">{allClass.className}</h1>
            <p className="py-6 font-bold">
              Instructor:{" "}
              <span className=" font-normal ">{allClass.instructorName}</span>
            </p>
            <div className="flex justify-between">
              <p className="font-bold">
                Available Seats:
                <span className=" font-normal ">{allClass.availableSeats}</span>
              </p>
              <p className="font-bold">
                Price: <span className="font-normal"> ${allClass.price}</span>
              </p>
            </div>
          </div>
          {approvedClass ?
            (<button
              onClick={() => handleAddClass(allClass)}
              className="btn btn-primary text-white"
              disabled={
                allClass?.availableSeats == 0 ||
                (!allClass?.availableSeats && "disable")
              }
            >
              Add to My Class
            </button>)
            :
            <p className="text-red-600">
              Waiting for Approval
            </p>
          }
        </div>
      </div>
    </>
  );
};

export default ClassesCard;
