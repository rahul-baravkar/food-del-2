import React from "react";
import { Button } from "@/components/ui/button";
import headerImg from "@/assets/frontend_assets/vegies.png";

const Header = () => {
  return (
    <div className="my-28 w-full">
      <div className="relative m-[30px]">
        <img
          className="h-[38vw] w-[80vw] ml-20 rounded-xl "
          src={headerImg}
          alt="Header"
        />

        <div className="absolute top-1/2 left-32 -translate-y-1/2 text-white space-y-4">
          <h1 className="font-bold text-6xl leading-tight ">
            Fresh Vegetables Delivered to <br /> Your Doorstep
          </h1>

          <p className="leading-relaxed">
            Choose from a wide range of farm-fresh vegetables sourced directly <br/>
            from trusted farmers. We ensure quality, freshness, and timely <br/>
            delivery to make your cooking healthy and easy.
          </p>

          <Button className="bg-white text-black mt-8" variant="outline">
            View Menu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
