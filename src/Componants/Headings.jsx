import React from "react";

const Headings = ({ heading, subHeading }) => {
  return (
    <div>
      <div className="divider"></div>
      <div className="grid h-32 card bg-base-300 rounded-none m-3 place-items-center rounded">
        <h1 className="text-3xl text-center mb-0">{heading}</h1>
        <p className="text-1xl text center mt-0">{subHeading}</p>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Headings;
