import { useContext } from "react";
import { assets } from "../../assets/assets";
import React from "react";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import { Menu } from "lucide-react";

const Navbar = ({ setIsOpen }) => {
  const { token, setToken } = useContext(AdminContext);

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (!confirmLogout) return;

    setToken("");
    localStorage.removeItem("adminToken");
    toast("Admin Logout Successfully ✅");
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      
      {/* ✅ REMOVED max-w + mx-auto */}
      <div className="flex justify-between items-center w-full px-3 md:px-6 py-2 md:py-3">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="md:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>

          <img
            className="w-24 md:w-32 h-12 md:h-14 object-contain"
            src={assets.logo}
            alt="logo"
          />
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="bg-red-200 hover:bg-red-400 text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2 rounded-md shadow transition-all duration-300"
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default Navbar;