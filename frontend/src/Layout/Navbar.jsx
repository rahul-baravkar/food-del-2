import React, { useContext, useState } from "react";
import { Button } from "../components/ui/button";
import logo from "@/assets/admin_assets/logo2.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { StoreContext } from "@/context/StoreContext";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { toast } from "react-toastify";

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { getTotalAmount, token, setToken } = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    toast("User Logout Successfull ✅ ");
    navigate("/"); // ✅ fixed (you used useNavigate wrongly before)
  };

  return (
    <>
      {/* Navbar */}
      <div className="w-full fixed top-0 left-0 bg-white shadow z-[999]">
        
        <div className="max-w-6xl mx-auto h-16 md:h-20 flex items-center justify-between px-4 md:px-6">
          
          {/* Left Section (Logo + Mobile Menu Button) */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <a href="#Header-bar">
              <img src={logo} alt="" className="w-24 md:w-32 h-auto" />
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex text-black items-center gap-6">
            <Link to="/"><li>Home</li></Link>
            <a href="#menu-bar"><li>Menu</li></a>
            <a href="#mobile-app"><li>Mobile-app</li></a>
            <a href="#footer"><li>Contact-us</li></a>
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-3 md:gap-4">
            <Search className="w-6 h-6 md:w-8 md:h-8" />

            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 md:w-8 md:h-8" />
              {getTotalAmount() > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-600 w-2 h-2 rounded-full"></div>
              )}
            </Link>


            {!token ? (
              <Button
                onClick={() => setShowLogin(true)}
                className="hidden md:block w-20"
                variant="outline"
              >
                Sign in
              </Button>
            ) : (
              <div className="relative group hidden md:block">
                <User className="w-7 h-7 md:w-9 md:h-9" />

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
                      <ShoppingCart className="w-5 h-5" />
                      <p>Order</p>
                    </li>

                    <hr />

                    <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                      <Search className="w-5 h-5" />
                      <p onClick={logout}>Logout</p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 🔥 Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden bg-white shadow px-6 py-4 space-y-4">
            <Link to="/" onClick={() => setMobileMenu(false)}>
              <p className="py-1 px-2 text-amber-950 font-semibold">Home</p>
            </Link>

            <a href="#menu-bar" onClick={() => setMobileMenu(false)}>
              <p className="py-1 px-2 text-amber-950 font-semibold">Menu</p>
            </a>

            <a href="#mobile-app" onClick={() => setMobileMenu(false)}>
              <p className="py-1 px-2 text-amber-950 font-semibold">Mobile-app</p>
            </a>

            <a href="#footer" onClick={() => setMobileMenu(false)}>
              <p className="py-1 px-2 text-amber-950 font-semibold">Contact-us</p>
            </a>

            {!token ? (
              <Button onClick={() => setShowLogin(true)} variant="outline">
                Sign in
              </Button>
            ) : (
              <Button onClick={logout} variant="outline">
                Logout
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;