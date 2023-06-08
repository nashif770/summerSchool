import React from "react";
import useTopClass from "../../../Hooks/useTopClass";

const TopClasses = () => {
  const [tClass] = useTopClass();

  console.log(tClass);
  return (
    <div>
      <div className="grid grid-cols-3 gap-1 m-auto p-6">
        {tClass.map((cl) => (
          <div key={cl._id} className="hero w-11/12 bg-base-200 m-3 rounded-lg">
            <div className="hero-content flex-col ">
              <img
                src="https://i.ibb.co/CJ2vs6L/40-K-20180520124148.jpg"
                className="max-w-sm rounded-lg shadow-2xl w-1/2"
              />
              <div className="w-full">
                <h1 className="text-3xl font-bold">{cl.className}</h1>
                <p className="py-6 font-bold">
                  Instructor:{" "}
                  <span className=" font-normal ">{cl.instructorName}</span>
                </p>
                <div className="flex justify-between">
                  <p className="font-bold">
                    Available Seats:
                    <span className=" font-normal "> {cl.availableSeats}</span>
                  </p>
                  <p className="font-bold">
                    Price: <span className="font-normal"> ${cl.price}</span>
                  </p>
                </div>
              </div>
              <button
                className="btn btn-primary text-white"
                disabled={cl.availableSeats == 0 && "disable"}
              >
                Select Class
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopClasses;
