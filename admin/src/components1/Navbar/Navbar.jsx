import { useContext } from "react";
import { assets } from "../../assets/assets";
import React from "react";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";

const Navbar = () => {
 
  const {token , setToken} = useContext(AdminContext)
  const logout = () => {
   const confirmLogout = window.confirm("Are you sure you want to log out?");
   if (!confirmLogout) return;
    setToken("")
    localStorage.removeItem("adminToken")
    toast("Admin Logout Successfully ✅")

  }
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center mx-auto max-w-[1300px] px-4 py-2">
        
        <img
          
          className="w-32 h-14 object-contain"
          src={assets.logo}
          alt="logo"
        />

       <p className="bg-red-200 px-2 py-1 hover:bg-red-400 border transaction-all duration-300 ease-in-out shadow rounded-md" onClick={logout}>Logout</p>

      </div>
    </div>
  );
};

export default Navbar;