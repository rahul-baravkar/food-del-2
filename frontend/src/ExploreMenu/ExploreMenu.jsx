import React from "react";
import { menu_list } from "@/assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div
      className="mb-10 px-4 md:px-10 text-black flex flex-col gap-4"
      id="menu-bar"
    >
      {/* Heading */}
      <h1 className="font-bold text-2xl md:text-5xl mt-3">
        Explore Our Fresh Vegetables
      </h1>

      {/* Description */}
      <p className="mt-2 md:mt-4 text-sm md:text-base leading-relaxed">
        Browse our wide selection of green, organic, and seasonal vegetables.
        From leafy greens to root vegetables, we bring everything fresh from
        farm to your kitchen.
      </p>

      {/* Menu List */}
      <div className="flex gap-14 mt-4 overflow-x-auto pb-2 scrollbar-hide">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name,
              )
            }
            className="flex flex-col items-center cursor-pointer transition-all duration-300 min-w-[90px]"
          >
            {/* Image */}
            <div
              className={`w-20 h-20 md:w-32 md:h-32 rounded-full p-[3px] transition-all duration-300
              ${
                category === item.menu_name
                  ? "bg-red-500 scale-105 shadow-lg"
                  : "bg-gray-200 hover:scale-105"
              }`}
            >
              <img
                src={item.menu_image}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Text */}
            <p
              className={`mt-2 text-xs md:text-sm font-medium text-center transition-all duration-300
              ${
                category === item.menu_name ? "text-red-600" : "text-gray-600"
              }`}
            >
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>

      <hr className="border-t-2 border-gray-300 w-full mt-5" />
    </div>
  );
};

export default ExploreMenu;
