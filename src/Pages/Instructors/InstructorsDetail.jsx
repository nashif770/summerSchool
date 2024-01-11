import React from "react";
import { useLoaderData } from "react-router-dom";

const InstructorsDetail = () => {
  const id = useLoaderData();

  const instructorId = id[0];

  return (
    <div className="flex flex-row w-3/4 my-2 mx-auto h-screen p-12 bg-[#f9f9f9]">
      <img
        className="m-3 rounded-lg shadow-2xl mt-3 h-60 object-cover"
        src={instructorId.image}
        alt=""
      />
      <div className="m-3">
        <div className="flex flex-row gap-3">
          <div>
            <p className="font-bold text-lg text-[#4a4a4a]">Name:</p>
            <p className="font-bold text-lg text-[#4a4a4a]">Email:</p>
            <p className="font-bold text-lg text-[#4a4a4a]">Classes:</p>
          </div>
          <div>
            <p className="text-lg text-[#4a4a4a]">{instructorId.name}</p>
            <p className="text-lg text-[#4a4a4a]">{instructorId.email}</p>
            <p className="text-lg text-[#4a4a4a]">
              0{instructorId.classesTaken}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-bold text-lg text-[#4a4a4a] mb-2">My Classes:</p>
          <ul className="list-disc list-inside text-[#4a4a4a]">
            {instructorId.classes.map((className, index) => (
              <li key={index} className="text-lg">
                {className}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstructorsDetail;
