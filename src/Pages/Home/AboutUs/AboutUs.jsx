import React from "react";
import Headings from "../../../Componants/Headings";

const AboutUs = () => {
  return (
    <>
      <Headings heading={"About Us"} />

      <div className="py-12">
        <div className="max-w-3xl mx-auto text-center bg-white rounded p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-[#4a4a4a] mb-4">
            Our Mission
          </h2>
          <p className="text-[#4a4a4a] mb-6">
            At Martial Arts Summer School, our mission is to create a welcoming
            and positive environment for individuals of all ages and skill
            levels. We aim to transform lives through the practice of martial
            arts, fostering physical and mental well-being.
          </p>

          <h2 className="text-3xl font-bold text-[#4a4a4a] mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc text-left text-[#4a4a4a] mb-6 pl-6">
            <li>
              <strong>Expert Instructors:</strong> Receive guidance from
              experienced and certified martial arts instructors dedicated to
              your progress.
            </li>
            <li>
              <strong>Comprehensive Training:</strong> Explore a variety of
              techniques and martial arts styles to develop a well-rounded skill
              set.
            </li>
            <li>
              <strong>Inclusive Atmosphere:</strong> Our community is designed
              to be inclusive, offering a welcoming space for individuals of all
              ages and levels.
            </li>
            <li>
              <strong>Personal Transformation:</strong> Join us for a journey of
              self-discovery, where you'll not only learn martial arts but also
              enhance your overall well-being.
            </li>
          </ul>

          <div className="mt-6">
            <h2 className="text-3xl font-bold text-[#4a4a4a] mb-4">
              Our Values
            </h2>
            <p className="text-[#4a4a4a] mb-4">
              We uphold the values of respect, discipline, and continuous
              improvement. Our commitment to fostering a positive learning
              environment ensures that every participant feels supported on
              their martial arts journey.
            </p>

            <h2 className="text-3xl font-bold text-[#4a4a4a] mb-4">
              Join Us Today
            </h2>
            <p className="text-[#4a4a4a]">
              Ready to embark on a transformative martial arts experience? Join
              Martial Arts Summer School today and discover the incredible
              benefits of martial arts training.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
