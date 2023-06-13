import React from "react";
import { useLoaderData } from "react-router-dom";

const InstructorsDetail = () => {
  const id = useLoaderData();

  const instructorId = id[0];

  return (
    <div className="flex flex-row m-5 border w-3/4 m-auto">
      <img className="m-3 w-1/3" src={instructorId.image} alt="" />
      <div className="m-3">
        <h2 className="text-2xl"><span className="font-bold"> Name: </span>{instructorId.name}</h2>
        <h2 className="text-2xl"><span className="font-bold"> email: </span>{instructorId.email}</h2>
        <h2 className="text-2xl"><span className="font-bold"> My Details: </span>{instructorId.email}</h2>
        <div className="mt-3">
            <p className="font-bold text-2xl">My Classes:</p>
          <p className="mt-1 ms-32">{instructorId.classes[0]}</p>
          <p className="mt-1 ms-32">{instructorId.classes[1]}</p>
          <p className="mt-1 ms-32">{instructorId.classes[2]}</p>
          <p className="mt-1 ms-32">{instructorId.classes[3]}</p>
          <p className="mt-1 ms-32">{instructorId.classes[4]}</p>
          <p className="mt-1 ms-32">{instructorId.classes[5]}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorsDetail;
