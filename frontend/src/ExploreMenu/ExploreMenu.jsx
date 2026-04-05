import React from "react";
import { menu_list } from "@/assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div
      className=" mb-10 ml-24 -my-10 text-black flex-col gap-4 "
      id="menu-bar"
    >
      <h1 className="font-bold text-black text-6xl mt-3">Explore our menu</h1>

      <p className="mt-8">
        Choose from a diverse menu featuring a deletable array of dishes crafted
        with the finest ingredients and culinary expertise. Our mission is to
        satisfy your cravings and elevate your dining experience, one delicious
        meal at a time.
      </p>

    

<div className="menu-list flex gap-6 mt-6 overflow-x-auto pb-2">

  {menu_list.map((item, index) => (
    <div
      key={index}
      onClick={() =>
        setCategory((prev) =>
          prev === item.menu_name ? "All" : item.menu_name
        )
      }
      className={`flex flex-col items-center cursor-pointer transition-all duration-300`}
    >
      
      {/* Image */}
      <div
        className={`w-28 h-28 rounded-full p-[3px] transition-all duration-300 
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
        className={`mt-2 text-sm font-medium transition-all duration-300
        ${
          category === item.menu_name
            ? "text-red-600"
            : "text-gray-600"
        }`}
      >
        {item.menu_name}
      </p>
    </div>
  ))}

</div>
      <hr className="border-t-2 border-gray-4 00 w-full mt-5" />
    </div>
  );
};

export default ExploreMenu;
