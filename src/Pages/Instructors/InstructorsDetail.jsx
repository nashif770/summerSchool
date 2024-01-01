import React from "react";
import { useLoaderData } from "react-router-dom";

const InstructorsDetail = () => {
  const id = useLoaderData();

  const instructorId = id[0];

  return (
    <div className="flex flex-row w-3/4 h-screen p-12">
      <img
        className="m-3 rounded-lg shadow-2xl mt-3"
        src={instructorId.image}
        alt=""
      />
      <div className="m-3">
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
            <p>: {instructorId.name}</p>
            <p>: {instructorId.email}</p>
            <p>: 0{instructorId.classesTaken}</p>
          </div>
        </div>
        <div className="mt-3">
          <p className="font-bold text-1xl">My Classes:</p>
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
