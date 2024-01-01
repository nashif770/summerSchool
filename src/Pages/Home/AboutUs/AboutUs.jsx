import React from "react";
import Headings from "../../../Componants/Headings";

const AboutUs = () => {
  return (
    <>
      <Headings heading={"About Us"}></Headings>
      <div className="bg-gradient-to-b py-12">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            Create a positive and inclusive space for exploring martial arts,
            transforming both physically and mentally.
          </p>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Why Choose Us?
          </h2>
          <ul className="list-disc text-left text-gray-600 mb-6 pl-4">
            <li>Expert guidance from experienced instructors.</li>
            <li>Comprehensive training covering various techniques.</li>
            <li>Fun and inclusive atmosphere for all ages and levels.</li>
          </ul>
          <p className="text-gray-600">
            Join Martial Arts Summer School for an unforgettable journey of
            self-discovery and skill mastery!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
