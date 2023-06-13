import React from "react";

const Reviews = () => {
  return (
    <div className="flex flex-row w-3/4 m-auto">
      <div className="m-3 w-1/3 rounded-lg shadow-2xl h-80 mt-3">
      </div>
      <div className="m-3">
        <h2 className="text-2xl">
          <span className="font-bold"> Name: </span>
        </h2>
        <h2 className="text-2xl">
          <span className="font-bold"> email: </span>
        </h2>
        <h2 className="text-2xl">
          <span className="font-bold"> My Details: </span>
        </h2>
      </div>
    </div>
  );
};

export default Reviews;
