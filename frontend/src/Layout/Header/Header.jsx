import React from "react";
import { Button } from "@/components/ui/button";
import headerImg from "@/assets/frontend_assets/vegies.png";

const Header = () => {
  return (
    <div className="mt-4 md:mt-6 w-full" id="Header-bar">
      <div className="relative px-4 md:px-8">
        {/* Image */}
        <img
          className="w-full h-[60vw] md:h-[38vw] object-cover rounded-xl"
          src={headerImg}
          alt="Header"
        />

        {/* Overlay Content */}
        <div className="absolute flex flex-col items-center text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white space-y-3 md:space-y-4 max-w-[100%] md:max-w-[60%]">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl leading-tight">
            Fresh Vegetables Delivered to Your Doorstep
          </h1>

          <a href="#menu-bar">
            <Button
              className="bg-white text-black px-5 py-2 text-sm md:text-base rounded-md shadow-sm hover:bg-gray-100 transition"
              variant="outline"
            >
              View Menu
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
