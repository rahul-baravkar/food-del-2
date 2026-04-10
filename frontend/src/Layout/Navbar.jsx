import React, { useContext, useState } from "react";
import { Button } from "../components/ui/button";
import logo from "@/assets/admin_assets/logo2.png";
import { NavLink, Link } from "react-router-dom";
import { StoreContext } from "@/context/StoreContext";
import { Search, ShoppingCart, User } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState("home");
  const { getTotalAmount, token, setToken } = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    toast("User Logout Successfull ✅ ")
    useNavigate("/");
  };
  return (
    <div className="w-full fixed top-0 left-0 bg-white shadow z-[999]  ">
      <div className="max-w-6xl mx-auto h-20 grid grid-cols-[1fr_1fr_1fr] px-6 items-center ">
        {/* Logo */}
        <a href="#Header-bar" to="/">
          <img src={logo} alt="" className="w-32 h-24 inline-block" />
        </a>

        {/* Menu */}
        <ul className="text-black flex items-center justify-evenly">
          <Link to="/">
            <li>Home</li>
          </Link>
          <a href="#menu-bar">
            <li>Menu</li>
          </a>
          <a href="#mobile-app">
            <li>Mobile-app</li>
          </a>
          <a href="#footer">
            <li>Contact-us</li>
          </a>
        </ul>

        <div className="flex justify-end gap-4">
          <Search className="  w-9 h-9"/>
          <Link to="/cart">
            <ShoppingCart className="w-9 h-9 "/>
          </Link>

          {getTotalAmount() > 0 && (
            <div className="  bg-red-600 w-2 h-2 -ml-7 rounded-full "></div>
          )}

          {!token ? (
            <Button
              onClick={() => setShowLogin(true)}
              className="w-20 ml-3"
              variant="outline"
            >
              Sign in
            </Button>
          ) : (
            <div className="profile-handler relative group">
              {/* Profile Image */}

              <User className="w-10 h-10" />

              {/* Dropdown */}
              <div
                className="
                        absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-lg p-2
                        opacity-0 invisible
                        group-hover:opacity-100 group-hover:visible
                        transition-all duration-200
                         "
              >
                <ul className="space-y-2">
                  <li
                    onClick={() => navigate("/myorders")}
                    className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                  >
                    <ShoppingCart className="w-7 h-7" />
                    <p>Order</p>
                  </li>

                  <hr />

                  <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    <Search className="w-7 h-7"/>
                    <p onClick={logout}>Logout</p>
                    
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
