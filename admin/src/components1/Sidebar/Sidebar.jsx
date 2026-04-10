import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
<div className="fixed top-[70px] left-0 w-[220px] h-[calc(100vh-64px)] bg-white border-r shadow-sm">

  <div className="p-4 mt-7 flex flex-col gap-4">

    <NavLink to="/add">
      {({ isActive }) => (
        <div className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer
          ${isActive ? "bg-red-100 border-l-4 border-red-400" : "hover:bg-red-50"}
        `}>
          <img src={assets.add_icon} className="w-5" />
          <p>Add Items</p>
        </div>
      )}
    </NavLink>

    <NavLink to="/list">
      {({ isActive }) => (
        <div className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer
          ${isActive ? "bg-red-100 border-l-4 border-red-400" : "hover:bg-red-50"}
        `}>
          <img src={assets.order_icon} className="w-5" />
          <p>List Items</p>
        </div>
      )}
    </NavLink>

    <NavLink to="/order">
      {({ isActive }) => (
        <div className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer
          ${isActive ? "bg-red-100 border-l-4 border-red-400" : "hover:bg-red-50"}
        `}>
          <img src={assets.order_icon} className="w-5" />
          <p>Orders</p>
        </div>
      )}
    </NavLink>

  </div>
</div>
  );
};

export default Sidebar;
