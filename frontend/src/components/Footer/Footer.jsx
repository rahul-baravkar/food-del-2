import { assets } from "@/assets/frontend_assets/assets";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-600 py-10 text-white" id="footer">
      <div className="mx-auto w-[90%] max-w-[1180px]">
        <div className="flex flex-col md:flex-row justify-between gap-10 text-center md:text-left">
          {/* LEFT SIDE */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <img src={assets.logo} alt="logo" className="w-28 md:w-32" />

            <p className="leading-6 text-sm md:text-base max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              laudantium dicta fugiat veniam doloribus alias dolorem, suscipit
              earum aspernatur eveniet.
            </p>

            <div className="flex gap-5">
              <img
                src={assets.facebook_icon}
                alt=""
                className="w-6 md:w-7 cursor-pointer"
              />
              <img
                src={assets.twitter_icon}
                alt=""
                className="w-6 md:w-7 cursor-pointer"
              />
              <img
                src={assets.linkedin_icon}
                alt=""
                className="w-6 md:w-7 cursor-pointer"
              />
            </div>
          </div>

          {/* CENTER */}
          <div className="space-y-3">
            <h1 className="font-bold text-xl md:text-2xl">COMPANY</h1>

            <ul className="space-y-2 text-sm md:text-base cursor-pointer">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-3">
            <h1 className="font-bold text-xl md:text-2xl">GET IN TOUCH</h1>

            <ul className="space-y-2 text-sm md:text-base">
              <li>+91-123-456-7890</li>
              <li>contact@tomato.com</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-400 mt-8" />

        <p className="text-center mt-6 text-xs md:text-sm">
          Copyright 2025 © tomato.com — All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
