import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <div className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <div className="flex flex-col justify-center items-center">
      <img src="https://i.ibb.co/Y20XD2H/icon.png" className='h-10 w-10' alt="" />
      <p className='font-bold text-2xl'>Summer Slammers</p>
      <p>Summer School</p>
    </div>
  </div> 
  <div>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </div>
</footer>
    );
};

export default Footer;