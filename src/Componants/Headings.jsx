import React from "react";

const Headings = ({ heading, subHeading }) => {
  return (
    <div className="my-6 shadow-lg bg-gradient-to-r from-[#F7F7F7] to-[#EAEAEA] p-6 rounded-md text-center">
      <h1 className="text-4xl font-extrabold text-[#333333] mb-4">{heading}</h1>
      <p className="text-lg text-gray-600">{subHeading}</p>
    </div>
  );
};

export default Headings;
