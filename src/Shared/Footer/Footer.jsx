import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-gradient-to-b from-[#3498db] to-[#2c3e50] text-white rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press Kit</a>
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <img
          src="https://i.ibb.co/Y20XD2H/icon.png"
          className="h-12 w-12 mb-2"
          alt=""
        />
        <p className="font-bold text-xl">Summer Slammers</p>
        <p className="text-sm">Summer School</p>
      </div>
      <div className="mt-6">
        <p className="text-sm">
          &copy; 2023 - All rights reserved by Summer Slammers
        </p>
      </div>
    </footer>
  );
};

export default Footer;
