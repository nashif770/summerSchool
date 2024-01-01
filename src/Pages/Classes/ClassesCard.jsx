import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useStudentClass from "../../Hooks/useStudentClass";
import useClasses from "../../Hooks/useClasses";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ClassesCard = ({ allClass }) => {
  const [approvedClass, setApprovedClass] = useState();
  const { user } = useContext(AuthContext);
  const [myClasses] = useStudentClass();
  const [axiosSecure] = useAxiosSecure();
  const [allUser, setAllUser] = useState();

  useEffect(() => {
    axiosSecure
      .get(
        `https://b7a12-summer-camp-server-side-nashif770-nashif770.vercel.app/users`
      )
      .then((res) => {
        setAllUser(res.data);
      });
  }, []);

  const currentUser = allUser?.find((myUser) => myUser?.email == user?.email);

  useEffect(() => {
    const { status } = allClass;
    if (status === "Approved") {
      setApprovedClass(true);
    }
  }, []);

  const handleAddClass = (allClass) => {
    if (!user) {
      alert("Please Login");
      return;
    }

    const {
      _id,
      availableSeats,
      className,
      image,
      instructorName,
      instructorEmail,
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
      instructorEmail,
      price,
      sessions,
    };

    fetch(
      "https://b7a12-summer-camp-server-side-nashif770.vercel.app/myselectedclasses",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <div className="hero w-10/12 bg-base-200 m-3 rounded-lg">
        <div
          className={
            allClass.availableSeats < 1
              ? "hero-content flex-col w-full bg-red-600"
              : "hero-content flex-col w-full rounded"
          }
        >
          <img src={allClass.image} className="rounded-lg m-auto h-40" />
          <div className="w-full">
            <h1 className="text-2xl font-bold">{allClass.className}</h1>
            <p className="py-2 font-bold">
              Instructor:
              <span className=" font-normal "> {allClass.instructorName}</span>
            </p>
            <div className="flex justify-between">
              <p className="font-bold">
                Available Seats:
                <span className=" font-normal ">{allClass.availableSeats}</span>
              </p>
              <p className="font-bold ms-3">
                Price: <span className="font-normal"> ${allClass.price}</span>
              </p>
            </div>
          </div>

          {!currentUser ? (
            <div>
              <button
                onClick={() => handleAddClass(allClass)}
                className="btn btn-primary text-white"
              >
                Add to My Class
              </button>
            </div>
          ) : (
            <div>
              {approvedClass && (
                <button
                  onClick={() => handleAddClass(allClass)}
                  className="btn btn-primary text-white"
                  disabled={currentUser.role !== "student" && true}
                >
                  Add to My Class
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ClassesCard;
