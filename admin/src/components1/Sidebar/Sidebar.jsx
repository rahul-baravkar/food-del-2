import { assets } from "../../assets/assets";
import React from "react";
import "./Sidebar.css";
import { NavLink, Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add">
          <div className="sidebar-option hover:bg-red-100 transition-all duration-300 hover:border-red-300">
            <img src={assets.add_icon} alt="" />
            <p>Add Items</p>
          </div>
        </NavLink>

        <NavLink className="" to="/list">
          <div className="sidebar-option hover:bg-red-100 transition-all duration-400  hover:border-red-300">
            <img src={assets.order_icon} alt="" />
            <p>List Items</p>
          </div>
        </NavLink>

        <NavLink to="/order">
          <div className="sidebar-option hover:bg-red-100 transition-all duration-400  hover:border-red-300">
            <img src={assets.order_icon} alt="" />
            <p>Orders Items</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
