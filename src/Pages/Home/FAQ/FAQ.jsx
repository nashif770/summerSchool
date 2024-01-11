import React from "react";
import Headings from "../../../Componants/Headings";

const FAQ = () => {
  return (
    <>
      <Headings heading={"Frequently Asked Questions"} />
      <div className="py-12">
        <div className="max-w-md mx-auto text-center bg-white rounded p-6 shadow-lg">
          <div className="text-left">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-[#4a4a4a] mb-2">
                What is Martial Arts Summer School?
              </h3>
              <p className="text-[#4a4a4a]">
                Martial Arts Summer School is a program designed to provide a
                unique blend of martial arts training, personal growth, and
                enjoyable experiences during the summer.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold text-[#4a4a4a] mb-2">
                Who can participate in the program?
              </h3>
              <p className="text-[#4a4a4a]">
                Our program is open to individuals of all ages and skill levels.
                Whether you're a beginner or an experienced martial artist,
                there is something for everyone.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold text-[#4a4a4a] mb-2">
                How do I enroll in Martial Arts Summer School?
              </h3>
              <p className="text-[#4a4a4a]">
                Enrolling is easy! Visit our Registration Information page for
                detailed instructions on how to secure your spot.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold text-[#4a4a4a] mb-2">
                Are there any age restrictions?
              </h3>
              <p className="text-[#4a4a4a]">
                No, there are no age restrictions. Our program is designed to be
                inclusive, and participants of all ages are welcome.
              </p>
            </div>

            {/* Add more FAQ items as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
