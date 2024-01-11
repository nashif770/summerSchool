import React from "react";
import Headings from "../../../Componants/Headings";

const ContactUs = () => {
  return (
    <>
  <Headings heading={"Contact Us"} />

  <div className="py-12">
    <div className="max-w-md mx-auto text-center bg-white rounded p-8 shadow-lg">
      <p className="text-[#4a4a4a] text-lg mb-6">
        If you have any questions or need further information, feel free to
        reach out to us. We're here to help!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        <div>
          <h3 className="text-2xl font-bold text-[#4a4a4a] mb-2">Email</h3>
          <p className="text-[#4a4a4a]">info@martialartssummerschool.com</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#4a4a4a] mb-2">Phone</h3>
          <p className="text-[#4a4a4a]">+1 (555) 123-4567</p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-[#4a4a4a]">
          Feel free to connect with us through email or give us a call. We look
          forward to assisting you on your martial arts journey!
        </p>
      </div>
    </div>
  </div>
</>
  );
};

export default ContactUs;
