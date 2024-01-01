import React from "react";

const Headings = ({ heading, subHeading }) => {
  return (
    <div className="my-6 shadow-lg bg-white p-6 uppercase m-auto">
      <h1 className="text-center text-3xl font-bold mb-2">{heading}</h1>
      <p className="text-center text-lg text-gray-600">{subHeading}</p>
    </div>
  );
};

export default Headings;
